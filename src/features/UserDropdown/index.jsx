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
          <SmallListItem title="Profile" onClick={() => navigate()} />
          <SmallListItem
            title="Settings"
            onClick={() => navigate("/settings")}
          />
          <SmallListItem title="Help Center" onClick={() => navigate()} />
          <SmallListItem title="Logout" onClick={() => auth({}, "logout")} />
        </SmallList>
      </DropdownContent>
    </Dropdown>
  );
};
