
import { Button } from "@/components/ui/button";

export default function Footer() {
    return (
        <footer id="contact" className="bg-slate-900 border-t border-slate-800 text-white pt-16 pb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <span className="material-icons text-9xl text-white">psychology</span>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold shadow-lg shadow-primary/30">
                                A
                            </div>
                            <span className="font-bold text-xl tracking-tight text-white">ASMAT</span>
                        </div>
                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                            Asosiasi Mahasiswa Matematika Terapan Universitas Diponegoro. Membangun sinergi untuk matematika yang lebih membumi.
                        </p>
                    </div>
                    <div className="col-span-1">
                        <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#about" className="hover:text-primary transition-colors duration-300 flex items-center gap-1 group"><span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span> About Us</a></li>
                            <li><a href="#structure" className="hover:text-primary transition-colors duration-300 flex items-center gap-1 group"><span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span> Leadership</a></li>
                            <li><a href="#programs" className="hover:text-primary transition-colors duration-300 flex items-center gap-1 group"><span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span> Programs</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h4 className="text-lg font-bold mb-4 text-white">Contact</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                                    <span className="material-icons text-xs">email</span>
                                </div>
                                asmat@undip.ac.id
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                                    <span className="material-icons text-xs">location_on</span>
                                </div>
                                Gedung F, FSM Undip
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h4 className="text-lg font-bold mb-4 text-white">Connect</h4>
                        <div className="flex gap-4 mb-6">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-primary hover:to-primary-dark hover:scale-110 transition-all duration-300 text-white shadow-lg hover:shadow-primary/30">
                                <span className="text-sm font-bold">IG</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-primary hover:to-primary-dark hover:scale-110 transition-all duration-300 text-white shadow-lg hover:shadow-primary/30">
                                <span className="text-sm font-bold">LN</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-primary hover:to-primary-dark hover:scale-110 transition-all duration-300 text-white shadow-lg hover:shadow-primary/30">
                                <span className="text-sm font-bold">YT</span>
                            </a>
                        </div>
                        <div>
                            <Button className="w-full gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white rounded-lg shadow-lg shadow-emerald-900/20 border-0" asChild>
                                <a href="#">
                                    <span className="material-icons text-sm">chat</span> WhatsApp Us
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p>© 2026 ASMAT AKSENTUASI. All rights reserved.</p>
                    <p>Designed with <span className="text-red-500 animate-pulse">♥</span> for Math Students</p>
                </div>
            </div>
        </footer>
    );
}
