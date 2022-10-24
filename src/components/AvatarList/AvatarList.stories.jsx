import React from "react";
import { AvatarList } from ".";
import { StoryTemplate } from "../../Helpers/StoryTemplate";

export default {
  title: "AvatarList",
  component: AvatarList,
  decorators: [
    (Story) => (
      <StoryTemplate>
        <Story />
      </StoryTemplate>
    ),
  ],
};

export const Default = (args) => <AvatarList {...args}></AvatarList>;
Default.args = {
  imgList: [
    "https://toppng.com/uploads/preview/avatar-png-11554021819gij72acuim.png",
    "https://www.w3schools.com/howto/img_avatar.png",
    "https://www.w3schools.com/howto/img_avatar2.png",
    "https://www.w3schools.com/w3images/avatar2.png",
    "https://www.w3schools.com/w3images/avatar6.png",
    "https://www.w3schools.com/w3images/avatar5.png",
  ],
};
