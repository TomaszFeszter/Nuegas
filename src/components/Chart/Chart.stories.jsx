import { MyChart } from ".";
import React from "react";
import { StoryTemplate } from "../../helpers/StoryTemplate";

export default {
  title: "MyChart",
  component: MyChart,
  decorators: [
    (Story) => (
      <StoryTemplate>
        <Story />
      </StoryTemplate>
    ),
  ],
};

export const Default = (args) => <MyChart {...args} />;
Default.args = {};
