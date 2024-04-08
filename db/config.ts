import { column, defineDb, defineTable } from 'astro:db';

export const Player = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		name: column.text(),
		username: column.text(),
		child_name: column.text({ optional: true }),
		pronouns: column.text(),
        available_days: column.text({
            optional: true
        }),
        expanded_interests: column.text({
            optional: true
        }),
        questions: column.text({
            optional: true
        })
	},
});

export const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  }
});

export const Comment = defineTable({
  columns: {
    authorId: column.number({ references: () => Author.columns.id }),
    // A whole integer value.
    likes: column.number(),
    // A true or false value.
    flagged: column.boolean(),
    // Date/time values queried as JavaScript Date objects.
    published: column.date(),
    // An untyped JSON object.
    metadata: column.json(),
  }
});

// https://astro.build/db/config
export default defineDb({
	tables: {
		Player,
        Comment, 
        Author
	},
});
