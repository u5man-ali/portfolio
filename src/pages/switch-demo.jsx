import Switch from "../components/switch";
import {useState, useEffect } from "react"

export default function SwitchDemo() {
    const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
        if (saved === 'light' || saved === 'dark') return saved;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
    }, [theme]);
    const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  return (
    
    <div className="p-4 space-y-4">
      <Switch
        id="notif"
        name="notifications"
        label={theme === 'dark'? 'Switch to Light Mode': 'Switch to Dark Mode'}
        checked={true}
        //onChange={(value) => console.log("Switch is now:", value ? "" : "")}
        onChange={(toggleTheme)}
        
      />
        <Switch
        id="notif"
        name="notifications"
        label="Disabled Switch"
        disabled
        checked={false}
        onChange={(value) => console.log("Switch is now:", value ? "On" : "Off")}
      />
      <Switch
        id="mode"
        name="Mode"
        label="Select Mode"
        checked={false}
      />
    </div>
  );
}