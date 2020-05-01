import React from "react";
import "../index.css";


const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children,
    date
}) => (
    <div>
        <div className="jumbotron">

            <h2>Welcome, today is {date}</h2>
            <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>


    </div>
);

export default Layout;
