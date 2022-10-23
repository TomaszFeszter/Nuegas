import React from "react";
import { Clock } from "react-feather";
import { IconLabel } from ".";
import { StoryTemplate } from "../../Helpers/StoryTemplate";

export default {
  title: "IconLabel",
  component: IconLabel,
  decorators: [
    (Story) => (
      <StoryTemplate>
        <Story />
      </StoryTemplate>
    ),
  ],
};

export const Default = (args) => <IconLabel {...args}></IconLabel>;
Default.args = {
  label: "icon label",
  icon: <Clock />,
};
