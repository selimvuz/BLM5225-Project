import './Loading.css'; // Import the CSS file with styles
import { useState, useEffect } from 'react';

const Loader = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        // Set a timeout to hide the loader after 10 seconds
        const hideTimeoutId = setTimeout(() => {
            setShowLoader(false);
        }, 2000);

        // Clean up the timeouts when the component unmounts or when loader is hidden
        return () => {
            clearTimeout(hideTimeoutId);
        };
    }, []); // Run this effect only once on mount

    return (
        <div>
            {showLoader && (
                <div className="loader">
                    <span
                        className="loader_dot"
                        style={{ '--d': `200ms` }}
                    ></span>
                    <span
                        className="loader_dot"
                        style={{ '--d': `400ms` }}
                    ></span>
                    <span
                        className="loader_dot"
                        style={{ '--d': `600ms` }}
                    ></span>
                    <span
                        className="loader_dot"
                        style={{ '--d': `800ms` }}
                    ></span>
                    <span
                        className="loader_dot"
                        style={{ '--d': `1000ms` }}
                    ></span>
                </div>
            )}
        </div>
    );
};

export default Loader;
