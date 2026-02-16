
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50 to-red-100 dark:from-background-dark dark:via-background-dark dark:to-red-950/30"></div>
            <div className="absolute inset-0 math-pattern pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] filter translate-x-1/2 -translate-y-1/2 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[80px] filter -translate-x-1/3 translate-y-1/4 opacity-70"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <div className="flex justify-center items-center gap-8 mb-8 animate-fade-in-up">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white shadow-xl flex items-center justify-center p-1 relative overflow-hidden group border-4 border-primary/20">
                        <img
                            alt="Geometric abstract logo pattern representing ASMAT"
                            className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiKDbyXLRtrlthVm5w4RNy2UdQLi3iM3bdB9YwdMIL9gbS1UE7JPAeKVawofMW0p1wsZNmaObs7_rg_akX6hS1JPhFpPv2QrqHkcXi-9EnbK8LMmcucN0-rIEPcLd-ThFT8bb7Pp_mEooKyeAD346tBVa81vcO4kLXClNC1yfvjhYQdsFev0LCM4AHf9L7yDxWWTTpa_9i1T0BFQ2-iFIb6itGG4Lhku1T7LM3ka_V9RqmJV1-J-hGmsXp2Z4_ELniyoeLjr9TyhAL"
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay rounded-full"></div>
                    </div>
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white shadow-xl flex items-center justify-center p-1 relative overflow-hidden group border-4 border-primary/20">
                        <img
                            alt="Mathematical lambda symbol conceptual image"
                            className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEnrAMaICT3gVPD1wajTNUbnsXoOQsoiAHrjxRAPg3ztK-mxqMZnPcHr83wu1x_urIHDklsbGa-2LHVlVV256EEHdqb_ZWPZMlixAOmgbboDDSdeYP6B5_x6m3pgaeXDQZB_2OXLNsO0HHevN7Au3iPxUTEhofKcsCwcLYxnZgqNcIdIOjKDLE8_Gf_eqxLMrOxC5Lmd-YiVPCJ0wK4iNQsWe_5eVc44msBWz3bu_CJS_eDJ_I0gcmVgEA_lymrGmfB9J3pVx9MgcB"
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay rounded-full"></div>
                    </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-accent-green mb-2 tracking-wide uppercase">
                    Asosiasi Matematika Terapan
                </h2>
                <h1 className="text-6xl sm:text-8xl font-bold text-primary-dark dark:text-primary-light mb-6 tracking-tight drop-shadow-sm">
                    AKSENTUASI
                </h1>
                <div className="inline-block relative">
                    <p className="text-xl sm:text-2xl text-slate-700 dark:text-slate-200 italic font-light relative z-10">
                        "Bersatu dalam Proses, Bertumbuh dalam Progress"
                    </p>
                    <div className="absolute -bottom-2 left-0 w-full h-3 bg-primary/10 -skew-x-12 -z-0"></div>
                </div>
                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="rounded-full gap-2 text-white font-semibold shadow-lg shadow-primary/40 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary hover:-translate-y-1 transition-all" asChild>
                        <a href="#about">
                            Explore Profile <span className="material-icons text-sm">arrow_downward</span>
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
