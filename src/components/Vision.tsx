

export default function Vision() {
    return (
        <section id="vision" className="py-20 bg-background-dim dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800">
                    <div className="lg:col-span-5 bg-gradient-to-br from-primary-dark to-primary p-10 text-white flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <span className="material-icons text-9xl">visibility</span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-2 opacity-90 text-red-100">
                            Visi Kami
                        </h3>
                        <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
                            "Mewujudkan ASMAT sebagai ruang bertumbuh yang progresif dan
                            berkelanjutan."
                        </h2>
                        <div className="h-1 w-20 bg-white/70 rounded-full"></div>
                    </div>
                    <div className="lg:col-span-7 bg-white dark:bg-surface-dark p-10 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-primary pl-4">
                            Misi Organisasi
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: "school",
                                    text: "Meningkatkan kualitas akademik dan iklim prestatif mahasiswa.",
                                    color: "bg-primary/10",
                                    textColor: "text-primary",
                                },
                                {
                                    icon: "diversity_3",
                                    text: "Mempererat kekeluargaan internal pengurus dan anggota.",
                                    color: "bg-accent-green/10",
                                    textColor: "text-accent-green",
                                },
                                {
                                    icon: "handshake",
                                    text: "Membangun kemitraan strategis dengan pihak eksternal.",
                                    color: "bg-primary/10",
                                    textColor: "text-primary",

                                },
                                {
                                    icon: "lightbulb",
                                    text: "Mewadahi kreativitas dan inovasi dalam berkarya.",
                                    color: "bg-accent-green/10",
                                    textColor: "text-accent-green",
                                },
                                {
                                    icon: "public",
                                    text: "Memberikan kontribusi nyata kepada masyarakat luas.",
                                    color: "bg-primary/10",
                                    textColor: "text-primary",
                                },
                                {
                                    icon: "verified",
                                    text: "Menjaga profesionalisme dan integritas organisasi.",
                                    color: "bg-accent-green/10",
                                    textColor: "text-accent-green",
                                },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4 group">
                                    <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0 ${item.textColor} group-hover:bg-primary group-hover:text-white transition-colors`}>
                                        <span className="material-icons">{item.icon}</span>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
