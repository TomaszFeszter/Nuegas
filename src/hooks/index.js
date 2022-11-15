import { createHookFromService } from "../helpers/createHookFromService";
import {
  boardsService,
  projectsService,
  tasksService,
  teamsService,
  usersService,
} from "../services";

export const useTasks = createHookFromService(tasksService);

export const useBoards = createHookFromService(boardsService);

export const useTeams = createHookFromService(teamsService);

export const useProjects = createHookFromService(projectsService);

export const useUsers = createHookFromService(usersService);
