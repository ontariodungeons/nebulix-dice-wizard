# Base Prompt

This is a training prompt. By manually confirming the accuracy of the responses the AI will perform much better. The final step should be to convert this to a file that can automate the process in a single file.


## Prequisite Review

The project is already configured and running, review astro.config.mjs, tailwindcss.config.js, tsconfig.json, postcss.config.js, package.json. Summarize the technical aspects of the project. We do not need the code for the configurations, unless they are new

## Astro Form Structure

Ceate a webform using [astrojs] please review what is required from the [website](https://docs.astro.build/en/recipes/build-forms/)

```astro
---
// Server-side logic (e.g., form submission handling) would go here.
---
<h1>Login</h1>
<form method="POST" action="/api/login">
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

1. Write a sample login form following the Astro syntax. The form should include fields for username and password, and a submit button.
2. Ensure that the form uses the POST method and includes an action attribute pointing to the server-side API route that will handle the login logic.
3. Include a frontmatter section at the top of your .astro file if you need to add any server-side logic or data fetching.

## Convert to Astro

When converting React .tsx components to Astro .astro format, follow these guidelines:

1. Use `className` or `class` attributes for assigning CSS classes within JSX expressions in .astro files.
2. Import React components using standard JavaScript imports in the frontmatter script section if they're needed.
3. Include any JavaScript logic from the original .tsx file in the frontmatter script section of the .astro file.
4. Remove the React function component wrapper and use the HTML-like template directly for the .astro component.
5. For any client-side interactivity, include a `<script>` tag with the appropriate `type="module"` attribute, or use Astro's component hydration directives.

For example:

```tsx
// React .tsx file
export default function MyComponent() {
  return (
    <div className="my-class">Content</div>
  );
}
```

```astro
---
// Frontmatter script section (for JavaScript logic if needed)
---
<div class="my-class">Content</div>
```

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

### Confirm astro:db is understood

Write a form that posts this data:

```ts
export const Interest = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    interest_name: column.text(),
    Description: column.text({ optional: true }),
  }
});
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

### Confirm Error Handling

Write a form handles errors:

```ts
export const Interest = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    interest_name: column.text(),
    Description: column.text({ optional: true }),
  }
});

## AI Instructions are Ready

### Data

```ts
export const Player = defineTable({
    columns: {id: column.number({ primaryKey: true }),
    email: column.text({ unique: true }),real_name: column.text(),player_name: column.text(),
    player_age: column.number(),child_name: column.text({ optional: true }),pronouns: column.text(),
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
```

Please create a form based on Player data and the 2 related tables PlayerDays and PlayerInterests
