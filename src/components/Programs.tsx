
export default function Programs() {
    return (
        <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Work <span className="text-primary">Programs</span></h2>
            <div className="space-y-4">
                <details className="group bg-background-dim dark:bg-background-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800" open>
                    <summary className="flex justify-between items-center p-4 cursor-pointer list-none font-semibold text-slate-800 dark:text-slate-200 hover:bg-primary/5 transition-colors">
                        <div className="flex items-center gap-3">
                            <span className="material-icons text-primary">school</span>
                            <span>Klinik Matematika</span>
                        </div>
                        <span className="transition group-open:rotate-180 text-primary">
                            <span className="material-icons">expand_more</span>
                        </span>
                    </summary>
                    <div className="p-4 pt-0 text-slate-600 dark:text-slate-400 border-t border-gray-200 dark:border-gray-800 ml-9">
                        Program bimbingan belajar gratis untuk mahasiswa tingkat pertama guna membantu pemahaman mata kuliah dasar kalkulus dan aljabar.
                    </div>
                </details>
                <details className="group bg-background-dim dark:bg-background-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
                    <summary className="flex justify-between items-center p-4 cursor-pointer list-none font-semibold text-slate-800 dark:text-slate-200 hover:bg-primary/5 transition-colors">
                        <div className="flex items-center gap-3">
                            <span className="material-icons text-primary">trending_up</span>
                            <span>Math Upgrading</span>
                        </div>
                        <span className="transition group-open:rotate-180 text-primary">
                            <span className="material-icons">expand_more</span>
                        </span>
                    </summary>
                    <div className="p-4 pt-0 text-slate-600 dark:text-slate-400 border-t border-gray-200 dark:border-gray-800 ml-9">
                        Pelatihan internal untuk meningkatkan softskill pengurus dalam manajemen organisasi dan kepemimpinan.
                    </div>
                </details>
                <details className="group bg-background-dim dark:bg-background-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
                    <summary className="flex justify-between items-center p-4 cursor-pointer list-none font-semibold text-slate-800 dark:text-slate-200 hover:bg-primary/5 transition-colors">
                        <div className="flex items-center gap-3">
                            <span className="material-icons text-primary">emoji_events</span>
                            <span>National Math Olympiad</span>
                        </div>
                        <span className="transition group-open:rotate-180 text-primary">
                            <span className="material-icons">expand_more</span>
                        </span>
                    </summary>
                    <div className="p-4 pt-0 text-slate-600 dark:text-slate-400 border-t border-gray-200 dark:border-gray-800 ml-9">
                        Kompetisi matematika tingkat nasional untuk siswa SMA/sederajat sebagai ajang promosi departemen.
                    </div>
                </details>
            </div>
        </div>
    );
}
