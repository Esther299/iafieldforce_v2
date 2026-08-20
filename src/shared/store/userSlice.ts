import type { UserRole } from "@/shared/types";

export interface UserSlice {
  activeUserRole: UserRole;
  setActiveUserRole: (role: UserRole) => void;
}

export const createUserSlice = (set: any): UserSlice => ({
  activeUserRole: "sales-force-creator",
  setActiveUserRole: (role) => set({ activeUserRole: role }),
});
