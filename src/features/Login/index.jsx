import React from "react";
import styled from "styled-components";
import { AutoForm } from "../../components/AutoForm";
import { useAuth } from "../../hooks/useAuth";
import loginSchema from "./../../config/schemas/pages/login.json";

const CustomAutoForm = styled(AutoForm)`
  button {
    margin-top: 1rem;
    @media screen and (min-width: 830px) {
      margin-top: 2rem;
    }
  }
`;

export const Login = () => {
  const { auth } = useAuth();
  const onSubmit = ({ email, password }) => {
    if (!email || !password) return;

    auth({ email, password });
  };

  return <CustomAutoForm onSubmit={onSubmit} schema={loginSchema} />;
};
