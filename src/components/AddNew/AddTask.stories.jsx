import React from "react";
import { AddNew } from ".";
import { StoryTemplate } from "../../helpers/StoryTemplate";

export default {
  title: "AddNew",
  component: AddNew,
  decorators: [
    (Story) => (
      <StoryTemplate>
        <Story />
      </StoryTemplate>
    ),
  ],
};

export const Default = (args) => <AddNew {...args}></AddNew>;

Default.args = {
  value: [],
};
