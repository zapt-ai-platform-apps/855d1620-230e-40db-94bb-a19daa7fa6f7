import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className="p-2 rounded cursor-pointer bg-primary text-neutral-light hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent transition">
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
    );
};

export default ThemeToggle;