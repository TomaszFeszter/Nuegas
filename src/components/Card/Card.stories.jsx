import { Card } from ".";
import React from "react";
import { StoryTemplate } from "../../Helpers/StoryTemplate";
import { action } from "@storybook/addon-actions";

export default {
  title: "Card",
  component: Card,
  decorators: [
    (Story) => (
      <StoryTemplate>
        <Story />
      </StoryTemplate>
    ),
  ],
};

export const Default = (args) => <Card {...args} />;
Default.args = {
  heading: "Help Center",
  content: "Having Trouble in Learning. Please contact us for more questions.",
  btnText: "Go To Help Center",
  handleClick: action("onClick"),
};
