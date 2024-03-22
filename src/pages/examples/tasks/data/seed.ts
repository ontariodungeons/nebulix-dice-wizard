import fs from "fs"
import path from "path"
import { faker } from "@faker-js/faker"
import { fileURLToPath } from 'node:url';

import { labels, priorities, statuses } from "./data"

const tasksPath = fileURLToPath(new URL('tasks.json', import.meta.url));

const tasks = Array.from({ length: 100 }, () => ({
  id: `TASK-${faker.number.int({ min: 1000, max: 9999 })}`,
  title: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  status: faker.helpers.arrayElement(statuses).value,
  label: faker.helpers.arrayElement(labels).value,
  priority: faker.helpers.arrayElement(priorities).value,
}))

fs.writeFileSync(
  tasksPath,
  JSON.stringify(tasks, null, 2)
)

console.log("✅ Tasks data generated.")
