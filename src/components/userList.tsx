'use client'
import {useEffect, useState} from "react";
import {useUsers, useLoading, useFetchUsers} from "@/store/selectors/usersSelectors";
import UserCard from "./userCard";
import useFilteredUsers from "@/utils/hook/useFilteredUsers";

const UserList = () => {
    const users = useUsers();
    const loading = useLoading();
    const fetchUsers = useFetchUsers();

    const [search, setSearch] = useState("");
    const filtered = useFilteredUsers(users, search);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    if (loading) return <p>Loading...</p>;
    if (!users.length) return <p>No users found</p>;

    return (
        <>
            <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex flex-col w-[300px] md:w-full max-w-[500px] p-2 border rounded my-4 mx-auto justify-center items-center"
            />
            <ul className="userList">
                {filtered.map((user) => (
                    <UserCard  key={user.id} user={user}/>
                ))}
            </ul>
        </>

    );
};

export default UserList;