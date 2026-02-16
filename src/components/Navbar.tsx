import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";


export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Vision", href: "#vision" },
        { name: "Structure", href: "#structure" },
        { name: "Divisions", href: "#divisions" },
        { name: "Programs", href: "#programs" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "glass-card border-b border-gray-200"
                : "bg-transparent border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-md shadow-primary/30">
                            A
                        </div>
                        <span className="font-bold text-xl tracking-tight text-primary-dark dark:text-primary-light">
                            ASMAT
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light px-3 py-2 text-sm font-medium transition-colors"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button
                            variant="default"
                            className="rounded-full bg-primary hover:bg-primary-dark text-white shadow-md shadow-primary/20"
                            asChild
                        >
                            <a href="#contact">Contact</a>
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden flex items-center">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <span className="material-icons">menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <div className="flex flex-col gap-4 mt-8">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className="text-lg font-medium hover:text-primary transition-colors"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                    <Button
                                        variant="default"
                                        className="rounded-full bg-primary hover:bg-primary/90 w-full"
                                        asChild
                                    >
                                        <a href="#contact">Contact</a>
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}
