import React from "react";
import { Avatar } from ".";
import { StoryTemplate } from "../../Helpers/StoryTemplate";

export default {
  title: "Avatar",
  component: Avatar,
  decorators: [
    (Story) => (
      <StoryTemplate>
        <Story />
      </StoryTemplate>
    ),
  ],
};

export const Default = (args) => <Avatar {...args}></Avatar>;
Default.args = {
  src: "https://www.w3schools.com/howto/img_avatar.png",
  small: true,
  medium: false,
  border: false,
};
