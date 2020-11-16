import React from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';

export default function header() {
    return (
        <div className="app-header">
            <h1>BOT-O-MAT</h1>
            <div className="links">
                <Link to="/">HOME</Link> | <Link to="/execute">EXECUTE</Link> | <Link to="/leaderboard">LEADERBOARD</Link>
            </div>
        </div>
    )
}
