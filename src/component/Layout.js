import React from "react";
import NavbarComponent from "./Navbar/Navbar";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
    return (
        <div>
            <React.Fragment>
                <Navbar/>
                <div class="columns">
                    <div class="column is-2">
                        <Sidebar />
                    </div>
                    <div class="column has-background-light">
                        <main className="mt-5">{children}</main>
                    </div>
                </div>
            </React.Fragment>
        </div>
    )
}

export default Layout;