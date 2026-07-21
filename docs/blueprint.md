# Channel & Bot Search Bot — Bot specification

**Archetype:** custom

**Voice:** professional and concise — write every user-facing message, button label, error, and empty state in this voice.

A Telegram bot that helps users discover public channels and bots by searching with keywords. Users enter a search term and receive a list of relevant results with direct links.

> This is the complete contract for the bot. Implement EVERY entry point, flow, feature, integration, and edge case below. The completeness review checks the bot against this document after each build pass.

## Primary audience

- Telegram users looking for relevant channels
- Users seeking bots for specific tasks

## Success criteria

- Users can search for channels and bots by keyword
- Search results display with direct links
- Search works reliably for common terms

## Entry points

Every feature must be reachable from the bot's command/button surface (button-first; only /start and /help are slash commands).

- **Search** (command, actor: user, command: /search) — Start the search flow
- **Search again** (button, actor: user, callback: search:again) — Initiate a new search
  - inputs: search term
  - outputs: search results

## Flows

### Search flow
_Trigger:_ /search

1. User enters /search
2. User types search term
3. Bot displays search results

### Result click
_Trigger:_ Click on result link

1. User clicks result link

## Integrations

- **Telegram** (required) — Bot API messaging
Call external APIs against their real contract (correct endpoints, ids, params); credentials from env. Do not fake responses.

## Owner controls

- Update search algorithm
- Add/remove result sources

## Permissions & privacy

- No personal data stored
- Search terms not logged
- No user accounts required

## Edge cases

- No results found for search term
- Search term too short
- Search term too long
- Invalid characters in search term

## Required tests

- Search with common keyword returns results
- Search with no results shows appropriate message
- Result links open correctly
- Search handles edge cases gracefully

## Assumptions

- Search scope: Public Telegram channels and bots only
- Result display: Text list with direct links
- No user accounts required
- Search is case-insensitive
- Search supports basic keyword matching
