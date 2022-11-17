import { useAuth } from "../../hooks/useAuth";
import React from "react";
import { Grid, Page } from "../../layouts/common";
import { useTasks } from "../../hooks";
import { TaskSlider } from "../../features/TaskSlider";
import { PageTemplate } from "../../layouts/pageTemplate";
import { CreateTask } from "../../features/CreateTask";

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
