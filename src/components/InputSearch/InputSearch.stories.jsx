import { InputSearch } from ".";
import React from "react";
import { StoryTemplate } from "../../Helpers/StoryTemplate";

export default {
  title: "InputSearch",
  component: InputSearch,
  decorators: [
    (Story) => (
      <StoryTemplate>
        <Story />
      </StoryTemplate>
    ),
  ],
};

export const Defalult = (args) => <InputSearch {...args} />;
Defalult.args = {
  type: "search",
  placeholder: "Search something",
};
