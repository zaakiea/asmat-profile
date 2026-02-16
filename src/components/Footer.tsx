
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-4 border-t-primary" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">A</div>
                            <span className="font-bold text-xl tracking-tight text-white">ASMAT</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-6">
                            Asosiasi Mahasiswa Matematika Terapan Universitas Diponegoro. Membangun sinergi untuk matematika yang lebih membumi.
                        </p>
                    </div>
                    <div className="col-span-1">
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#about" className="hover:text-primary-light transition">About Us</a></li>
                            <li><a href="#structure" className="hover:text-primary-light transition">Leadership</a></li>
                            <li><a href="#programs" className="hover:text-primary-light transition">Programs</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h4 className="text-lg font-bold mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center gap-2"><span className="material-icons text-xs text-primary">email</span> asmat@undip.ac.id</li>
                            <li className="flex items-center gap-2"><span className="material-icons text-xs text-primary">location_on</span> Gedung F, FSM Undip</li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h4 className="text-lg font-bold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition text-white">
                                <span className="text-sm font-bold">IG</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition text-white">
                                <span className="text-sm font-bold">LN</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition text-white">
                                <span className="text-sm font-bold">YT</span>
                            </a>
                        </div>
                        <div className="mt-6">
                            <a href="#" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary text-white px-4 py-2 rounded-lg text-sm font-medium w-full transition shadow-lg shadow-primary/20">
                                <span className="material-icons text-sm">chat</span> WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© 2026 ASMAT AKSENTUASI. All rights reserved.</p>
                    <p>Designed with <span className="text-primary">♥</span> for Math Students</p>
                </div>
            </div>
        </footer>
    );
}
