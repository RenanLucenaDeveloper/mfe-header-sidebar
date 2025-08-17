declare module "host/authStore" {
  import { StoreApi, UseBoundStore } from "zustand";

  interface AuthState {
    user: {
        name: string;
        isAuthenticated: boolean;
    };
    logout: () => void;
  };

  export const useAuthStore: UseBoundStore<StoreApi<AuthState>>;
}

declare module "host/sidebarStore" {
  import { StoreApi, UseBoundStore } from "zustand";

  interface SidebarState {
    isActive: boolean;
    setActive: (status: boolean) => void;
  };

  export const useSidebarStore: UseBoundStore<StoreApi<SidebarState>>;
}