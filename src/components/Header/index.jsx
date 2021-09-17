import {HeaderWrapper} from "./style";
import Burger from "./burger";
import {useEffect, useState} from "react";


function Header() {
  const [top, setTop] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  }, [])

  function listenScrollEvent() {
    if(window.pageYOffset > 20)
      setTop(false)
    else {
      setTop(true)
    }
  }


  return(
    <HeaderWrapper top={top}>
        <Burger />
    </HeaderWrapper>
  )
}

export default Header;
