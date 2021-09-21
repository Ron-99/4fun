import {
  CardsWrapper,
  SubscriptionStyle,
  TitleWrapper
} from "./style";
import Title from "../../../../components/Title";
import Text from "../../../../components/Text";
import FlipperSub from "../../components/FlipperSub";
import {useListSeasonsQuery} from "../../../../services/Seasons/listSeasonsQuery";
import {PacmanLoader} from 'react-spinners'
import {theme} from "../../../../styles/theme";


function SubscriptionSection() {

  const {data, isLoading} = useListSeasonsQuery();

  return(
    <SubscriptionStyle id='subscription'>
      <TitleWrapper>
        <Title typography='h2'>Inscrições Abertas</Title>
        <Text size='md'>Período de inscrições abertas, não perca tempo e faça a sua inscrição, as vagas são limitadas!!!</Text>
      </TitleWrapper>

      <CardsWrapper>

        {
          isLoading ? <PacmanLoader color={theme.color.neutral100} size={100} margin={2}/> :
          data.map(value => (
              value.category !== 'F1 2020' && <FlipperSub key={value.id} id={value.id} img={value.urlimage} initialDate={new Date(value.initialdate)} endDate={new Date(value.date)} />
          ))
        }


      </CardsWrapper>

    </SubscriptionStyle>
  )
}

export default SubscriptionSection;
