import { action } from "@storybook/addon-actions";
import React from "react";
import { Dropdown, DropdownContent, DropdownOpen } from ".";
import { StoryTemplate } from "../../helpers/StoryTemplate";
import { Avatar } from "../Avatar";
import { SmallList, SmallListItem } from "../SmallList";

export default {
  title: "Dropdown",
  component: Dropdown,
  decorators: [
    (Story) => (
      <StoryTemplate>
        <Story />
      </StoryTemplate>
    ),
  ],
};

export const Default = (args) => (
  <Dropdown {...args}>
    <DropdownOpen>
      <Avatar
        onClick={() => console.log("first")}
        src="https://www.w3schools.com/howto/img_avatar.png"
      />
    </DropdownOpen>
    <DropdownContent>
      <SmallList>
        <SmallListItem
          href="/test"
          title="Profile"
          onClick={action("onClick")}
        />
        <SmallListItem
          href="/test2"
          title="Settings"
          onClick={action("onClick")}
        />
        <SmallListItem
          href="/test3"
          title="Help Center"
          onClick={action("onClick")}
        />
        <SmallListItem
          href="/test4"
          title="Logout"
          onClick={action("onClick")}
        />
      </SmallList>
    </DropdownContent>
  </Dropdown>
);
Default.args = {};
