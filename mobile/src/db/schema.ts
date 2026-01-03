import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const games = sqliteTable('games', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  score: integer('score').notNull(),
  drawnCardsCount: integer('drawn_cards_count').notNull(),
  activeDecks: text('active_decks').notNull(),
  timestamp: text('timestamp').default(sql`(CURRENT_TIMESTAMP)`),
});

export type GameRecord = typeof games.$inferSelect;
