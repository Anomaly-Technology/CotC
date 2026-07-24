import { Router, type IRouter, type Request, type Response } from "express";
import { db, siteContentTable } from "@workspace/db";
import {
  AdminLoginBody,
  AdminSessionResponse,
  UpdateContentBody,
  GetContentResponse,
  UpdateContentResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

const COOKIE_NAME = "cotc_admin";

function isAuthed(req: Request): boolean {
  return req.signedCookies?.[COOKIE_NAME] === "1";
}

router.get("/content", async (_req, res): Promise<void> => {
  const rows = await db.select().from(siteContentTable);
  const map: Record<string, string> = {};
  for (const row of rows) map[row.key] = row.value;
  res.json(GetContentResponse.parse(map));
});

router.put("/content", async (req, res): Promise<void> => {
  if (!isAuthed(req)) {
    res.status(401).json({ error: "Not authenticated" });
    return;
  }
  const parsed = UpdateContentBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const entries = Object.entries(parsed.data.entries);
  for (const [key, value] of entries) {
    await db
      .insert(siteContentTable)
      .values({ key, value })
      .onConflictDoUpdate({
        target: siteContentTable.key,
        set: { value, updatedAt: new Date() },
      });
  }
  const rows = await db.select().from(siteContentTable);
  const map: Record<string, string> = {};
  for (const row of rows) map[row.key] = row.value;
  res.json(UpdateContentResponse.parse(map));
});

router.post("/admin/login", async (req, res): Promise<void> => {
  const parsed = AdminLoginBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    req.log.warn("ADMIN_PASSWORD is not configured");
    res.status(401).json({ error: "Admin login is not configured yet" });
    return;
  }
  if (parsed.data.password !== expected) {
    res.status(401).json({ error: "Wrong password" });
    return;
  }
  res.cookie(COOKIE_NAME, "1", {
    httpOnly: true,
    signed: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 1000 * 60 * 60 * 24 * 7,
    path: "/",
  });
  res.json(AdminSessionResponse.parse({ authenticated: true }));
});

router.post("/admin/logout", async (_req, res): Promise<void> => {
  res.clearCookie(COOKIE_NAME, { path: "/" });
  res.json({ error: "" });
});

router.get("/admin/session", async (req, res): Promise<void> => {
  res.json(AdminSessionResponse.parse({ authenticated: isAuthed(req) }));
});

export default router;
