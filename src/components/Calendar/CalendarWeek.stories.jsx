import { AppCalendar } from ".";
import React from "react";
import { StoryTemplate } from "../../helpers/StoryTemplate";

export default {
  title: "Calendar",
  component: AppCalendar,
  decorators: [
    (Story) => (
      <StoryTemplate>
        <Story />
      </StoryTemplate>
    ),
  ],
};

export const Defalult = (args) => <AppCalendar {...args} />;
