import {FlipCard, FlipCardBack, FlipCardDetails, FlipCardFront, FlipCardInfo, FlipCardInner,} from './style';
import {
  ButtonWrapper,
  Icon
} from "../../sections/SubscriptionSection/style";

import Text from "../../../../components/Text";
import Countdown from "../../../../components/Countdown";
import {faArrowLeft, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import Link from "../../../../components/Link";
import {faCalendarAlt, faClock} from "@fortawesome/free-regular-svg-icons";
import {useState} from "react";
import {useHistory} from 'react-router-dom';
import {zeroPad} from "react-countdown";

function FlipperSub({img, endDate ,initialDate = new Date()}){

  const [flipper, setFlipper] = useState(false)
  const history = useHistory();

  function redirect(id) {
    history.push(`signup/1`)
  }

  function formatDate(){
    const month = zeroPad(initialDate.getMonth() + 1)
    const day = zeroPad(initialDate.getDate())
    return `${day}/${month}/${initialDate.getFullYear()}`
  }

  function formatTime(){
    const hours = zeroPad(initialDate.getUTCHours());
    const minutes = zeroPad(initialDate.getMinutes());
    return `${hours}h${minutes}m`
  }

  return(
    <FlipCard >
      <FlipCardInner flipper={flipper}>
        <FlipCardFront onClick={() => setFlipper(true)}>
          <img src={img} alt="Avatar" style={{width: 225, height: 225, borderRadius: 15}} />
          <Text size='md' color='secondary' bold={true}>PERÍODO DE INSCRIÇÃO</Text>
          <Countdown date={endDate} />
          <ButtonWrapper>
            <Text size='sm' onClick={redirect}>Inscrever-se</Text>
            <Text size='sm' onClick={() => setFlipper(true)}>Detalhes</Text>
          </ButtonWrapper>
        </FlipCardFront>
        <FlipCardBack className="flip-card-back" onClick={() => setFlipper(false)}>
          <Icon icon={faArrowLeft} size='2x' onClick={() => setFlipper(false)} />
          <FlipCardDetails>
            <FlipCardInfo>
              <Icon icon={faMapMarkerAlt}/>
              <Link size='sm' href='https://discord.com/invite/8dtkGux2Mj' target='_blank'>Discord da Liga</Link>
            </FlipCardInfo>
            <FlipCardInfo>
              <Icon icon={faCalendarAlt} />
              <Text size='sm'>{formatDate()}</Text>
            </FlipCardInfo>
            <FlipCardInfo>
              <Icon icon={faClock}/>
              <Text size='sm'>{formatTime()}</Text>
            </FlipCardInfo>
          </FlipCardDetails>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCard>
  )
}

export default FlipperSub;
