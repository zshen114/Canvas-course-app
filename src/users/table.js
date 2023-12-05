import React, { useState, useEffect } from "react";
import { BsTrash3Fill, BsFillCheckCircleFill, BsPencil, BsPlusCircleFill }
    from "react-icons/bs";
import {Link} from 'react-router-dom';
import * as client from "./client";
function UserTable() {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    useEffect(() => { fetchUsers(); }, []);

    const [user, setUser] = useState({ username: "", password: "", role: "USER" });
    const createUser = async () => {
        try {
            const newUser = await client.createUser(user);
            setUsers([newUser, ...users]);
        } catch (err) {
            console.log(err);
        }
    };

    const selectUser = async (user) => {
        try {
            const u = await client.findUserById(user._id);
            setUser(u);
        } catch (err) {
            console.log(err);
        }
    };
    const updateUser = async () => {
        try {
            const status = await client.updateUser(user);
            setUsers(users.map((u) => (u._id === user._id ? user : u)));
        } catch (err) {
            console.log(err);
        }
    };

    const deleteUser = async (user) => {
        try {
            await client.deleteUser(user);
            setUsers(users.filter((u) => u._id !== user._id));
        } catch (err) {
            console.log(err);
        }
    };



    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input
                                className="form-control"
                                placeholder="username"
                                value={user.username} 
                                onChange={(e) => setUser({ ...user, username: e.target.value })}/>
                        </td>
                        <td>
                            <input
                                className="form-control"
                                type="password"
                                placeholder="password"
                                value={user.password} 
                                onChange={(e) => setUser({ ...user, password: e.target.value })}/>
                        </td>
                        <td>
                            <input
                                className="form-control"
                                placeholder="first name"
                                value={user.firstName} 
                                onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
                        </td>
                        <td>
                            <input
                                className="form-control"
                                placeholder="last name"
                                value={user.lastName} 
                                onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
                        </td>
                        <td>
                            <select
                                className="form-control"
                                value={user.role} 
                                onChange={(e) => setUser({ ...user, role: e.target.value })}>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                            </select>
                        </td>
                        <td>
                            <BsFillCheckCircleFill onClick={updateUser} className="me-2 text-success fs-1" />
                            <BsPlusCircleFill onClick={createUser} className="text-primary fs-1"/>
                        </td>
                    </tr>
                </tbody>
                <br></br>
            <tbody>
        {users.map((user) => (
        <tr key={user._id}>
            <td>
                <Link to={`/project/account/${user._id}`} className="d-block w-100">
                    {user.username}
                </Link>
            </td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td className="text-nowrap">
                <button className="btn btn-warning me-2" onClick={() => selectUser(user)}>
                    <BsPencil />
                </button>
                <button className="btn btn-danger me-2" onClick={() => deleteUser(user)}>
                    <BsTrash3Fill />
                </button>
            </td>
        </tr>
    ))}
</tbody>

            </table>
        </div>
    );
}
export default UserTable;