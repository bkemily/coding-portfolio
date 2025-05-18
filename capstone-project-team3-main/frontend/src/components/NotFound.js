import React from "react";
import '../css/NotFound.css'; // Correct the CSS file path

function NotFound() {
    return (
        <div className="container mt-5 not-found">
					<h1>404 - Page Not Found</h1>
            <img className="fish-image"
                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWZpd2w1dTN6M2l6NHBkazBscXYweXFxZHJjd2lmcWhmOHduejRqeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/g8JYeR9YzWNycXx1Od/giphy.gif"
                alt="404 Not Found"
            />
        </div>
    );
}

export default NotFound;
