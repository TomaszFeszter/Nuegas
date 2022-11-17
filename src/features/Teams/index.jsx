import React from "react";
import { Task } from "../../components/Task";
import { H2 } from "../../components/Headings";
import i18n from "../../i18n";
import styled from "styled-components";

const TeamsComponent = ({ className, teams }) => {
  // const { item, getOne } = useUsers({ enableOne: false });
  // console.log(item);
  // console.log(getOne());
  return (
    <section className={className}>
      <H2>{i18n.t("team:exist:heading")}</H2>
      <div>
        {teams
          ? teams.map(({ id, name, members }) => {
              return (
                <Task
                  title={name}
                  colaborators={
                    Array.isArray(members) &&
                    members.map((member) => member.avatar)
                  }
                  key={id}
                />
              );
            })
          : null}
      </div>
    </section>
  );
};

export const Teams = styled(TeamsComponent)`
  h2 {
    margin-bottom: 2.4rem;
  }
  > div {
    display: flex;
    gap: 2.4rem;
    flex-wrap: wrap;
  }
`;
