import { create } from "zustand";

export enum LocalStorageSessionKeys {
    userSessionToken = "token",
}

interface State {
    token: String;
}

interface Actions {
    setToken: (token: string) => void;
    clearToken: () => void;
}

export const useSessionStore = create<State & Actions>((set) => ({
    token: "",
    setToken: (token: string) => {
        set({ token });
        localStorage.setItem(LocalStorageSessionKeys.userSessionToken, token);
    },
    clearToken: () => {
        set({ token: "" });
        localStorage.removeItem(LocalStorageSessionKeys.userSessionToken)
    }
}));