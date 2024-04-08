import { db, Player } from 'astro:db';

export default async function() {
  await db.insert(Player).values([
  {
    name: 'player1',
    username: 'player1',
    child_name: 'player1',
    pronouns: 'they/them',
    available_days: '0,1,2,3,4,5,6',
    expanded_interests: 'model workshhop',
    questions: 'hello'}
  ])
}