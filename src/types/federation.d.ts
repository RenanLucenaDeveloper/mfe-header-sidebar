declare module "host/authStore" {
  export type UseBoundStore<T> = (selector?: (state: T) => any) => any;

  interface AuthState {
    user: {
        name: string;
        isAuthenticated: boolean;
    };
    logout: () => void;
  };

  export const useAuthStore: UseBoundStore<AuthState>;
}

declare module "host/sidebarStore" {
  export type UseBoundStore<T> = (selector?: (state: T) => any) => any;

  interface SidebarState {
    isActive: boolean;
    setActive: (status: boolean) => void;
  };

  export const useSidebarStore: UseBoundStore<SidebarState>;
}