import { Slider } from ".";
import React from "react";
import { StoryTemplate } from "../../Helpers/StoryTemplate";
import { SplideSlide } from "@splidejs/react-splide";
import { Task } from "../Task";

export default {
  title: "Slider",
  component: Slider,
  decorators: [
    (Story) => (
      <StoryTemplate>
        <Story />
      </StoryTemplate>
    ),
  ],
};

export const Defalult = (args) => (
  <Slider {...args}>
    <SplideSlide>
      <Task
        src="https://thumbor.autonomous.ai/z6XLdFtfOlHdB4RyUSNJUCxVX8I=/1000x500/filters:quality(100)/https://cdn.autonomous.ai/static/upload/images/new_post/15-best-home-office-desk-for-2021-1053.jpg"
        title="Creating Mobile App Design"
        category="UI UX Design"
        completed="3"
        taskLength="10"
        deadline="5 Hours"
        colaborators={[
          "https://www.w3schools.com/howto/img_avatar.png",
          "https://www.w3schools.com/howto/img_avatar2.png",
          "https://www.w3schools.com/w3images/avatar2.png",
          "https://www.w3schools.com/w3images/avatar6.png",
          "https://www.w3schools.com/w3images/avatar5.png",
          "https://toppng.com/uploads/preview/avatar-png-11554021819gij72acuim.png",
        ]}
      />
    </SplideSlide>
    <SplideSlide>
      <Task
        src="https://thumbor.autonomous.ai/z6XLdFtfOlHdB4RyUSNJUCxVX8I=/1000x500/filters:quality(100)/https://cdn.autonomous.ai/static/upload/images/new_post/15-best-home-office-desk-for-2021-1053.jpg"
        title="Creating Mobile App Design"
        category="UI UX Design"
        completed="3"
        taskLength="10"
        deadline="5 Hours"
        colaborators={[
          "https://www.w3schools.com/howto/img_avatar.png",
          "https://www.w3schools.com/howto/img_avatar2.png",
          "https://www.w3schools.com/w3images/avatar2.png",
          "https://www.w3schools.com/w3images/avatar6.png",
          "https://www.w3schools.com/w3images/avatar5.png",
          "https://toppng.com/uploads/preview/avatar-png-11554021819gij72acuim.png",
        ]}
      />
    </SplideSlide>
    <SplideSlide>
      <Task
        src="https://thumbor.autonomous.ai/z6XLdFtfOlHdB4RyUSNJUCxVX8I=/1000x500/filters:quality(100)/https://cdn.autonomous.ai/static/upload/images/new_post/15-best-home-office-desk-for-2021-1053.jpg"
        title="Creating Mobile App Design"
        category="UI UX Design"
        completed="3"
        taskLength="10"
        deadline="5 Hours"
        colaborators={[
          "https://www.w3schools.com/howto/img_avatar.png",
          "https://www.w3schools.com/howto/img_avatar2.png",
          "https://www.w3schools.com/w3images/avatar2.png",
          "https://www.w3schools.com/w3images/avatar6.png",
          "https://www.w3schools.com/w3images/avatar5.png",
          "https://toppng.com/uploads/preview/avatar-png-11554021819gij72acuim.png",
        ]}
      />
    </SplideSlide>
    <SplideSlide>
      <Task
        src="https://thumbor.autonomous.ai/z6XLdFtfOlHdB4RyUSNJUCxVX8I=/1000x500/filters:quality(100)/https://cdn.autonomous.ai/static/upload/images/new_post/15-best-home-office-desk-for-2021-1053.jpg"
        title="Creating Mobile App Design"
        category="UI UX Design"
        completed="3"
        taskLength="10"
        deadline="5 Hours"
        colaborators={[
          "https://www.w3schools.com/howto/img_avatar.png",
          "https://www.w3schools.com/howto/img_avatar2.png",
          "https://www.w3schools.com/w3images/avatar2.png",
          "https://www.w3schools.com/w3images/avatar6.png",
          "https://www.w3schools.com/w3images/avatar5.png",
          "https://toppng.com/uploads/preview/avatar-png-11554021819gij72acuim.png",
        ]}
      />
    </SplideSlide>
    <SplideSlide>
      <Task
        src="https://thumbor.autonomous.ai/z6XLdFtfOlHdB4RyUSNJUCxVX8I=/1000x500/filters:quality(100)/https://cdn.autonomous.ai/static/upload/images/new_post/15-best-home-office-desk-for-2021-1053.jpg"
        title="Creating Mobile App Design"
        category="UI UX Design"
        completed="3"
        taskLength="10"
        deadline="5 Hours"
        colaborators={[
          "https://www.w3schools.com/howto/img_avatar.png",
          "https://www.w3schools.com/howto/img_avatar2.png",
          "https://www.w3schools.com/w3images/avatar2.png",
          "https://www.w3schools.com/w3images/avatar6.png",
          "https://www.w3schools.com/w3images/avatar5.png",
          "https://toppng.com/uploads/preview/avatar-png-11554021819gij72acuim.png",
        ]}
      />
    </SplideSlide>
  </Slider>
);
Defalult.args = {
  label: "My images",
};
