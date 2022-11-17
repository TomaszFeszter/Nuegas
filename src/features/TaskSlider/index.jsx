import { SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { Slider } from "../../components/Slider";
import { Task } from "../../components/Task";
// import { useUsers } from "../../hooks";

export const TaskSlider = ({ tasks }) => {
  // const { item, getOne } = useUsers();
  // console.log(item);
  // console.log(getOne());
  // console.log(tasks);
  return (
    <Slider label="Tasks">
      {tasks
        ? tasks.map(({ id, src, title, objectives, colaborators }) => {
            // console.log(objectives);
            let countObjectives = 0;
            if (Array.isArray(objectives))
              objectives.forEach((objective) => {
                objective.complete === true && countObjectives++;
              });
            return (
              <SplideSlide key={id}>
                <Task
                  src={src}
                  title={title}
                  category="UI UX Design"
                  completed={countObjectives}
                  taskLength={objectives && objectives.length}
                  deadline="5 Hours"
                  colaborators={
                    colaborators && colaborators.map((member) => member.avatar)
                  }
                />
              </SplideSlide>
            );
          })
        : null}
    </Slider>
  );
};
