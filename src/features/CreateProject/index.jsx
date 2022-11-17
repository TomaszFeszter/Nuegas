import React from "react";
// import styled from "styled-components";
import { AutoForm } from "../../components/AutoForm";
import { useProjects } from "../../hooks";
import createProjectSchema from "./../../config/schemas/pages/projects.json";

// const CustomAutoForm = styled(AutoForm)`
//   button {
//     margin-top: 1rem;
//     @media screen and (min-width: 830px) {
//       margin-top: 2rem;
//     }
//   }
// `;

export const CreateProject = () => {
  const { createOne } = useProjects({ enableOne: false });
  const initialValues = {};

  const onSubmit = ({ title }) => {
    // console.log(formData.entries());

    createOne({ title, id: Date.now() });
  };

  return (
    <AutoForm
      onSubmit={onSubmit}
      schema={createProjectSchema}
      initialValues={initialValues}
    />
  );
};
