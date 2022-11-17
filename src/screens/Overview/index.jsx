import { useAuth } from "../../hooks/useAuth";
import React from "react";
import { Cell, Grid, Page } from "../../layouts/common";
import { PageTemplate } from "../../layouts/pageTemplate";
import { useTasks } from "../../hooks";
import { TaskSlider } from "../../features/TaskSlider";
import styled from "styled-components";
import { AppCalendar } from "../../components/Calendar";

const Aside = styled(Cell)`
  background-color: ${(props) => props.theme.light500};
  padding: 3.2rem;
`;

export const OverviewPage = () => {
  const { token, isLoading } = useAuth();
  const { items } = useTasks({ enableAll: true, enableOne: false });

  if (isLoading) return <div>Loading...</div>;

  if (!token) return <div>nie zalogowano</div>;

  return (
    <Page>
      <Grid>
        <PageTemplate welcomeMsg contentSize={9}>
          <TaskSlider tasks={items && items.data} />
        </PageTemplate>
        <Aside size={5}>
          <AppCalendar />
        </Aside>
      </Grid>
    </Page>
  );
};
