import React from "react";
import { CheckSquare, Clipboard, Grid, Settings, Users } from "react-feather";
import styled from "styled-components";
import { Menu, MenuItem } from "../../components/Menu";
import { CurrentLogo } from "../CurrentLogo";

const MenuSidebarComponent = ({ className }) => {
  return (
    <div className={className}>
      <CurrentLogo />
      <Menu>
        <MenuItem title="Overview" path={"/"} icon={<Grid />} />
        <MenuItem title="Tasks" path={"/task"} icon={<CheckSquare />} />
        <MenuItem title="Teams" path={"/teams"} icon={<Users />} />
        <MenuItem title="Boards" path={"/boards"} icon={<Clipboard />} />
        <MenuItem title="Settings" path={"/settings"} icon={<Settings />} />
      </Menu>
    </div>
  );
};

export const MenuSidebar = styled(MenuSidebarComponent)`
  margin-bottom: auto;
  > div {
    margin-bottom: 6rem;
  }
`;
