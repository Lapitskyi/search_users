import { useUsersStore } from "../users";

export const useUsers = () => useUsersStore((state) => state.users);

export const useLoading = () => useUsersStore((state) => state.loading);

export const useFetchUsers = () => useUsersStore((state) => state.fetchUsers);
