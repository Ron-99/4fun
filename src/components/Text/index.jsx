import {TextStyle} from "./style";

function Text({ size = 'md', color = 'primary', bold, italic, children, ...rest}){

  return(
    <TextStyle bold={bold} color={color} italic={italic} size={size} {...rest}> {children} </TextStyle>
  )
}

export default Text;
