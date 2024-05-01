import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div class="mt-5">
            <center>
                <h1 class="text-danger fw-bold">404 - Page not found</h1>
                {/* <img src="https://vocasia.id/blog/wp-content/uploads/2022/01/error-404-not-found.png" alt=""/> */}
                <Link to={"/"}><button class="button">Back to Home</button></Link>
            </center>
        </div>
    )
}

export default NotFound;