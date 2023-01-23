import styled from "styled-components";
import React from "react";
import { H1, H2, H3 } from "../../components/Headings";
import { IconLabel } from "../../components/IconLabel";
import { Clock } from "react-feather";
import { AvatarList } from "../../components/AvatarList";
import i18n from "../../i18n";
import { Field } from "../../components/Field";
import { Checkbox } from "../../components/Checkbox";
import { useTasks } from "../../hooks";
import { uniqueId } from "lodash";

const Wrap = styled.div`
  display: flex;
  ${(props) => props.justify && `justify-content: ${props.justify};`}
  ${(props) => props.align && `align-items: ${props.align};`}
  ${(props) => props.gap && `gap: ${props.gap};`}
  ${(props) => props.vertical && "flex-direction: column;"}
  ${(props) => props.padding && `padding: ${props.padding};`}
`;

const TaskScreenComponent = ({ className, id }) => {
  const { item } = useTasks({ id });

  if (!item) return <div>Loading</div>;
  console.log(item);
  const {
    data: {
      src,
      title,
      description,
      category,
      deadline,
      colaborators,
      objectives,
    },
  } = item;
  return (
    <div className={className}>
      <figure>
        <img src={src} alt="" />
      </figure>
      <Wrap>
        <Wrap vertical gap="1.6rem">
          <H1>{title}</H1>
          <H3>{category}</H3>
          <Wrap gap="2rem">
            {deadline ? <IconLabel icon={<Clock />} label={deadline} /> : null}
            {colaborators ? <AvatarList imgList={colaborators} /> : null}
          </Wrap>
          <Wrap vertical gap="1.6rem">
            <H2>{i18n.t("task:screen:description")}</H2>
            <H3 lineHeight="2.8rem">{description}</H3>
          </Wrap>
          <Wrap vertical gap="1.6rem">
            <H2>{i18n.t("task:screen:objectives")}</H2>
            <ul>
              {objectives.map((objective) => (
                <li key={uniqueId()}>
                  <Field
                    checkbox
                    lHeight="4rem"
                    label={objective.title}
                    id={objective.key}
                  >
                    <Checkbox id={objective.key} />
                  </Field>
                </li>
              ))}
            </ul>
          </Wrap>
        </Wrap>
      </Wrap>
    </div>
  );
};

export const TaskScreen = styled(TaskScreenComponent)`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  background-color: ${(props) => props.theme.white};
  max-width: 72rem;

  figure {
    border-radius: 1rem;
    max-width: 72rem;
    max-height: 36rem;
    overflow: hidden;
  }

  > div {
    padding: 2.4rem;
    border-radius: 1rem;
  }
`;
