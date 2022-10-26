import React from "react";
import styled from "styled-components";
import { H3 } from "../Headings";
import { P1, P2 } from "../Parahraphs";

const ListComponent = ({ className, taskList, title, category }) => {
  const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  `;

  const Li = styled.li`
    padding-left: 4.8rem;
    position: relative;
    height: 3.6rem;
    display: flex;
    align-items: center;

    :not(:last-child) {
      margin-bottom: 2rem;
    }

    &::before {
      content: "${(props) => `${props.number + 1}`}";
      color: ${(props) => props.fontColor || props.theme.textDark800};
      font-weight: ${(props) => props.fontWeight || 600};
      font-size: ${(props) => props.fontSize || "1.4rem"};
      line-height: ${(props) => props.lineHeight || "2.1rem"};
      position: absolute;
      left: 0;
      top: 0;
      width: 3.6rem;
      height: 3.6rem;
      border-radius: 1rem;
      background-color: ${(props) => props.theme.light500};
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  return (
    <div className={className}>
      {(title || category) && (
        <Heading>
          {title && <P1 fontWeight="600">{title}</P1>}
          {category && <P2>{category}</P2>}
        </Heading>
      )}
      <ul>
        {taskList.map((task, index) => (
          <Li key={index} number={index}>
            <H3 fontWeight="500">{task}</H3>
          </Li>
        ))}
      </ul>
    </div>
  );
};

export const List = styled(ListComponent)``;
