import { t } from "i18next";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Hr } from "../../components/Hr";
import { Select } from "../../components/Select";
import { CurrentLogo } from "../../features/CurrentLogo";
import { Login } from "../../features/Login";
import i18n from "../../i18n";
import { AuthLayout } from "../../layouts/auth";
import LoginImg from "./img/loginImg.jpg";

const Language = styled(Select)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  @media screen and (min-width: 830px) {
    top: 3rem;
    right: 3rem;
  }
`;

const StyledLogo = styled(CurrentLogo)`
  padding-bottom: 3rem;
  @media screen and (min-width: 830px) {
    padding-bottom: 5rem;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.textDark500};
    font-size: 1.2rem;
    &:hover {
      text-decoration: underline;
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }
`;

export const LoginPage = () => {
  const [language, setLanguage] = useState("en");

  return (
    <AuthLayout
      imageSlot={<img src={LoginImg} alt="" />}
      contentSlot={
        <>
          <StyledLogo />
          <Login />
          <Hr />
          <Links>
            <Link to="/register">{t("login:link:register")}</Link>
            <Link to="/register">{t("login:link:password")}</Link>
          </Links>
          <Language
            options={["en", "pl", "fr"]}
            selectedOption={language}
            changeSelectedOption={(val) => {
              setLanguage(val);
              i18n.changeLanguage(val);
            }}
          />
        </>
      }
    />
  );
};
