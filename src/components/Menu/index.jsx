import React from "react";
import { BookOpen, MessageCircle, Settings, User } from "react-feather";
import styled from "styled-components";
import { IconLabel } from "../IconLabel";
import Overview from "./../../icons/overview.svg";

const Logo = styled.div`
  p {
    font-weight: 600;
    font-size: 3.2rem;
    line-height: 4.8rem;
  }
`;
const MenuComponent = ({ className }) => {
  return (
    <div className={className}>
      <Logo>
        <IconLabel label="Nuegas" />
      </Logo>
      <IconLabel label="Overview" icon={<Overview />} />
      <IconLabel label="Task" icon={<BookOpen />} />
      <IconLabel label="Mentors" icon={<User />} />
      <IconLabel label="Message" icon={<MessageCircle />} />
      <IconLabel label="Settings" icon={<Settings />} />
    </div>
  );
};

export const Menu = styled(MenuComponent)`
  background-color: ${(props) => props.theme.white};
  max-width: 25.2rem;
`;
