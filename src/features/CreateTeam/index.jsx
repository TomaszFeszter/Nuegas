import React from "react";
// import styled from "styled-components";
import { AutoForm } from "../../components/AutoForm";
import { useTeams } from "../../hooks";
import createTeamSchema from "./../../config/schemas/pages/teams.json";

// const CustomAutoForm = styled(AutoForm)`
//   button {
//     margin-top: 1rem;
//     @media screen and (min-width: 830px) {
//       margin-top: 2rem;
//     }
//   }
// `;

export const CreateTeam = () => {
  const { createOne } = useTeams({ enableOne: false });
  const initialValues = {};

  const onSubmit = ({ name, members }) => {
    // console.log(formData.entries());

    createOne({ name, members, id: Date.now() });
  };

  return (
    <AutoForm
      onSubmit={onSubmit}
      schema={createTeamSchema}
      initialValues={initialValues}
    />
  );
};
