import { faker } from "@faker-js/faker";
import { range, random } from "../utils/index.js";
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
  members: range(random(6), () => usersArr[random(19)].id),
}));

const tasksArr = range(15, () => ({
  id: faker.datatype.uuid(),
  title: faker.lorem.sentence(random(10)),
  description: faker.lorem.lines(2),
  createdBy: usersArr[random(20)],
  deadline: faker.date.soon(30),
  objectives: range(random(8), () => ({
    title: faker.lorem.sentence(random(8)),
    complete: faker.datatype.boolean(),
  })),
  isActive: faker.datatype.boolean(),
}));

const boardArr = range(4, () => ({
  id: faker.datatype.uuid(),
  title: faker.lorem.sentence(random(5)),
  createdBy: usersArr[random(20)],
  columns: {
    todo: range(random(10), () => tasksArr[random(14)]),
    inProgress: range(random(5), () => tasksArr[random(14)]),
    readyForCodeRev: range(random(5), () => tasksArr[random(14)]),
    inCodeRev: range(random(5), () => tasksArr[random(14)]),
    done: range(random(3), () => tasksArr[random(14)]),
  },
}));

const dataObj = {
  users: usersArr,
  teams: teamsArr,
  tasks: tasksArr,
  boards: boardArr,
};

fs.writeFileSync("./mock/db.json", JSON.stringify(dataObj));
