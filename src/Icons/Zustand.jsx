import React from 'react';

export default function Icon({ size = 70 }) {
    return (
        <div
            style={{ height: size, color: '#eb0da7', fontSize: size / 3 }}
            className="d-flex flex-column justify-content-center"
        >
            Zustand
        </div>
    );
}
