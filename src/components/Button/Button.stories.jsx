import { Btn } from ".";
import React from "react";
import { StoryTemplate } from "../../Helpers/StoryTemplate";
import { ArrowDown } from "react-feather";

export default {
  title: "Buttons",
  component: Btn,
  decorators: [
    (Story) => (
      <StoryTemplate>
        <Story />
      </StoryTemplate>
    ),
  ],
};

export const Primary = (args) => <Btn {...args} />;
Primary.args = {
  children: "Button",
};
export const Secondary = (args) => <Btn secondary {...args} />;
Secondary.args = {
  children: "Button",
};

export const LeftIcon = (args) => <Btn {...args} />;
LeftIcon.args = {
  children: "Button",
  leftIcon: <ArrowDown />,
  secondary: false,
};
export const RightIcon = (args) => <Btn {...args} />;
RightIcon.args = {
  children: "Button",
  rightIcon: <ArrowDown />,
  secondary: false,
};

export const IconOnly = (args) => <Btn {...args} />;
IconOnly.args = {
  rightIcon: <ArrowDown />,
};
