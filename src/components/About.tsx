
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
    return (
        <section id="about" className="py-20 bg-white relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-card rounded-2xl p-8 sm:p-12 shadow-2xl border-t-4 border-t-primary">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/3 flex justify-center">
                            <div className="w-40 h-40 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-inner relative overflow-hidden ring-4 ring-primary/10">
                                <span className="text-7xl text-white opacity-20 absolute -bottom-4 -right-4 font-serif">
                                    A
                                </span>
                                <span className="material-icons text-6xl text-white">psychology</span>
                            </div>
                        </div>
                        <div className="md:w-2/3 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                Filosofi <span className="text-primary">Aksentuasi</span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                                Dalam bahasa, <strong>Aksentuasi</strong> bermakna penekanan yang memberikan
                                kekuatan pada sebuah kata. Bagi kami, ini adalah metafora untuk dampak.
                            </p>
                            <p className="text-slate-600 dark:text-slate-300">
                                Kabinet ASMAT 2026 hadir untuk memberikan penekanan pada setiap langkah
                                kecil, mengubah rutinitas menjadi ritme perubahan yang bermakna. Kami
                                percaya bahwa keunggulan bukanlah tindakan sesaat, tetapi sebuah
                                kebiasaan yang dibangun melalui aksentuasi pada detail dan proses.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
