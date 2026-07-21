import { Composer } from "grammy";
import type { Ctx } from "../bot.js";
import { inlineButton, inlineKeyboard, registerMainMenuItem } from "../toolkit/index.js";

// /search — starts the search flow. This bot is button-driven (owners are
// non-technical); register a menu button so users reach search by TAPPING.
registerMainMenuItem({ label: "🔍 Search", data: "search:enter", order: 20 });

const SEARCH_INTRO = "🔍 Enter a keyword to search for channels or bots.";
const backToMenu = inlineKeyboard([[inlineButton("⬅️ Back to menu", "menu:main")]]);
const cancelKb = inlineKeyboard([[inlineButton("Cancel", "search:cancel")]]);

const composer = new Composer<Ctx>();

composer.command("search", async (ctx) => {
  await ctx.reply(SEARCH_INTRO, { reply_markup: cancelKb });
});

composer.callbackQuery("search:enter", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.editMessageText(SEARCH_INTRO, { reply_markup: cancelKb });
});

composer.callbackQuery("search:cancel", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.editMessageText("Search cancelled.", {
    reply_markup: backToMenu,
  });
});

export default composer;
