import { column, defineDb, defineTable } from 'astro:db';

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

export const Comment = defineTable({
  columns: {
    playerId: column.number({ references: () => Player.columns.id }),
    // A whole integer value.
    comment: column.text({ optional: true }),
    likes: column.number(),
    // A true or false value.
    flagged: column.boolean(),
    // Date/time values queried as JavaScript Date objects.
    published: column.date(),
    // An untyped JSON object.
    metadata: column.json(),
  }
});

export const UserProfileTable = defineTable({
  columns: {
    sub: column.text({ primaryKey: true }),
    given_name: column.text(),
    family_name: column.text(),
    nickname: column.text(),
    name: column.text(),
    picture: column.text(),
    locale: column.text(),
    updated_at: column.text(), // Assuming 'updated_at' is stored as text. Adjust the type if it's stored differently, e.g., as a date.
  },
});

// https://astro.build/db/config
export default defineDb({
	tables: {
		Player,
        Comment, 
        DayName,
        Interest,
        PlayerDays,
        PlayerInterests,
        UserProfileTable,
	},
});
