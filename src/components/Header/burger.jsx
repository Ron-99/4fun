import {BurgerStyle} from "./style";
import {useState} from "react";
import Nav from "./nav";

function Burger() {
  const [open, setOpen] = useState(false)
  return(
    <>
      <BurgerStyle open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerStyle>
      <Nav open={open} />
    </>
  )
}

export default Burger;
