import React from "react";
import InputWithLabel from "../../shared/components/InputWithLabel/InputWithLabel";

const LoginPageInputs = ({ email, setEmail, password, setPassword }) => {
  return (
    <>
      <InputWithLabel
        value={email}
        setValue={setEmail}
        label="E-mail"
        type={"email"}
        placeholder={"Enter Email Address"}
      />

      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type={"password"}
        placeholder={"Enter Password"}
      />
    </>
  );
};

export default LoginPageInputs;
