import {TitleH1, TitleH2, TitleH3, TitleH4, TitleH5, TitleH6} from "./style";

function Title({typography = 'h6', color = 'primary', children, ...rest}){

  function handleSizes(){
    if(typography === 'h1')
      return <TitleH1 color={color} {...rest}> {children} </TitleH1>
    else if(typography === 'h2')
      return <TitleH2 color={color} {...rest}> {children} </TitleH2>
    else if(typography === 'h3')
      return <TitleH3 color={color} {...rest}> {children} </TitleH3>
    else if(typography === 'h4')
      return <TitleH4 color={color} {...rest}> {children} </TitleH4>
    else if(typography === 'h5')
      return <TitleH5 color={color} {...rest}> {children} </TitleH5>
    else
      return <TitleH6 color={color} {...rest}> {children} </TitleH6>
  }

  return handleSizes()
}

export default Title;
