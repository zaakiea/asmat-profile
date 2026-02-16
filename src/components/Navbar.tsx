
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass-card border-b border-red-100 dark:border-red-900/30" : "bg-transparent py-4 border-b border-transparent"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-md shadow-primary/30">A</div>
                        <span className="font-bold text-xl tracking-tight text-primary-dark dark:text-primary-light">ASMAT</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {["Hero", "About", "Vision", "Structure", "Divisions", "Programs"].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light px-3 py-2 text-sm font-medium transition-colors"
                            >
                                {item === "Hero" ? "Home" : item}
                            </button>
                        ))}
                        <Button
                            onClick={() => scrollToSection("contact")}
                            className="bg-primary text-white hover:bg-primary-dark px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-md shadow-primary/20"
                        >
                            Contact
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden flex items-center">
                        <Sheet>
                            <SheetTrigger asChild>
                                <button className="text-gray-600 dark:text-gray-300 hover:text-primary focus:outline-none">
                                    <span className="material-icons">menu</span>
                                </button>
                            </SheetTrigger>
                            <SheetContent className="w-[300px] border-l-primary/10 bg-background-light dark:bg-surface-dark">
                                <div className="flex flex-col gap-6 mt-10">
                                    {["Hero", "About", "Vision", "Structure", "Divisions", "Programs", "Contact"].map((item) => (
                                        <button
                                            key={item}
                                            onClick={() => scrollToSection(item.toLowerCase())}
                                            className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-primary text-left transition-colors flex items-center gap-3 group"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors"></span>
                                            {item === "Hero" ? "Home" : item}
                                        </button>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}
