import Text from "../../components/Text";
import { useParams } from "react-router-dom";
import {RegisterPage} from "./style";
import Title from "../../components/Title";
import RegisterForm from "./components/RegisterForm";
import {BannerWrapper} from "../../styles/global";


function Register(){
  const { id } = useParams();

  return(
    <>
      <BannerWrapper>
        <Title typography='h1'>Inscrição</Title>
        <Text size='lg'>Faça já o seu cadastro e não perca tempo</Text>
      </BannerWrapper>

      <RegisterPage>
        <RegisterForm season={id}/>
      </RegisterPage>
    </>
  )
}

export default Register
