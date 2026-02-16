
export default function Structure() {
    return (
        <section id="structure" className="py-20 relative bg-white dark:bg-surface-dark overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left z-0"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-accent-green font-semibold tracking-wider uppercase text-sm">
                        Leadership
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
                        Badan Pengurus Harian
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16">
                    <div className="text-center group">
                        <div className="relative w-48 h-48 mx-auto mb-6">
                            <div className="absolute inset-0 rounded-full border-4 border-primary border-dashed animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute inset-2 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-800">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMX6a5APEveolfwvIolpSRV-z_oKlu-1EnDxlg6hdVvAXxnOmYSG35dekAGSjsYCsKURbDV59C6x4flBsOLnmkoEJTWVPMEsFpMDcuU82wNLF6XQlErlWZ5mOmsdtWwcP6wnVplAunF7_DoTmX4ay8af_1kErOvGZMklVIOHENfXg6OC8w0KP73ARGD3QHI040B6gGxYVHwuQ87P0T8cNGcqUPrnDuwJ5gt3rUEQAFx333UyYWwfn1jhVm_xchwibCGvHrFoXWB2OR"
                                    alt="Alisha Rizki Ainiyah"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            Alisha Rizki Ainiyah
                        </h3>
                        <p className="text-primary font-bold">Ketua Umum</p>
                    </div>

                    <div className="text-center group">
                        <div className="relative w-48 h-48 mx-auto mb-6">
                            <div className="absolute inset-0 rounded-full border-4 border-accent-green border-dashed animate-[spin_12s_linear_infinite_reverse]"></div>
                            <div className="absolute inset-2 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-800">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAam3KOz0WB9drYfXaDsdor_FYLt3sTvTw9xbdhGeK8r95PTw6cZ9CWyckpa1aXUAGLTVMxN-pxJknsUBm_tf-XJc9no1nmb3-DwiDNFgnCD6mk2IflORd1OycICv-Alqf3763I1QB2XPs2T4C17a3f82iDgDyU4qnkS09n8OhoaYj3LzMVg4r91_DadErDwwyGfJDbL57RiQfpfbmARPUBP9pjxwOSpQ8fAv69XLPd6nGrlnl5gJ6XvJI-euSIjJEpRkn8MbrJnfgP"
                                    alt="Mutiara Annastasya"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            Mutiara Annastasya
                        </h3>
                        <p className="text-accent-green font-bold">Wakil Ketua</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
                    <div className="glass-card p-6 rounded-xl flex items-center gap-4 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/30">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjY60HdjOvAWtxkRFmomooUk5X1FFV8gJrku2l8P6VgHgc2y9_SU_f6haGtZai9oKR-xZcUJkBR8eSLdLIfy5aTy6HiP-azRrNgXZwqko74uL9uLzIdzqYhreK1ccJLA9X4YdtuPf9mg7GJQZVs6-Ca-tdlev_e47t0w-PgiOCXVl4f_FeK9_KTMnF-h-9q7KjiFvb0p66Nppqowbx46MzJeNK5-08cv0PfSnIVEQStwzwpzOVN7ZbUnsjB60jLgGftPYDkuSSWpfF"
                                className="w-full h-full object-cover"
                                alt="Tri Maida"
                            />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">Tri Maida</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Sekretaris Umum</p>
                        </div>
                    </div>

                    <div className="glass-card p-6 rounded-xl flex items-center gap-4 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/30">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0KJg-rVSTBY8FZ1zMt-y4J8a955lWhF8LnzhTR1AplOY6NmuPwTUggLUUhIIQzPIcXrRKQqhqsqayLDUiurO9xlTKwPVFbKMSrbxE15LJfgboq80WxvAR26WWwqCm6DkhnHKW9cL-85OU3hbiCno9LmgbiTXaFt2jkdstumVI230NBX9R_M4BUjygtvZKLkvrnQL-8wL3almG3wbd-kB0nW3maTXgBO0tiVw-iV2XaVV4SH5P1g1Oop284SkSWkAhHcfWdcbe-apF"
                                className="w-full h-full object-cover"
                                alt="Rizqa Aulia"
                            />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">Rizqa Aulia</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Bendahara Umum</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
