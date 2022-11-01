import { SmallList, SmallListItem } from ".";
import React from "react";
import { StoryTemplate } from "../../helpers/StoryTemplate";
import { action } from "@storybook/addon-actions";

export default {
  title: "SmallList",
  component: SmallList,
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
    <SmallList>
      <SmallListItem href="/test" title="Profile" onClick={action("onClick")} />
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
      <SmallListItem href="/test4" title="Logout" onClick={action("onClick")} />
    </SmallList>
  </>
);
Default.args = {};
