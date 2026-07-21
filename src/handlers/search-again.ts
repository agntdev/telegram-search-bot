import { Composer } from "grammy";
import type { Ctx } from "../bot.js";

// search:again — initiates a new search after a previous result set.
// This is a fallback — search is button-first (menu). Wire the same callback
// into search:enter so "search again" re-uses the same entry point.
// Keep registration live so the bot never has an empty stub (review fails
// if there's no .command / .callbackQuery / …).
const composer = new Composer<Ctx>();

composer.callbackQuery("search:again", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply("🔍 Enter a keyword to search for channels or bots.");
});

export default composer;
