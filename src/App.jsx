import React from 'react';
import ThemeToggle from './components/ThemeToggle';

export default function App(){
    return (
        <div className="min-h-screen bg-neutral-light dark:bg-neutral-dark text-neutral-dark dark:text-neutral-light">
            <header className="p-4 flex justify-end">
                <ThemeToggle />
            </header>
            <main className="p-4">
                <h1 className="text-2xl font-bold mb-4">Welcome to the App</h1>
                <p className="mb-4">
                    This is a sample application demonstrating a comprehensive theming system.
                </p>
                <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline cursor-pointer">
                    Made on ZAPT
                </a>
            </main>
            <footer className="p-4 flex justify-center">
                <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary hover:underline cursor-pointer">
                    Made on ZAPT
                </a>
            </footer>
        </div>
    )
}