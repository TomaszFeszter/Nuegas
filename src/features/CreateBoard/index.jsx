import React from "react";
// import styled from "styled-components";
import { AutoForm } from "../../components/AutoForm";
import { useBoards } from "../../hooks";
import { useAuth } from "../../hooks/useAuth";
import createBoardSchema from "./../../config/schemas/pages/boards.json";

// const CustomAutoForm = styled(AutoForm)`
//   button {
//     margin-top: 1rem;
//     @media screen and (min-width: 830px) {
//       margin-top: 2rem;
//     }
//   }
// `;

export const CreateBoard = () => {
  const { createOne } = useBoards({ enableOne: false });
  const { user } = useAuth();
  const initialValues = {};

  const onSubmit = ({ title }) => {
    // console.log(formData.entries());

    createOne({ title, createdBy: { id: user.id }, id: Date.now() });
  };

  return (
    <AutoForm
      onSubmit={onSubmit}
      schema={createBoardSchema}
      initialValues={initialValues}
    />
  );
};
