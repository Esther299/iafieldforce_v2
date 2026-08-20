import type { AvatarConfig } from "../../types";
import { avatars as initialAvatars } from "../../data";

export interface AvatarsSlice {
  avatars: AvatarConfig[];
  upsertAvatar: (avatar: AvatarConfig) => void;
}

export const createAvatarsSlice = (set: any): AvatarsSlice => ({
  avatars: initialAvatars,
  upsertAvatar: (avatar) => {
    set((state: any) => {
      const exists = state.avatars.some(
        (a: AvatarConfig) => a.id === avatar.id,
      );
      return {
        avatars: exists
          ? state.avatars.map((a: AvatarConfig) =>
              a.id === avatar.id ? avatar : a,
            )
          : [...state.avatars, avatar],
      };
    });
  },
});
