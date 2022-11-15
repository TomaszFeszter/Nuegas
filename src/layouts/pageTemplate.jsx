import React from "react";
import styled from "styled-components";
import { H2 } from "../components/Headings";
import { P1 } from "../components/Parahraphs";
import { InputSearch } from "../components/InputSearch";
import { MenuSidebar } from "../features/MenuSidebar";
import { Cell } from "./common";
import { useAuth } from "../hooks/useAuth";
import { UserDropdown } from "../features/UserDropdown";
import { Btn } from "../components/Button";
import { ArrowDown, Filter, Plus } from "react-feather";
import { Card } from "../components/Card";
import { Modal } from "../components/Modal";
import { useState } from "react";
import { CreateTask } from "../features/CreateTask";

const MenuCell = styled(Cell)`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const ContentHeading = styled.div`
  width: 100%;
  max-height: 19.2rem;
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > div {
    display: flex;
    justify-content: space-between;
  }
`;

const Group = styled.div`
  display: flex;
  ${(props) => props.justify && `justify-content: ${props.justify};`}
  ${(props) => props.align && `align-items: ${props.align};`}
  ${(props) => (props.gap ? `gap: ${props.gap};` : "gap: 2.4rem;")}
  ${(props) => props.vertical && "flex-direction: column;"}
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.light200};
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 3.2rem;
`;

export const PageTemplate = ({
  children,
  contentSize = 12,
  welcomeMsg,
  searchBar,
  addTask,
}) => {
  const { user, isLoading } = useAuth();
  const [active, setActive] = useState(false);

  if (isLoading) return <div>Loading</div>;

  return (
    <>
      <MenuCell size={2}>
        <MenuSidebar />
        <Card
          heading="Help Center"
          content="Having Trouble in Learning. Please contact us for more questions."
          btnText="Go To Help Center"
        />
      </MenuCell>
      <Cell size={contentSize}>
        <ContentHeading>
          <div>
            <Group vertical justify={"center"} gap={"0.8rem"}>
              <H2>
                Hi, {user && user.name} {user && user.lastName}
              </H2>
              {welcomeMsg ? <P1>Lets finish your task today!</P1> : null}
            </Group>
            <Group>
              {/* TODO notification dropdown */}
              <UserDropdown user={user} />
            </Group>
          </div>
          {searchBar && (
            <div>
              <Group>
                <InputSearch placeholder="Search" />
                {addTask && (
                  <Btn rightIcon={<Plus />} onClick={() => setActive(!active)}>
                    Add Task
                  </Btn>
                )}
              </Group>
              <Group>
                <Btn leftIcon={<Filter />} secondary>
                  Filter by:
                </Btn>
                <Btn leftIcon={<ArrowDown />} secondary>
                  Sort by:
                </Btn>
              </Group>
            </div>
          )}
        </ContentHeading>
        <Content>{children}</Content>
      </Cell>
      <Modal active={active} setActive={setActive}>
        <CreateTask />
      </Modal>
    </>
  );
};
