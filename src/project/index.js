import Signin from "../users/signin";
import Account from "../users/account";
import UserTable from "../users/table";
import Signup from "../users/signup"

import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./nav";
function Project() {
    return (
        <div className="row">
            <div className="col-2">
                <Nav />
            </div>
            <div className="col-10">
                <Routes>
                    <Route path="/" element={<Navigate to="/project/home" />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/account/:id" element={<Account />} />
                    <Route path="/admin/users" element={<UserTable />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </div>
    );
}
export default Project;