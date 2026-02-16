import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function Structure() {
    return (
        <section className="py-20 relative bg-white dark:bg-surface-dark" id="structure">
            <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left z-0"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-accent-green font-semibold tracking-wider uppercase text-sm">Organogram</span>
                    <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mt-2">Struktur Organisasi</h2>
                    <div className="h-1 w-24 bg-primary mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="flex flex-col items-center">
                    {/* BPH Top */}
                    <div className="glass-card p-8 rounded-3xl max-w-4xl w-full border-t-4 border-t-primary shadow-xl mb-12 relative z-10">
                        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                            <div className="flex flex-col items-center text-center">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <div className="w-40 h-40 rounded-full border-4 border-white dark:border-gray-800 shadow-lg overflow-hidden mb-4 cursor-pointer hover:scale-105 transition-transform">
                                            <img alt="Alisha Rizki Ainiyah" className="w-full h-full object-cover" src="/img/Foto Formal.jpeg" />
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-md bg-transparent border-none p-0 shadow-none">
                                        <img alt="Alisha Rizki Ainiyah" className="w-full h-auto rounded-xl" src="/img/Foto Formal.jpeg" />
                                    </DialogContent>
                                </Dialog>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Alisha Rizki Ainiyah</h3>
                                <p className="text-primary font-bold uppercase tracking-wide text-xs">Ketua Umum</p>
                            </div>
                            <div className="hidden md:block h-32 w-px bg-primary/20"></div>
                            <div className="flex flex-col items-center text-center">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <div className="w-40 h-40 rounded-full border-4 border-white dark:border-gray-800 shadow-lg overflow-hidden mb-4 cursor-pointer hover:scale-105 transition-transform">
                                            <img alt="Mutiara Annastasya" className="w-full h-full object-cover" src="/img/foto aca.jpeg" />
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-md bg-transparent border-none p-0 shadow-none">
                                        <img alt="Mutiara Annastasya" className="w-full h-auto rounded-xl" src="/img/foto aca.jpeg" />
                                    </DialogContent>
                                </Dialog>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Mutiara Annastasya</h3>
                                <p className="text-primary font-bold uppercase tracking-wide text-xs">Wakil Ketua</p>
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                            <p className="text-xs font-bold text-primary uppercase text-center mb-3">Program Kerja Bersama</p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {["Upgrading", "Kumpul ASMAT", "Monitoring dan Evaluasi", "Asmat Awards", "Suara Bersama", "Farewell Party"].map((proker) => (
                                    <span key={proker} className="px-3 py-1 bg-primary/5 text-slate-600 dark:text-slate-300 text-xs rounded-full border border-primary/10">{proker}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="h-12 w-0.5 bg-primary/30 -mt-12 mb-8 relative z-0"></div>

                    {/* Sekretaris & Bendahara */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-16">
                        {/* Sekretaris */}
                        <div className="glass-card p-6 rounded-2xl border-l-4 border-l-primary hover:shadow-lg transition-all">
                            <div className="flex flex-col items-center mb-6">
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 border-b-2 border-primary/20 pb-1">Sekretaris</h4>
                                <div className="flex gap-4 justify-center">
                                    <div className="text-center">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <div className="w-20 h-20 rounded-full border-2 border-primary/20 overflow-hidden mb-2 mx-auto cursor-pointer hover:scale-105 transition-transform">
                                                    <img alt="Tri Maida Azzahra" className="w-full h-full object-cover" src="/img/foto maida.jpeg" />
                                                </div>
                                            </DialogTrigger>
                                            <DialogContent className="max-w-md bg-transparent border-none p-0 shadow-none">
                                                <img alt="Tri Maida Azzahra" className="w-full h-auto rounded-xl" src="/img/foto maida.jpeg" />
                                            </DialogContent>
                                        </Dialog>
                                        <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Tri Maida Azzahra</p>
                                        <p className="text-[10px] text-primary uppercase">Sekretaris Umum</p>
                                    </div>
                                    <div className="text-center opacity-60">
                                        <div className="w-20 h-20 rounded-full bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center mb-2 mx-auto">
                                            <span className="material-icons text-gray-400">person</span>
                                        </div>
                                        <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Staf Muda</p>
                                        <p className="text-[10px] text-primary uppercase">Staff</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                                <p className="text-[10px] font-bold text-slate-500 uppercase mb-2">Program Kerja</p>
                                <div className="flex flex-wrap gap-2">
                                    {["Database Pengurus", "Database surat", "Notulensi dan Presensi Rapat", "Inventaris Perlengkapan ASMAT", "Sertifikat Pengurus"].map((pk) => (
                                        <span key={pk} className="px-2 py-1 bg-white dark:bg-gray-700 text-[10px] rounded text-slate-600 dark:text-slate-300 shadow-sm border border-gray-100 dark:border-gray-600">{pk}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bendahara */}
                        <div className="glass-card p-6 rounded-2xl border-l-4 border-l-primary hover:shadow-lg transition-all">
                            <div className="flex flex-col items-center mb-6">
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 border-b-2 border-primary/20 pb-1">Bendahara</h4>
                                <div className="flex gap-4 justify-center">
                                    <div className="text-center">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <div className="w-20 h-20 rounded-full border-2 border-primary/20 overflow-hidden mb-2 mx-auto cursor-pointer hover:scale-105 transition-transform">
                                                    <img alt="Rizqa Aulia" className="w-full h-full object-cover" src="/img/foto rizqa.jpeg" />
                                                </div>
                                            </DialogTrigger>
                                            <DialogContent className="max-w-md bg-transparent border-none p-0 shadow-none">
                                                <img alt="Rizqa Aulia" className="w-full h-auto rounded-xl" src="/img/foto rizqa.jpeg" />
                                            </DialogContent>
                                        </Dialog>
                                        <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Rizqa Aulia</p>
                                        <p className="text-[10px] text-primary uppercase">Bendahara Umum</p>
                                    </div>
                                    <div className="text-center opacity-60">
                                        <div className="w-20 h-20 rounded-full bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center mb-2 mx-auto">
                                            <span className="material-icons text-gray-400">person</span>
                                        </div>
                                        <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Staf Muda</p>
                                        <p className="text-[10px] text-primary uppercase">Staff</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                                <p className="text-[10px] font-bold text-slate-500 uppercase mb-2">Program Kerja</p>
                                <div className="flex flex-wrap gap-2">
                                    {["Uang Kas", "Pembukuan Uang Kas", "Pengadaan PDH ASMAT", "Foto Kepengurusan ASMAT"].map((pk) => (
                                        <span key={pk} className="px-2 py-1 bg-white dark:bg-gray-700 text-[10px] rounded text-slate-600 dark:text-slate-300 shadow-sm border border-gray-100 dark:border-gray-600">{pk}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divisions */}
                    <div className="relative w-full">
                        <div className="hidden lg:block absolute top-[-2rem] left-[12.5%] right-[12.5%] h-8 border-x-2 border-t-2 border-primary/30 rounded-t-2xl z-0"></div>
                        <div className="hidden lg:block absolute top-[-2rem] left-[37.5%] h-8 w-0.5 bg-primary/30"></div>
                        <div className="hidden lg:block absolute top-[-2rem] right-[37.5%] h-8 w-0.5 bg-primary/30"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                            {/* Akademik */}
                            <DivisionCard
                                icon="menu_book"
                                name="Akademik"
                                description="Fokus pada pengembangan wawasan keilmuan dan bantuan akademik mahasiswa."
                                ketua={{ name: "Mayla Nazid Nafi'a", img: "/img/foto mayla.jpeg" }}
                                staff={[
                                    { name: "M. Ishmatur Roziq", img: "/img/foto roziq.jpg" },
                                    { name: "Faturohman Setia Budi", img: "/img/foto fatur.jpg" },
                                    { name: "Lusita Safitri", img: "/img/foto lusi.jpg" },
                                    { name: "Karolyn Alvani", img: "/img/foto karolyn.jpg" },
                                    { name: "Muhammad Daniez Julio Darmawan", img: "/img/foto daniez.jpg" },
                                    { name: "Staf Muda", isPlaceholder: true }
                                ]}
                                proker={["Asistensi Internal", "Asistensi Mata Kuliah", "Modul Soal"]}
                            />

                            {/* Media Kreatif */}
                            <DivisionCard
                                icon="palette"
                                name="Media Kreatif"
                                description="Mengelola branding visual, publikasi media sosial, dan dokumentasi kegiatan."
                                ketua={{ name: "Zulfa Friyaljihanisa", img: "/img/foto zulfa.png" }}
                                staff={[
                                    { name: "Dara Mulia Ayundita", img: "/img/foto dara.jpg" },
                                    { name: "Nawasyarifah", img: "/img/foto nawa.jpg" },
                                    { name: "Helen Mareta Nauli", initials: "HM" },
                                    { name: "Staf Muda", isPlaceholder: true, colSpan: 3 }
                                ]}
                                proker={["Buletin", "Majalah Dinding", "Media Sosial", "Studi Banding"]}
                            />

                            {/* Pengembangan */}
                            <DivisionCard
                                icon="trending_up"
                                name="Pengembangan"
                                description="Bertanggung jawab atas kaderisasi dan pengembangan sumber daya mahasiswa."
                                ketua={{ name: "Nazwa Syahrani", img: "/img/foto nazwa.jpeg" }}
                                staff={[
                                    { name: "Nasywa Dhiya Ananfitto", img: "/img/foto nasywa.png" },
                                    { name: "Amalia Mecca Zasaid", img: "/img/foto mecca.jpg" },
                                    { name: "Aliah Mabruroh", img: "/img/foto aliah.JPG" },
                                    { name: "Zhahra Bunga Tri Hapsari", img: "/img/foto zara.jpeg" },
                                    { name: "Staf Muda", isPlaceholder: true, colSpan: 2 }
                                ]}
                                proker={["Pelatihan Internal", "Klinik Matematika", "Seminar Skripsi", "Seminar PKL"]}
                            />

                            {/* Riset */}
                            <DivisionCard
                                icon="science"
                                name="Riset"
                                description="Mewadahi minat bakat dalam penelitian, PKM, dan karya tulis ilmiah."
                                ketua={{ name: "Saskia Aulia Azzahra", img: "/img/foto saskia.jpeg" }}
                                staff={[
                                    { name: "Khomsatul Yunita", img: "/img/foto nita.jpeg" },
                                    { name: "Anni Miftahu Rohmah", img: "/img/foto anni.jpg" },
                                    { name: "Habib Hayub Alfaraby", img: "/img/foto hayub.jpeg" },
                                    { name: "Staf Muda", isPlaceholder: true, colSpan: 3 }
                                ]}
                                proker={["Kelas Riset", "Pelatihan Kakak Pembimbing", "Pelatihan PKM"]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function DivisionCard({ icon, name, description, ketua, staff, proker }: any) {
    return (
        <div className="glass-card flex flex-col h-full rounded-2xl overflow-hidden border-t-4 border-t-primary shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="bg-primary/5 p-6 pb-4 text-center border-b border-gray-100 dark:border-gray-800">
                <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <span className="material-icons">{icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{description}</p>
            </div>
            <div className="p-4 flex-grow flex flex-col gap-4">
                <div className="flex items-center gap-3 bg-white dark:bg-gray-800/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary flex-shrink-0 cursor-pointer hover:scale-105 transition-transform">
                                <img alt={ketua.name} className="w-full h-full object-cover" src={ketua.img} />
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-md bg-transparent border-none p-0 shadow-none">
                            <img alt={ketua.name} className="w-full h-auto rounded-xl" src={ketua.img} />
                        </DialogContent>
                    </Dialog>
                    <div>
                        <p className="text-[10px] text-primary font-bold uppercase tracking-wider">Ketua Bidang</p>
                        <p className="font-bold text-sm text-slate-800 dark:text-slate-200">{ketua.name}</p>
                    </div>
                </div>
                <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-3 text-center tracking-wider">Staf Ahli</p>
                    <div className="grid grid-cols-3 gap-y-4 gap-x-2 justify-items-center">
                        {staff.map((s: any, idx: number) => (
                            <div key={idx} className={`text-center group/staff ${s.colSpan ? `col-span-${s.colSpan}` : ''}`}>
                                {s.isPlaceholder ? (
                                    <div className="w-10 h-10 rounded-full bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center mb-1 mx-auto">
                                        <span className="material-icons text-gray-300 text-sm">person</span>
                                    </div>
                                ) : s.initials ? (
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-1 mx-auto ring-2 ring-transparent group-hover/staff:ring-primary/30 transition-all text-primary font-bold text-xs cursor-pointer hover:bg-primary/20">
                                        {s.initials}
                                    </div>
                                ) : (
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mb-1 mx-auto ring-2 ring-transparent group-hover/staff:ring-primary/30 transition-all cursor-pointer hover:scale-110">
                                                <img alt={s.name} className="w-full h-full object-cover" src={s.img} />
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-md bg-transparent border-none p-0 shadow-none">
                                            <img alt={s.name} className="w-full h-auto rounded-xl" src={s.img} />
                                        </DialogContent>
                                    </Dialog>
                                )}
                                <p className={`text-[10px] font-medium ${s.isPlaceholder ? 'text-slate-500 italic' : 'text-slate-600 dark:text-slate-400'}`}>{s.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-auto p-4 pt-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30">
                <p className="text-[10px] font-bold text-primary uppercase mb-2">Program Kerja</p>
                <div className="flex flex-wrap gap-2">
                    {proker.map((pk: string) => (
                        <span key={pk} className="px-2 py-1 bg-white dark:bg-gray-700 text-[10px] rounded text-slate-600 dark:text-slate-300 shadow-sm border border-gray-200 dark:border-gray-600">{pk}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}