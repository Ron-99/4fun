import Text from "../Text";
import {LinkStyle} from "./style";


function Link({ href, target, size, color = 'primary', children, ...rest}){

  return(
    <LinkStyle href={href} target={target} {...rest} >
      <Text size={size} color={color}>{children}</Text>
    </LinkStyle>

  )
}

export default Link;
