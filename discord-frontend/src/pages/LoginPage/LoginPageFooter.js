import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton/CustomPrimaryButton";
import { useNavigate } from "react-router-dom";
import RedirectInfo from "../../shared/components/RedirectInfo/RedirectInfo.js";
import Tooltip from "@mui/material/Tooltip";

const getFormNotValidMessage = () => {
  return "Enter Correct e-mail address and password should contain between 6 & 12 characters";
};

const getFormValidMessage = () => {
  return "Press to log in!";
};
const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToRedirectPage = () => {
    navigate("/register");
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label={"Login"}
            additionalStyles={{ marginTop: "16px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>

      <RedirectInfo
        text={"Need an Account? "}
        redirectText={"Create an account"}
        additionalStyles={{ marginTop: "30px" }}
        redirectHandler={handlePushToRedirectPage}
      />
    </>
  );
};

export default LoginPageFooter;
