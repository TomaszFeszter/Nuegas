import { faker } from "@faker-js/faker";
import {
  range,
  random,
  getRandomUniqueArrValues,
  randomIntNoZero,
} from "../utils/index.js";
import fs from "fs";

const usersArr = range(20, () => ({
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  avatar: faker.internet.avatar(),
}));

const teamsArr = range(5, () => ({
  id: faker.datatype.uuid(),
  name: faker.company.name(),
  members: getRandomUniqueArrValues(randomIntNoZero(8), usersArr),
}));

const tasksArr = range(15, () => ({
  id: faker.datatype.uuid(),
  title: faker.lorem.sentence(randomIntNoZero(10)),
  description: faker.lorem.lines(2),
  createdBy: usersArr[random(19)],
  deadline: faker.date.soon(30),
  objectives: range(randomIntNoZero(8), () => ({
    title: faker.lorem.sentence(randomIntNoZero(8)),
    complete: faker.datatype.boolean(),
  })),
  isActive: faker.datatype.boolean(),
}));

const comentsArr = range(20, () => ({
  taskId: tasksArr[random(14)].id,
  userId: usersArr[random(19)].id,
  content: faker.lorem.lines(randomIntNoZero(3)),
}));

const boardArr = range(5, () => ({
  id: faker.datatype.uuid(),
  title: faker.lorem.sentence(randomIntNoZero(5)),
  createdBy: usersArr[random(19)],
}));

const boardColumnsArr = range(5, () => ({
  id: faker.datatype.uuid(),
  boardId: boardArr[random(4)],
  title: faker.lorem.sentence(randomIntNoZero(5)),
  tasks: getRandomUniqueArrValues(randomIntNoZero(10), tasksArr),
}));

const dataObj = {
  users: usersArr,
  teams: teamsArr,
  tasks: tasksArr,
  comments: comentsArr,
  boards: boardArr,
  boardColumns: boardColumnsArr,
};

fs.writeFileSync("./mock/db.json", JSON.stringify(dataObj));
