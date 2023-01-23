import React from "react";
// import styled from "styled-components";
import { AutoForm } from "../../components/AutoForm";
import { useTasks } from "../../hooks";
import createTaskSchema from "../../config/schemas/pages/newTask.json";
import editTaskSchema from "../../config/schemas/pages/editTask.json";

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

export const EditTask = ({ id }) => {
  const { item, updateOne } = useTasks({ id });

  if (!item) return <div>Loading...</div>;

  const {
    data: { title, description, objectives, deadline },
  } = item;
  // console.log(objectives);
  const initialValues = {
    firstGroup: { title: title, deadline: deadline.slice(0, 16) },
    description,
    objectives: objectives.map((objective, index) => ({
      value: objective.title,
      complete: objective.complete,
      key: Date.now() + index,
    })),
  };

  // console.log(initialValues);
  const onSubmit = ({
    description,
    objectives: { key, complete, value },
    firstGroup: { title, deadline },
  }) => {
    updateOne(id, {
      description,
      title,
      deadline,
      objectives: { title: value, complete, key },
    });
  };

  return (
    <AutoForm
      onSubmit={onSubmit}
      schema={editTaskSchema}
      initialValues={initialValues}
    />
  );
};
