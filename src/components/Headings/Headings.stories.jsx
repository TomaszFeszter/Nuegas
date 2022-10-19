import { H1, H2, H3 } from ".";
import React from "react";
import { StoryTemplate } from "../../Helpers/StoryTemplate";

export default {
  title: "Headings",
  component: H1,
  decorators: [
    (Story) => (
      <StoryTemplate>
        <Story />
      </StoryTemplate>
    ),
  ],
};

export const Heading1 = (args) => <H1 {...args} />;
Heading1.args = {
  children: "Heading 1",
  fontWeight: "600",
  fontSize: "3.2rem",
  lineHeight: "4.8rem",
  fontColor: "#141522",
};

export const Heading2 = (args) => <H2 {...args} />;
Heading2.args = {
  children: "Heading 2",
  fontWeight: "600",
  fontSize: "2.4rem",
  lineHeight: "3.6rem",
  fontColor: "#141522",
};

export const Heading3 = (args) => <H3 {...args} />;
Heading3.args = {
  children: "Heading 3",
  fontWeight: "600",
  fontSize: "1.4rem",
  lineHeight: "2.1rem",
  fontColor: "#141522",
};
