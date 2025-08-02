import { Hono } from "hono";

const userinfo = new Hono();

userinfo.get("/", async (c) => {
  const user = c.req.query("user");
  if (!user) return c.json({ error: "Missing user param" }, 400);

  const apiUrl = `https://pythbots.com/api/userinfo.php?user=${encodeURIComponent(user)}`;
  const resp = await fetch(apiUrl);
  const data = await resp.json();
  return c.json(data);
});

export default userinfo;
