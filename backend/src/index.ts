import { Elysia } from "elysia";
import { db } from "./database"

// app.listen needs to be standalone like below, otherwise the query won't work!
const app = new Elysia()

app.get('/', async () => {
  console.log('Hello!')
})

app.get('/sections', async () => {
  try {
    const rows = await db.execute('SELECT * FROM sections');
    return {
      data: rows
    }} catch (error) {
      console.error('Database error:', error);
      return {
        success: false,
        error: 'Failed to fetch SECTIONS table'
      };
    }
  }
)

app.get('/sections/:slug', async ({ params }) => {
  const { slug } = params;
  const section = await db.execute('SELECT * FROM sections WHERE slug_field = ?', [slug]);

  return section[0];
  }
)

app.listen(8888, () => {
  console.log(`🦊 Elysia is running on ${app.server?.hostname}:${app.server?.port}`)
});