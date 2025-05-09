import {api} from "@/service/apiService";
import {Endpoints} from "@/service/endpoints";
import {IUser} from "@/utils/types/user";

export const getUser = async () => {
    try {
        return await api.get<IUser[]>(Endpoints.users);
    } catch (error) {
        console.error("Failed to fetch user:", error);
        return null;
    }
}