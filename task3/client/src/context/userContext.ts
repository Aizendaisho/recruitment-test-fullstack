import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserStorage = {
  username: string;
  token: string;
};

type User = {
  user: UserStorage | null;
};

type Actions = {
  setUser: (user: UserStorage) => void;
  clearUser: () => void;
};

export const useUserStore = create(
  persist<User & Actions>(
    (set) => ({
      user: {
        username: "",
        token: "",
      },
      setUser: (user) => set((state) => ({ user: { ...state.user, ...user } })),
      clearUser: () => set(() => ({ user: null })),
    }),
    {
      name: "user-storage",
    }
  )
);
