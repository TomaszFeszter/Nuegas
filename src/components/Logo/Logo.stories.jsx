import { Logo } from ".";
import React from "react";
import { StoryTemplate } from "../../Helpers/StoryTemplate";
import { LogoIcon } from "../LogoIcon";

export default {
  title: "Logo",
  component: Logo,
  decorators: [
    (Story) => (
      <StoryTemplate>
        <Story />
      </StoryTemplate>
    ),
  ],
};

export const Default = (args) => <Logo {...args} />;
Default.args = {
  name: "Nuegas",
  logo: <LogoIcon />,
};
