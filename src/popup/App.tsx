import './App.css'
import { useState } from 'react';
import { Bell, BellOff, Settings, BarChart2, Users, Clock } from 'lucide-react';

const App = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [count, setCount] = useState(0);

    const toggleNotifications = () => {
        setIsEnabled(!isEnabled);
        setCount(0);
    };

    const incrementCount = () => {
        setCount(prev => prev + 1);
    };

    return (
        <div className="w-full h-full bg-gray-50 dark:bg-gray-900">
            <header className="w-full p-4 bg-white dark:bg-gray-800 shadow-md">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold dark:text-white">Notification Dashboard</h1>
                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <Settings className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                    </button>
                </div>
            </header>

            <main className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <div className="flex items-center space-x-2 mb-2">
                            <BarChart2 className="w-5 h-5 text-blue-500" />
                            <span className="font-medium dark:text-white">Daily Stats</span>
                        </div>
                        <p className="text-2xl font-bold dark:text-white">{count}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Total Notifications</p>
                    </div>

                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <div className="flex items-center space-x-2 mb-2">
                            <Users className="w-5 h-5 text-green-500" />
                            <span className="font-medium dark:text-white">Active Users</span>
                        </div>
                        <p className="text-2xl font-bold dark:text-white">24</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Online Now</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <div className="p-4 border-b dark:border-gray-700">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                {isEnabled ? (
                                    <Bell className="w-5 h-5 text-blue-500" />
                                ) : (
                                    <BellOff className="w-5 h-5 text-gray-500" />
                                )}
                                <span className="font-medium dark:text-white">
                                    Notification Settings
                                </span>
                            </div>
                            <button
                                onClick={toggleNotifications}
                                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors"
                            >
                                {isEnabled ? 'Disable' : 'Enable'}
                            </button>
                        </div>
                    </div>

                    {isEnabled && (
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Clock className="w-5 h-5 text-gray-500" />
                                    <span className="text-sm dark:text-white">Test Notifications</span>
                                </div>
                                <button
                                    onClick={incrementCount}
                                    className="px-4 py-2 text-sm font-medium text-white bg-green-500 hover:bg-green-600 rounded-md transition-colors"
                                >
                                    Send Test
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default App;
