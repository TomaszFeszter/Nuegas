import { useAuth } from "../../hooks/useAuth";
import React from "react";
import { Grid, Page } from "../../layouts/common";
import { useBoards } from "../../hooks";
import { PageTemplate } from "../../layouts/pageTemplate";
import { CreateBoard } from "../../features/CreateBoard";
import { Boards } from "../../features/Boards";

export const BoardsPage = () => {
  const { token, isLoading } = useAuth();
  const { items } = useBoards({ enableAll: true, enableOne: false });

  if (isLoading) return <div>Loading...</div>;

  if (!token) return <div>nie zalogowano</div>;

  return (
    <Page>
      <Grid>
        <PageTemplate searchBar addForm={<CreateBoard />}>
          <Boards boards={items && items.data} />
        </PageTemplate>
      </Grid>
    </Page>
  );
};
