import { ButtonStyle } from "./style";

function Button({size = 'sm', color = 'primary', children, ...rest}){

  return(
    <ButtonStyle size={size} color={color} {...rest}> {children} </ButtonStyle>
  )
}

export default Button
