import Text from "../../components/Text";
import { useParams } from "react-router-dom";
import {BannerWrapper, RegisterPage} from "./style";
import Title from "../../components/Title";
import RegisterForm from "./components/RegisterForm";


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
