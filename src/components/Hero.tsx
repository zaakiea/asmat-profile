export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden" id="hero">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50 to-red-100 dark:from-background-dark dark:via-background-dark dark:to-red-950/30"></div>
            <div className="absolute inset-0 math-pattern pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] filter translate-x-1/2 -translate-y-1/2 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[80px] filter -translate-x-1/3 translate-y-1/4 opacity-70"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <div className="flex justify-center items-center gap-8 mb-8 animate-fade-in-up">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white shadow-xl flex items-center justify-center p-1 relative overflow-hidden group border-4 border-primary/20">
                        <img
                            alt="Logo ASMAT"
                            className="w-full h-full object-contain rounded-full group-hover:scale-110 transition-transform duration-500"
                            src="/img/logo ASMAT.png"
                        />
                    </div>
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white shadow-xl flex items-center justify-center p-1 relative overflow-hidden group border-4 border-primary/20">
                        <img
                            alt="Logo AKSENTUASI"
                            className="w-full h-full object-contain rounded-full group-hover:scale-110 transition-transform duration-500"
                            src="/img/Logo ASMAT AKSEN.jpeg"
                        />
                    </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-accent-green mb-2 tracking-wide uppercase">Asosiasi Matematika Terapan</h2>
                <h1 className="text-6xl sm:text-8xl font-bold text-primary-dark dark:text-primary-light mb-6 tracking-tight drop-shadow-sm">AKSENTUASI</h1>

                <div className="inline-block relative">
                    <p className="text-xl sm:text-2xl text-slate-700 dark:text-slate-200 italic font-light relative z-10">
                        "Bersatu dalam Proses, Bertumbuh dalam Progress"
                    </p>
                    <div className="absolute -bottom-2 left-0 w-full h-3 bg-primary/10 -skew-x-12 -z-0"></div>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#about" className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                        Explore Profile <span className="material-icons text-sm">arrow_downward</span>
                    </a>
                </div>
            </div>
        </section>
    );
}