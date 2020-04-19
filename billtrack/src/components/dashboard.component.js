import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const Dashboard = () => {
    const [history, setHistory] = useState([]);

    const userInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">username</li>
                    <li className="list-group-item">email</li>
                </ul>
            </div>
        );
    }
};





export default Dashboard;
