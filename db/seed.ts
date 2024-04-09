import { db, DayName, Interest } from 'astro:db';

/**
 * This function asynchronously inserts predefined data into a database.
 * It first inserts days of the week into a `DayName` table,
 * and then inserts various interests into an `Interest` table.
 */
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