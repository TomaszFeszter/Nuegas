import { P1, P2 } from ".";
import React from "react";
import { StoryTemplate } from "../../Helpers/StoryTemplate";

export default {
  title: "Paragraphs",
  component: P1,
  decorators: [
    (Story) => (
      <StoryTemplate>
        <Story />
      </StoryTemplate>
    ),
  ],
};

export const Paragraph1 = (args) => <P1 {...args} />;
Paragraph1.args = {
  children: "Paragraph 1",
  fontWeight: "500",
  fontSize: "1.6rem",
  lineHeight: "2.4rem",
  fontColor: "#141522",
};

export const Paragraph2 = (args) => <P2 {...args} />;
Paragraph2.args = {
  children: "Paragraph 2",
  fontWeight: "500",
  fontSize: "1.2rem",
  lineHeight: "1.5rem",
  fontColor: "#141522",
};
