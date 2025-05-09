import {create} from "zustand/index";
import {immer} from "zustand/middleware/immer";
import {IUser} from "@/utils/types/user";
import {getUser} from "@/service/api/users";

type State = {
    loading: boolean;
    users: IUser[] | [];
};
type Actions = {
    fetchUsers: () => void;
};

export const useUsersStore = create<State & Actions>()(
    immer((set) => ({
        loading: false,
        users: [],
        fetchUsers: async () => {
            set((state) => {
                state.loading = true
            })
            try {
                const res = await getUser();
                set((state) => {
                    state.users = res || [];
                });
            } finally  {
                set((state) => {
                    state.loading = false;
                });
            }
        },
    }))
);
