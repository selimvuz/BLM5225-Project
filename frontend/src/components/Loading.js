import './Loading.css'; // Import the CSS file with styles
import { useState, useEffect } from 'react';

const Loader = ({ setIsLoading }) => {
    const [showLoader, setShowLoader] = useState(true); // Local state to control visibility of the loader

    useEffect(() => {
        const hideTimeoutId = setTimeout(() => {
            setShowLoader(false); // Hide the loader
            setIsLoading(false); // Notify App.js that loading is complete
        }, 2000);

        return () => {
            clearTimeout(hideTimeoutId);
        };
    }, [setIsLoading]);

    return showLoader ? (
        <div className="loader">
            <span className="loader_dot" style={{ '--d': `200ms` }}></span>
            <span className="loader_dot" style={{ '--d': `400ms` }}></span>
            <span className="loader_dot" style={{ '--d': `600ms` }}></span>
            <span className="loader_dot" style={{ '--d': `800ms` }}></span>
            <span className="loader_dot" style={{ '--d': `1000ms` }}></span>
        </div>
    ) : null;
};

export default Loader;
