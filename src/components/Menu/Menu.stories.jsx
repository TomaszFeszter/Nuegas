import { Menu, MenuItem } from ".";
import React from "react";
import { StoryTemplate } from "../../helpers/StoryTemplate";
import { BookOpen, Grid, MessageSquare, Settings } from "react-feather";

export default {
  title: "Menu",
  component: Menu,
  decorators: [
    (Story) => (
      <StoryTemplate>
        <Story />
      </StoryTemplate>
    ),
  ],
};

export const Default = () => (
  <>
    <Menu>
      <MenuItem href="/test" title="Overview" icon={<Grid />} />
      <MenuItem href="/test2" title="Task" icon={<BookOpen />} />
      <MenuItem href="/test3" title="Message" icon={<MessageSquare />} />
      <MenuItem href="/test4" title="Settings" icon={<Settings />} />
    </Menu>
  </>
);
Default.args = {};
