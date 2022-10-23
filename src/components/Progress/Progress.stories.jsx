import { Progress } from ".";
import React from "react";
import { StoryTemplate } from "../../Helpers/StoryTemplate";

export default {
  title: "Progress",
  component: Progress,
  decorators: [
    (Story) => (
      <StoryTemplate>
        <Story />
      </StoryTemplate>
    ),
  ],
};

export const Default = (args) => <Progress {...args} />;

Default.args = {
  value: "70",
  max: "100",
};
