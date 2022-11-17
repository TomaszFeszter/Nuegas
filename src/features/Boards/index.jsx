import React from "react";
import { Task } from "../../components/Task";
import { H2 } from "../../components/Headings";
import i18n from "../../i18n";
import styled from "styled-components";

const BoardsComponent = ({ className, boards }) => {
  // const { item, getOne } = useUsers({ enableOne: false });
  // console.log(item);
  // console.log(getOne());
  // console.log(boards);
  return (
    <section className={className}>
      <H2>{i18n.t("board:exist:heading")}</H2>
      <div>
        {boards
          ? boards.map(({ id, title, createdBy }) => {
              return (
                <Task
                  title={title}
                  category={"created by: " + (createdBy && createdBy.id)}
                  key={id}
                />
              );
            })
          : null}
      </div>
    </section>
  );
};

export const Boards = styled(BoardsComponent)`
  h2 {
    margin-bottom: 2.4rem;
  }
  > div {
    display: flex;
    gap: 2.4rem;
    flex-wrap: wrap;
  }
`;
