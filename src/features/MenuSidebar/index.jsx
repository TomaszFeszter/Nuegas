import React from "react";
import {
  CheckSquare,
  Clipboard,
  FileText,
  Grid,
  Settings,
  Users,
} from "react-feather";
import styled from "styled-components";
import { Menu, MenuItem } from "../../components/Menu";
import i18n from "../../i18n";
import { CurrentLogo } from "../CurrentLogo";

const MenuSidebarComponent = ({ className }) => {
  return (
    <div className={className}>
      <CurrentLogo />
      <Menu>
        <MenuItem
          title={i18n.t("pageTemplate:menu:overview")}
          path={"/"}
          icon={<Grid />}
        />
        <MenuItem
          title={i18n.t("pageTemplate:menu:projects")}
          path={"/projects"}
          icon={<FileText />}
        />
        <MenuItem
          title={i18n.t("pageTemplate:menu:tasks")}
          path={"/task"}
          icon={<CheckSquare />}
        />
        <MenuItem
          title={i18n.t("pageTemplate:menu:teams")}
          path={"/teams"}
          icon={<Users />}
        />
        <MenuItem
          title={i18n.t("pageTemplate:menu:boards")}
          path={"/boards"}
          icon={<Clipboard />}
        />
        <MenuItem
          title={i18n.t("pageTemplate:menu:settings")}
          path={"/settings"}
          icon={<Settings />}
        />
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
