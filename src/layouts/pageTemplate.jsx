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
import i18n from "../i18n";

const MenuCell = styled(Cell)`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const ContentCell = styled(Cell)`
  background-color: ${(props) => props.theme.light200};
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const ContentHeading = styled.div`
  background-color: ${(props) => props.theme.white};
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
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 3.2rem;
  overflow-y: auto;
  height: 100%;
`;

export const PageTemplate = ({
  children,
  contentSize = 14,
  welcomeMsg,
  searchBar,
  addForm,
  // editForm,
}) => {
  const { user, isLoading } = useAuth();
  const [active, setActive] = useState(false);

  if (isLoading) return <div>Loading</div>;

  return (
    <>
      <MenuCell size={3}>
        <MenuSidebar />
        <Card
          heading={i18n.t("pageTemplate:card:heading")}
          content={i18n.t("pageTemplate:card:text")}
          btnText={i18n.t("pageTemplate:card:button")}
        />
      </MenuCell>
      <ContentCell size={contentSize}>
        <ContentHeading>
          <div>
            <Group vertical justify={"center"} gap={"0.8rem"}>
              <H2>
                {i18n.t("pageTemplate:heading:title")}
                {user && user.name} {user && user.lastName}
              </H2>
              {welcomeMsg ? (
                <P1>{i18n.t("pageTemplate:heading:subtitle")}</P1>
              ) : null}
            </Group>
            <Group>
              {/* TODO notification dropdown */}
              <UserDropdown user={user} />
            </Group>
          </div>
          {searchBar && (
            <div>
              <Group>
                <InputSearch
                  placeholder={i18n.t(
                    "pageTemplate:searchBar:inputPlaceholder"
                  )}
                />
                {addForm && (
                  <Btn rightIcon={<Plus />} onClick={() => setActive(!active)}>
                    {i18n.t("pageTemplate:searchBar:add")}
                  </Btn>
                )}
              </Group>
              <Group>
                <Btn leftIcon={<Filter />} secondary>
                  {i18n.t("pageTemplate:searchBar:filter")}
                </Btn>
                <Btn leftIcon={<ArrowDown />} secondary>
                  {i18n.t("pageTemplate:searchBar:sort")}
                </Btn>
              </Group>
            </div>
          )}
        </ContentHeading>
        <Content>{children}</Content>
      </ContentCell>
      {addForm ? (
        <Modal active={active} setActive={setActive}>
          {addForm}
        </Modal>
      ) : null}
      {/* {editForm ? (
        <Modal active={active} setActive={setActive}>
          {editForm}
        </Modal>
      ) : null} */}
    </>
  );
};
