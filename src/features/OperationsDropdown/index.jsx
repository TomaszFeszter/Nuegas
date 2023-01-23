import React from "react";
import { Menu } from "react-feather";
import styled from "styled-components";
import {
  Dropdown,
  DropdownContent,
  DropdownOpen,
} from "../../components/Dropdown";
import { SmallList, SmallListItem } from "../../components/SmallList";
import i18n from "../../i18n";

const OperationsDropdownComponent = ({ className, editItem, deleteItem }) => {
  return (
    <div className={className}>
      <Dropdown>
        <DropdownOpen>
          <Menu />
        </DropdownOpen>
        <DropdownContent>
          <SmallList>
            <SmallListItem title={i18n.t("edit")} onClick={editItem} />
            <SmallListItem title={i18n.t("delete")} onClick={deleteItem} />
          </SmallList>
        </DropdownContent>
      </Dropdown>
    </div>
  );
};

export const OperationsDropdown = styled(OperationsDropdownComponent)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;
