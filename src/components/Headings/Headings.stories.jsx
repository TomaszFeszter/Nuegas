import { H1 } from ".";
import React from "react";
import { StoryTemplate } from "../../Helpers/StoryTemplate";

export default {
  title: "Heading",
  component: H1,
  decorators: [
    (Story) => (
      <StoryTemplate>
        <Story />
      </StoryTemplate>
    ),
  ],
};

const Template = (args) => <H1 {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Text",
  fontWeight: "600",
  fontSize: "3rem",
  lineHeight: "2rem",
  fontColor: "#000",
};
