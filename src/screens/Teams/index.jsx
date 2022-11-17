import { useAuth } from "../../hooks/useAuth";
import React from "react";
import { Grid, Page } from "../../layouts/common";
import { useTeams } from "../../hooks";
import { PageTemplate } from "../../layouts/pageTemplate";
import { CreateTeam } from "../../features/CreateTeam";
import { Teams } from "../../features/Teams";

export const TeamsPage = () => {
  const { token, isLoading } = useAuth();
  const { items } = useTeams({
    enableAll: true,
    enableOne: false,
    config: { params: { _embed: "users" } },
  });

  if (isLoading) return <div>Loading...</div>;

  if (!token) return <div>nie zalogowano</div>;

  return (
    <Page>
      <Grid>
        <PageTemplate searchBar addForm={<CreateTeam />}>
          <Teams teams={items && items.data} />
        </PageTemplate>
      </Grid>
    </Page>
  );
};
