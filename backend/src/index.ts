import { Elysia } from "elysia";
import { db } from "./database"

const app = new Elysia()

console.log(
  `🦊 Elysia is running`
);

app.get('/data', async () => {
  const rows = await db.execute('SELECT * FROM USERS');
  return rows;
})

app.get('/sections', async () => {
  const rows = await db.execute('SELECT * FROM SECTIONS');
  return rows;
})

app.get('/sections/:slug', async ({ params }) => {
  const { slug } = params;
  const section = await db.execute('SELECT * FROM SECTIONS WHERE slug_field = ?', [slug]);

  return section[0];
  }
)

app.get('/users', async () => {
  const rows = await db.execute('SELECT * FROM USERS');
  return rows;
})

app.listen(8888);