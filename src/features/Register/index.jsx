import React from "react";
import { AutoForm } from "../../components/AutoForm";
import { useAuth } from "../../hooks/useAuth";
import registerSchema from "./../../config/schemas/pages/register.json";

export const Register = () => {
  const { auth } = useAuth();
  const initialValues = {
    secondGroup: { birthDate: new Date().toISOString().split("T")[0] },
  };

  const onSubmit = ({ email, password, confirmPassword }) => {
    if (!email || !password || !confirmPassword || password !== confirmPassword)
      return;

    auth({ email, password, type: "register" });
  };

  return (
    <AutoForm
      onSubmit={onSubmit}
      schema={registerSchema}
      initialValues={initialValues}
    />
  );
};
