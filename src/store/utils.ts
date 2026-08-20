import type { ConversationMessage, MessageRole } from "../types";

export function uid(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

export function msg(
  role: MessageRole,
  content: string,
  extra?: Partial<ConversationMessage>,
): ConversationMessage {
  return {
    id: uid("m"),
    role,
    content,
    timestamp: new Date().toISOString(),
    ...extra,
  };
}
