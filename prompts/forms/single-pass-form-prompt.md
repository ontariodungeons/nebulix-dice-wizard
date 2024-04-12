# Base Prompt For Single Pass

## Prequisite Review

The project is already configured and running, review astro.config.mjs, tailwindcss.config.js, tsconfig.json, postcss.config.js, package.json

## Astro Form Structure

[website](https://docs.astro.build/en/recipes/build-forms/)

```astro
---
// Server-side logic (e.g., form submission handling) would go here.
---
<h1>Login</h1>
<form method="POST">
  <label for="username">
    Username:
    <input type="text" id="username" name="username" required />
  </label>
  <label for="password">
    Password:
    <input type="password" id="password" name="password" required />
  </label>
  <button type="submit">Login</button>
</form>
```

1. Ensure that the forms use the POST method
2. Include a frontmatter section at the top of your .astro file if you need to add any server-side logic or data fetching.


## Astro DB

Familiarize yourself with how Astro DB works by reviewing the official guide here: [Understanding Astro DB](docs.astro.build/en/guides/astro-db/).

**[Table Definitions](../db/config.ts)**

Here's an example of a simple form that collects user feedback and posts it to Astro DB, adhering to our project guidelines:

```ts
const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  }
});

const Comment = defineTable({
  columns: {
    authorId: column.number({ references: () => Author.columns.id }),
    content: column.text(),
  }
});
```

```astro
---
import { db, Comment } from 'astro:db';

if (Astro.request.method === 'POST') {
  // parse form data
  const formData = await Astro.request.formData();
  const author = formData.get('author');
  const content = formData.get('content');
  if (typeof author === 'string' && typeof content === 'string') {
    // insert form data into the Comment table
    await db.insert(Comment).values({ author, content });
  }
}

// render the new list of comments on each request
const comments = await db.select().from(Comment);
---

<form method="POST" style="display: grid">
  <label for="author">Author</label>
  <input id="author" name="author" />

  <label for="content">Content</label>
  <textarea id="content" name="content"></textarea>

  <button type="submit">Submit</button>
</form>
```

## Validation

* All Forms must be validated
* User errors are warnings and must be displayed to the user
* All other errors should log to the console during development

```astro
const errors = { username: "", email: "", password: "" };
if (Astro.request.method === "POST") {
  try {
    const data = await Astro.request.formData();
    const name = data.get("username");
    const email = data.get("email");
    const password = data.get("password");
    if (typeof name !== "string" || name.length < 1) {
      errors.username += "Please enter a username. ";
    }
    if (typeof email !== "string" || !isValidEmail(email)) {
      errors.email += "Email is not valid. ";
    } else if (await isRegistered(email)) {
      errors.email += "Email is already registered. ";
    }
    if (typeof password !== "string" || password.length < 6) {
      errors.password += "Password must be at least 6 characters. ";
    }
    const hasErrors = Object.values(errors).some((msg) => msg);
    if (!hasErrors) {
      await registerUser({ name, email, password });
      return Astro.redirect("/login");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}
```

### Data

```ts
export const Player = defineTable({
 columns: {
  id: column.number({ primaryKey: true }),
  email: column.text({ unique: true }),
  real_name: column.text(),
  player_name: column.text(),
  player_age: column.number(),
  child_name: column.text({ optional: true }),
  pronouns: column.text(),
expanded_interests: column.text({optional: true}),
  questions: column.text({optional: true })
 }, 
});

export const PlayerDays = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    player_id: column.number({ references: () => Player.columns.id }),
    day_id: column.number({ references: () => DayName.columns.id }),
  },
})

export const PlayerInterests = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    player_id: column.number({ references: () => Player.columns.id }),
    interest_id: column.number({ references: () => Interest.columns.id }),
  },
})

export const DayName = defineTable({  
  columns: {
    id: column.number({ primaryKey: true }),
    day_of_week: column.text(),
  }
})

export const Interest = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    interest_name: column.text({ unique: true }),
    Description: column.text({ optional: true }),
  }
});

export default async function() {
  // Insert days of the week into the DayName table
  await db.insert(DayName).values([
    {day_of_week: 'Monday'},
    {day_of_week: 'Tuesday'},
    {day_of_week: 'Wednesday'},
    {day_of_week: 'Thursday'},
    {day_of_week: 'Friday'},
    {day_of_week: 'Saturday'},
    {day_of_week: 'Sunday'}
  ]);

  // Insert different interests into the Interest table
  await db.insert(Interest).values([
    {interest_name: 'Model Workshop'}, // Corrected typo from 'Model Workshhop' to 'Model Workshop'
    {interest_name: 'Weekend Game Night'},
    {interest_name: 'Nerd Nook'},
    {interest_name: 'Day Camps'},
    {interest_name: 'Weekend Game Retreats'}
  ]);
}

```

## AI Instructions are Ready

Please create a form based on Player data that loads the data from DayName and Interest tables, and saves the 2 related tables PlayerDays and PlayerInterests as well as the new Player.
