import { useMemo } from "react";
import {IUser} from "@/utils/types/user";

type User = IUser;

function useFilteredUsers(users: User[], query: string) {
    const normalizedQuery = query.toLowerCase();

    const serializeUser = (user: User): string => {
        const result: string[] = [];

        const traverse = (obj: any) => {
            if (!obj) return;
            if (typeof obj === "string" || typeof obj === "number") {
                result.push(String(obj).toLowerCase());
            } else if (Array.isArray(obj)) {
                obj.forEach(traverse);
            } else if (typeof obj === "object") {
                for (const key in obj) {
                    traverse(obj[key]);
                }
            }
        };

        traverse(user);
        console.log(result.join(" "))
        return result.join(" ");
    };

    const filteredUsers = useMemo(() => {
        if (!query.trim()) return users;
        return users.filter(user =>
            serializeUser(user).includes(normalizedQuery)
        );
    }, [query, users]);

    return filteredUsers;
}

export default useFilteredUsers;
