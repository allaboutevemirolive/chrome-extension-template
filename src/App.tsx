import './App.css'

function App() {

    return (
        <>
            <div className="bg-background-primary text-text-primary p-base rounded-base shadow-base">
                <h1 className="text-xl font-bold">Dracula Theme</h1>
                <p className="text-text-secondary">This is a paragraph using the Dracula theme.</p>
                <button className="bg-accent-primary hover:bg-accent-hover active:bg-accent-active text-white px-4 py-2 rounded-sm transition-colors duration-fast">
                    Click Me
                </button>
            </div>

            <div className="dark:bg-background-secondary dark:text-text-primary p-base rounded-base shadow-base mt-4">
                <h1 className="dark:text-xl dark:font-bold">Dracula Theme (Dark Mode)</h1>
                <p className="dark:text-text-secondary">This is a paragraph using the Dracula theme in dark mode.</p>
                <button className="dark:bg-accent-primary dark:hover:bg-accent-hover dark:active:bg-accent-active dark:text-white px-4 py-2 rounded-sm transition-colors duration-fast">
                    Click Me
                </button>
            </div>

        </>
    )
}

export default App
