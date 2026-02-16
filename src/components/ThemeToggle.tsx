import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const isDark = document.documentElement.classList.contains("dark");
        setTheme(isDark ? "dark" : "light");
    }, []);

    const toggleTheme = () => {
        const isDark = theme === "dark";
        const newTheme = isDark ? "light" : "dark";

        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full w-9 h-9 bg-primary/10 hover:bg-primary/20 text-primary dark:text-primary-light transition-colors"
            aria-label="Toggle theme"
        >
            <span className="material-icons text-xl">
                {theme === "dark" ? "dark_mode" : "light_mode"}
            </span>
        </Button>
    );
}
