// src/pages/api/submitForm.ts
import type { RequestHandler } from 'astro';
import fs from 'fs';
import path from 'path';

export const post: RequestHandler = async ({ request }) => {
  try {
    const data = await request.json();
    // Here you would use Astro Collections to save the data.
    // Since Astro Collections are typically for static data, you might append this to a JSON file or similar.
    // This is an example of how you might handle this:
    const filePath = path.join(process.cwd(), 'data', 'signups.json');
    const signups = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    signups.push(data);
    fs.writeFileSync(filePath, JSON.stringify(signups, null, 2));

    return new Response(JSON.stringify({ message: 'Form submitted successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'An error occurred' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};