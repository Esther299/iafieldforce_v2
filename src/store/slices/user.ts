import type { UserRole } from "../../types";

export interface UserSlice {
  activeUserRole: UserRole;
  setActiveUserRole: (role: UserRole) => void;
}

export const createUserSlice = (set: any): UserSlice => ({
  activeUserRole: "sales-force-creator",
  setActiveUserRole: (role) => set({ activeUserRole: role }),
});
