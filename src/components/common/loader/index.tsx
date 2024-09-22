import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className="w-full h-full">
            <div className="w-full h-full animate-pulse bg-zinc-700 rounded-xl" />
        </div>
    );
};

export default Loader