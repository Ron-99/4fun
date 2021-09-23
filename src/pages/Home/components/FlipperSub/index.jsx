import {
  ConfirrmIcon,
  FlipCard,
  FlipCardBack,
  FlipCardDetails,
  FlipCardFront,
  FlipCardInfo,
  FlipCardInner,
} from "./style";
import { ButtonWrapper, Icon } from "../../sections/SubscriptionSection/style";

import Text from "../../../../components/Text";
import Countdown from "../../../../components/Countdown";
import { faArrowLeft, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "../../../../components/Link";
import { faCalendarAlt, faClock } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { zeroPad } from "react-countdown";
import { useIsAuthQuery } from "../../../../services/Users/isAuthQuery";
import { useCreateSubscription } from "../../../../services/Subscription/createSubscriptionMutation";
import { useModal } from "../../../../context/Modal";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

function FlipperSub({ img, refetch, id, endDate, isSub, initialDate = new Date() }) {
  // History
  const history = useHistory();

  // States
  const [flipper, setFlipper] = useState(false);

  // React Query
  const { data: user } = useIsAuthQuery();
  const subscriptionMutation = useCreateSubscription();

  // Alert & Modal
  const alert = useAlert();
  const { setModal, setOptions } = useModal();

  function redirect() {
    if (user) {
      messageLogged();
    } else {
      messageNotLogged();
    }
  }

  function messageNotLogged() {
    setModal(true);
    setOptions({
      title: "Já possui cadastro em nossa plataforma ?",
      close: () => setFlipper(false),
      buttons: [
        {
          text: "Sim",
          size: "sm",
          color: "primary",
          callback: () => {
            setModal(false);
            history.push("/signin");
          },
        },
        {
          text: "Não",
          size: "sm",
          color: "primary",
          callback: () => {
            setModal(false);
            history.push("/signup");
          },
        },
        {
          text: "Cancelar",
          size: "sm",
          color: "secondary",
          callback: () => {
            setModal(false);
            setFlipper(false);
          },
        },
      ],
    });
  }

  function messageLogged() {
    setModal(true);
    setOptions({
      title: "Tem certeza que deseja inscrever-se nessa categoria?",
      text: "Obs.: Caso mude de idéia contate um de nosso administradores",
      close: () => setFlipper(false),
      buttons: [
        {
          text: "Sim",
          size: "sm",
          color: "primary",
          callback: async () => {
            await subscriptionMutation.mutateAsync({
              driverId: user.driver_id,
              seasonId: id,
            });
            alert.success("Inscrição realizada com sucesso!!");
            setModal(false);
            setFlipper(false);
            refetch();
          },
        },
        {
          text: "Não",
          size: "sm",
          color: "secondary",
          callback: () => {
            setModal(false);
            setFlipper(false);
          },
        },
      ],
    });
  }

  function formatDate() {
    const month = zeroPad(initialDate.getMonth() + 1);
    const day = zeroPad(initialDate.getDate());
    return `${day}/${month}/${initialDate.getFullYear()}`;
  }

  function formatTime() {
    const hours = zeroPad(initialDate.getHours());
    const minutes = zeroPad(initialDate.getMinutes());
    return `${hours}h${minutes}m (Brasilia)`;
  }

  return (
    <FlipCard>
      <FlipCardInner flipper={flipper}>
        <FlipCardFront isSub={isSub} onClick={ () => !isSub && setFlipper(true)}>
          <img
            src={img}
            alt="Avatar"
            style={{ width: 225, height: 225, borderRadius: 15 }}
          />
          <Text size="md" color="secondary" bold={true}>
            { !isSub ? 'PERÍODO DE INSCRIÇÃO' : 'INSCRIÇÃO REALIZADA'}
          </Text>
          {!isSub ? <Countdown date={endDate} /> : <ConfirrmIcon icon={faCheckCircle} size='4x' />}
          {!isSub && (
            <ButtonWrapper>
              <Text size="sm" onClick={redirect}>
                Inscrever-se
              </Text>
              <Text size="sm" onClick={() => setFlipper(true)}>
                Detalhes
              </Text>
            </ButtonWrapper>
          )}
        </FlipCardFront>
        <FlipCardBack onClick={() => setFlipper(false)}>
          <Icon
            icon={faArrowLeft}
            size="2x"
            onClick={() => setFlipper(false)}
          />
          <FlipCardDetails>
            <FlipCardInfo>
              <Icon icon={faMapMarkerAlt} />
              <Link
                size="sm"
                href="https://discord.com/invite/8dtkGux2Mj"
                target="_blank"
              >
                Discord da Liga
              </Link>
            </FlipCardInfo>
            <FlipCardInfo>
              <Icon icon={faCalendarAlt} />
              <Text size="sm">{formatDate()}</Text>
            </FlipCardInfo>
            <FlipCardInfo>
              <Icon icon={faClock} />
              <Text size="sm">{formatTime()}</Text>
            </FlipCardInfo>
          </FlipCardDetails>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCard>
  );
}

export default FlipperSub;
