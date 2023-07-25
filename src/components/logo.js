import React from 'react';

const Logo = () => {
    return (
        <div className="Logo">
            {/* les images importées depuis la balise img sont accessibles dans public */}
            <img src="./favicon.ico" alt="Logo react" />
            <h3>react world</h3>
        </div>
    );
};

export default Logo;