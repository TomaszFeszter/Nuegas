import React from "react";
import { Task } from "../../components/Task";
import { H2 } from "../../components/Headings";
import i18n from "../../i18n";
import styled from "styled-components";

const ProjectsComponent = ({ className, projects }) => {
  // const { item, getOne } = useUsers({ enableOne: false });
  // console.log(item);
  // console.log(getOne());
  return (
    <section className={className}>
      <H2>{i18n.t("project:exist:heading")}</H2>
      <div>
        {projects
          ? projects.map(({ id, title, createdBy, colaborators }) => {
              return (
                <Task
                  title={title}
                  category={"created by: " + createdBy}
                  colaborators={
                    colaborators && colaborators.map((member) => member.avatar)
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

export const Projects = styled(ProjectsComponent)`
  h2 {
    margin-bottom: 2.4rem;
  }
  > div {
    display: flex;
    gap: 2.4rem;
    flex-wrap: wrap;
  }
`;
