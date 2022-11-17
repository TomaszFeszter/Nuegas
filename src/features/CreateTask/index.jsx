import React from "react";
// import styled from "styled-components";
import { AutoForm } from "../../components/AutoForm";
import { useTasks } from "../../hooks";
import createTaskSchema from "./../../config/schemas/pages/tasks.json";

// const CustomAutoForm = styled(AutoForm)`
//   button {
//     margin-top: 1rem;
//     @media screen and (min-width: 830px) {
//       margin-top: 2rem;
//     }
//   }
// `;

export const CreateTask = () => {
  const { createOne } = useTasks({ enableOne: false });
  const initialValues = {
    firstGroup: { deadline: new Date().toISOString().slice(0, 16) },
  };

  const onSubmit = ({
    description,
    objectives,
    firstGroup: { title, deadline },
  }) => {
    // console.log(formData.entries());

    createOne({ description, title, deadline, objectives, id: Date.now() });
  };

  return (
    <AutoForm
      onSubmit={onSubmit}
      schema={createTaskSchema}
      initialValues={initialValues}
    />
  );
};
