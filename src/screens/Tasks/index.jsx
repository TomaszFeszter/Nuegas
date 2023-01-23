import { useAuth } from "../../hooks/useAuth";
import React from "react";
import { Grid, Page } from "../../layouts/common";
import { useTasks } from "../../hooks";
import { TaskSlider } from "../../features/Tasks";
import { PageTemplate } from "../../layouts/pageTemplate";
import { CreateTask, EditTask } from "../../features/ManageTask";
import { useParams } from "react-router";
import { TaskScreen } from "../../features/TaskPage";

export const TasksPage = () => {
  const { token, isLoading } = useAuth();
  const { items } = useTasks({ enableAll: true, enableOne: false });

  if (isLoading) return <div>Loading...</div>;

  if (!token) return <div>nie zalogowano</div>;

  return (
    <Page>
      <Grid>
        <PageTemplate searchBar addForm={<CreateTask />}>
          <TaskSlider tasks={items && items.data} />
        </PageTemplate>
      </Grid>
    </Page>
  );
};

export const TaskPage = () => {
  const { token, isLoading } = useAuth();
  let { taskId } = useParams();

  // console.log(taskId);

  if (isLoading) return <div>Loading...</div>;

  if (!token) return <div>nie zalogowano</div>;

  return (
    <Page>
      <Grid>
        <PageTemplate>
          <TaskScreen id={taskId} />
        </PageTemplate>
      </Grid>
    </Page>
  );
};

export const EditTasksPage = () => {
  const { token, isLoading } = useAuth();
  let { taskId } = useParams();

  // console.log(taskId);

  if (isLoading) return <div>Loading...</div>;

  if (!token) return <div>nie zalogowano</div>;

  return (
    <Page>
      <Grid>
        <PageTemplate>
          <EditTask id={taskId} />
        </PageTemplate>
      </Grid>
    </Page>
  );
};
