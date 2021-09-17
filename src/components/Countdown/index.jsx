import * as S from './style'
import {zeroPad} from "react-countdown";
import Text from "../Text";

const Countdown = (props) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Text size='md' color='secondary'>teste</Text>
    } else {
      return <Text size='md' color='secondary'>{days}D {zeroPad(hours)}H:{zeroPad(minutes)}M:{zeroPad(seconds)}S</Text>;
    }
  };
  return(
    <S.Style renderer={renderer} date={props.date}/>
  )
}

export default Countdown
