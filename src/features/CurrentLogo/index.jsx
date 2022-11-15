import { Logo } from "../../components/Logo";
import { LogoIcon } from "../../components/LogoIcon";
import React from "react";

export const CurrentLogo = ({ className }) => {
  return <Logo className={className} logo={<LogoIcon />} name="Nuegas" />;
};
