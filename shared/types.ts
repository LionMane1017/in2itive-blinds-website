/**
 * Unified type exports
 * Import shared types from this single entry point.
 */

export type * from "../drizzle/schema";
export * from "./_core/errors";


// AI Assistant types
export interface TranscriptEntry {
  speaker: 'user' | 'assistant';
  text: string;
  isFinal: boolean;
}
