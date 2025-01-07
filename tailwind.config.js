export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1E40AF',
                secondary: '#9333EA',
                accent: '#F59E0B',
                neutral: {
                    light: '#F3F4F6',
                    DEFAULT: '#D1D5DB',
                    dark: '#4B5563',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
            spacing: {
                '1': '4px',
                '2': '8px',
                '3': '12px',
                '4': '16px',
                // Add more as needed
            },
        },
    },
    plugins: [],
};