import React from "react";
import { Clock } from "react-feather";
import styled from "styled-components";
import { AvatarList } from "../AvatarList";
import { IconLabel } from "../IconLabel";
import { P1, P2 } from "../Parahraphs";
import { Progress } from "../Progress";

const TaskComponent = ({
  className,
  src,
  title,
  category,
  completed,
  taskLength,
  deadline,
  colaborators,
}) => {
  const TaskImg = styled.figure`
    border-radius: 1.5rem;
    overflow: hidden;
    ${(props) => (props.big ? "max-height: 16rem;" : "max-height: 11rem;")};
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `;

  const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  return (
    <div className={className}>
      <TaskImg>
        <img src={src} alt="" />
      </TaskImg>
      <div>
        <P1 fontWeight="600">{title}</P1>
        <P2>{category}</P2>
      </div>
      <Progress value={completed} max={taskLength} title long />
      <Wrap>
        <IconLabel icon={<Clock />} label={deadline} />
        <AvatarList imgList={colaborators} />
      </Wrap>
    </div>
  );
};

export const Task = styled(TaskComponent)`
  ${(props) => (props.big ? "max-width: 37.2rem;" : "max-width: 32.8rem;")};
  ${(props) => (props.small ? "padding: 2rem;" : "padding: 2.4rem")};
  background-color: ${(props) => props.theme.white};
  border-radius: 1rem;

  > :not(:last-child) {
    ${(props) =>
      props.big ? "margin-bottom: 2rem;" : "margin-bottom: 1.6rem;"};
  }
`;
