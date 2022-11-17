import { useAuth } from "../../hooks/useAuth";
import React from "react";
import { Grid, Page } from "../../layouts/common";
import { useProjects } from "../../hooks";
import { PageTemplate } from "../../layouts/pageTemplate";
import { CreateProject } from "../../features/CreateProject";
import { Projects } from "../../features/Projects";

export const ProjectsPage = () => {
  const { token, isLoading } = useAuth();
  const { items } = useProjects({ enableAll: true, enableOne: false });

  if (isLoading) return <div>Loading...</div>;

  if (!token) return <div>nie zalogowano</div>;

  return (
    <Page>
      <Grid>
        <PageTemplate searchBar addForm={<CreateProject />}>
          <Projects projects={items && items.data} />
        </PageTemplate>
      </Grid>
    </Page>
  );
};
