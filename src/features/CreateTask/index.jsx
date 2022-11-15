import React from "react";
// import styled from "styled-components";
import { AutoForm } from "../../components/AutoForm";
import { useAuth } from "../../hooks/useAuth";
import createTaskSchema from "./../../config/schemas/pages/newTask.json";

// const CustomAutoForm = styled(AutoForm)`
//   button {
//     margin-top: 1rem;
//     @media screen and (min-width: 830px) {
//       margin-top: 2rem;
//     }
//   }
// `;

export const CreateTask = () => {
  const { auth } = useAuth();
  const initialValues = {};
  initialValues["date"] = new Date().toISOString().split("T")[0];

  const onSubmit = (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) return;

    auth({ email, password });
  };

  return (
    <AutoForm
      onSubmit={onSubmit}
      schema={createTaskSchema}
      initialValues={initialValues}
    />
  );
};
