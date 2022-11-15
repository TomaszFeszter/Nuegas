import { t } from "i18next";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Hr } from "../../components/Hr";
import { Select } from "../../components/Select";
import { CurrentLogo } from "../../features/CurrentLogo";
import { Register } from "../../features/Register";
import i18n from "../../i18n";
import { AuthLayout } from "../../layouts/auth";
import RegisterImg from "./img/registerImg.jpg";

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

export const RegisterPage = () => {
  const [language, setLanguage] = useState("en");

  return (
    <AuthLayout
      imageSlot={<img src={RegisterImg} alt="" />}
      contentSlot={
        <>
          <StyledLogo />
          <Register />
          <Hr />
          <Links>
            <Link to="/login">{t("register:link:login")}</Link>
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
