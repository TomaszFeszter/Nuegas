import { SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { Slider } from "../../components/Slider";
import { Task } from "../../components/Task";
// import { useUsers } from "../../hooks";

export const TaskSlider = ({ tasks }) => {
  // const { item, getOne } = useUsers();
  // console.log(item);
  // console.log(getOne());
  return (
    <Slider label="Tasks">
      {tasks
        ? tasks.map(({ id, src, title, objectives }) => {
            let countObjectives = 0;
            objectives.map((objective) => {
              objective.complete === true && countObjectives++;
            });
            return (
              <SplideSlide key={id}>
                <Task
                  src={src}
                  title={title}
                  category="UI UX Design"
                  completed={countObjectives}
                  taskLength={objectives.length}
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
            );
          })
        : null}
    </Slider>
  );
};
