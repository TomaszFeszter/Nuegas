import React from "react";
import { useNavigate } from "react-router";
import {
  Dropdown,
  DropdownContent,
  DropdownOpen,
} from "../../components/Dropdown";
import { SmallList, SmallListItem } from "../../components/SmallList";
import { Avatar } from "../../components/Avatar";
import { useAuth } from "../../hooks/useAuth";
import i18n from "../../i18n";

export const UserDropdown = ({ user }) => {
  const { auth } = useAuth();

  const navigate = useNavigate();
  return (
    <Dropdown>
      <DropdownOpen>
        <Avatar src={user && user.avatar} />
      </DropdownOpen>
      <DropdownContent>
        <SmallList>
          <SmallListItem
            title={i18n.t("pageTemplate:heading:dropdown:profile")}
            onClick={() => navigate()}
          />
          <SmallListItem
            title={i18n.t("pageTemplate:heading:dropdown:settings")}
            onClick={() => navigate("/settings")}
          />
          <SmallListItem
            title={i18n.t("pageTemplate:heading:dropdown:logout")}
            onClick={() => auth({}, "logout")}
          />
        </SmallList>
      </DropdownContent>
    </Dropdown>
  );
};
