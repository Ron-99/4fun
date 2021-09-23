import {LoginFormStyle, LoginPage} from "./style";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {useLoginUser} from "../../services/Users/loginMutation";
import {useRef} from "react";
import * as Yup from "yup";
import {useHistory} from "react-router-dom";


function Login() {

  const formRef = useRef(null);
  const login = useLoginUser();
  const history = useHistory();

  async function handleSubmit(data){

    try{
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Email Incorreto")
          .required("Campo Obrigatório"),
        password: Yup.string().required("Campo Obrigatório"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await login.mutateAsync(data);
      history.go(0);
    }catch (err){
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        
      }
      if(err.response){
        validationErrors.password = 'Usuário/Senha incorretos'
      }

      formRef.current.setErrors(validationErrors);
    }
  }

  return(
    <>
      <LoginPage>
        <LoginFormStyle ref={formRef} onSubmit={handleSubmit}>
          <Title typography='h2'>Login</Title>

          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="email@exemplo.com"
          />

          <Input
            type="password"
            name="password"
            label="Senha"
            placeholder="Sua senha"
          />

          <Button type='submit' size='lg'>Login</Button>
        </LoginFormStyle>
      </LoginPage>
    </>
  )
}

export default Login;
