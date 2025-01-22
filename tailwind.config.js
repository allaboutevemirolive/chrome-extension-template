/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'background-primary': '#1e1e2e',
                'background-secondary': '#282a36',
                'background-hover': '#2a2a3c',
                'background-active': '#343746',

                'text-primary': '#e5e5e5',
                'text-secondary': '#c0c0dd',
                'text-disabled': '#626270',
                'text-tertiary': '#6B7280',

                'accent-primary': '#f38ba8',
                'accent-hover': '#f76e94',
                'accent-active': '#e05a7f',

                'border-primary': '#3b3b4d',
                'border-secondary': '#4a4a5e',

                error: '#ff5555',
                success: '#50fa7b',
                warning: '#f1fa8c',
            },
            fontFamily: {
                sans: ['Inter', 'Arial', 'sans-serif'],
            },
            fontSize: {
                sm: '12px',
                base: '16px',
                lg: '20px',
                xl: '24px',
            },
            lineHeight: {
                sm: '1.4',
                base: '1.6',
                lg: '1.8',
                xl: '2',
            },
            fontWeight: {
                normal: 400,
                medium: 500,
                semibold: 600,
                bold: 700,
            },
            spacing: {
                xxs: '4px',
                xs: '8px',
                sm: '12px',
                base: '16px',
                lg: '24px',
                xl: '32px',
                xxl: '48px',
            },
            borderRadius: {
                none: '0',
                sm: '6px',
                base: '12px',
                lg: '16px',
                full: '9999px',
            },
            boxShadow: {
                none: 'none',
                sm: '0 2px 4px rgba(0, 0, 0, 0.3)',
                base: '0 4px 20px rgba(0, 0, 0, 0.5)',
                lg: '0 8px 30px rgba(0, 0, 0, 0.6)',
                xl: '0 12px 40px rgba(0, 0, 0, 0.7)',
                'shadow-primary': 'rgba(0, 0, 0, 0.5)',
                'shadow-secondary': 'rgba(0, 0, 0, 0.7)',
            },
            transitionDuration: {
                fast: '150ms',
                normal: '300ms',
                slow: '500ms',
            },
            transitionTimingFunction: {
                DEFAULT: 'ease-in-out',
            },
        },
    },
    plugins: [],
}
