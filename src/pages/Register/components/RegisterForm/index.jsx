import { RegisterButton, RegisterFormStyle } from "./style";
import Input from "../../../../components/Input";
import { useRef, useState } from "react";
import Button from "../../../../components/Button";
import { useNicknameExistsQuery } from "../../../../services/Drivers/nicknameExistsQuery";
import { useNumberExistsQuery } from "../../../../services/Drivers/numberExistsQuery";
import { useEmailExistsQuery } from "../../../../services/Users/emailExistsQuery";
import { useCreateDriver } from "../../../../services/Drivers/createDriverMutation";
import { useCreateUser } from "../../../../services/Users/createUserMutation";
import { useAlert } from "react-alert";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

function RegisterForm() {
  // States
  const [email, setEmail] = useState("");
  const [nickName, setNickname] = useState("");
  const [number, setNumber] = useState("");

  // Refs
  const formRef = useRef(null);

  // Queries
  const { refetch: refetchEmail } = useEmailExistsQuery(email);
  const { refetch: refetchNickname } = useNicknameExistsQuery(nickName);
  const { refetch: refetchNumber } = useNumberExistsQuery(number);

  // Mutations
  const mutationDriver = useCreateDriver();
  const mutationUser = useCreateUser();

  // Alert
  const alert = useAlert();

  // History
  const history = useHistory();

  const handleSubmit = async (data) => {
    try {
      const {
        data: { userExists },
      } = await refetchEmail();
      const {
        data: { nicknameExists },
      } = await refetchNickname();
      const {
        data: { numberExists },
      } = await refetchNumber();

      console.log(userExists, nicknameExists, numberExists);

      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        firstName: Yup.string().required("Campo Obrigatório"),
        lastName: Yup.string().required("Campo Obrigatório"),
        nickName: Yup.string()
          .required("Campo Obrigatório")
          .test({
            name: "nicknameExists",
            message: "Nickname já possui cadatrado",
            test: () => !nicknameExists,
          }),
        number: Yup.number()
          .typeError("Apenas números são aceitos")
          .required("Campo Obrigatório")
          .test({
            name: "numberExists",
            message: "Número já possui cadatrado",
            test: () => !numberExists,
          }),
        email: Yup.string()
          .email("Email Incorreto")
          .required("Campo Obrigatório")
          .test({
            name: "emailExists",
            message: "Email já possui cadastro",
            test: () => !userExists,
          }),
        password: Yup.string().required("Campo Obrigatório"),
        confirmPassword: Yup.string().oneOf(
          [Yup.ref("password"), null],
          "As senhas não coincidem"
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const driver = {
        nickName: data.nickName.toLowerCase(),
        number: data.number,
        penaltyId: 1,
      };

      const user = {
        firstName: data.firstName.toLowerCase(),
        lastName: data.lastName.toLowerCase(),
        email: data.email.toLowerCase(),
        password: data.password,
        role: "USER",
        mobilePhoneNumber: data.phone,
      };

      const d = await mutationDriver.mutateAsync(driver);
      user.driverId = d.id;
      await mutationUser.mutateAsync(user);

      alert.success("Cadastro efetuado com sucesso!!");
      formRef.current.reset();
      history.go(0);
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  };

  return (
    <RegisterFormStyle ref={formRef} onSubmit={handleSubmit}>
      <Input label="Nome" name="firstName" placeholder="Seu Nome" />
      <Input label="Sobrenome" name="lastName" placeholder="Seu Sobrenome" />
      <Input
        label="Nickname"
        name="nickName"
        placeholder="Seu apelido nos jogos"
        onChange={() => setNickname(formRef.current.getFieldValue("nickName"))}
      />
      <Input
        label="Número"
        name="number"
        placeholder="Seu número"
        maxLength={3}
        onChange={() => setNumber(formRef.current.getFieldValue("number"))}
      />
      <Input
        type="mask"
        mask="(99) 99999-9999"
        label="Celular"
        placeholder="(11) 11111-1111"
        name="phone"
      />
      <Input
        type="email"
        name="email"
        label="Email"
        placeholder="email@exemplo.com"
        onChange={() => setEmail(formRef.current.getFieldValue("email"))}
      />

      <Input
        type="password"
        name="password"
        label="Senha"
        placeholder="Sua senha"
      />
      <Input
        type="password"
        name="confirmPassword"
        label="Confirmar Senha"
        placeholder="Confirme sua senha"
      />

      <RegisterButton>
        <Button type="submit">Inscrever-se</Button>
      </RegisterButton>
    </RegisterFormStyle>
  );
}

export default RegisterForm;
