
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function Programs() {
    return (
        <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                Work <span className="text-primary">Programs</span>
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="group bg-background-dim dark:bg-background-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
                    <AccordionTrigger className="px-4 py-4 hover:bg-primary/5 hover:no-underline transition-colors [&[data-state=open]>div>span]:text-primary">
                        <div className="flex items-center gap-3">
                            <span className="material-icons text-primary">school</span>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">Klinik Matematika</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-0 text-slate-600 dark:text-slate-400 border-t border-gray-200 dark:border-gray-800 ml-9">
                        Program bimbingan belajar gratis untuk mahasiswa tingkat pertama guna membantu pemahaman mata kuliah dasar kalkulus dan aljabar.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="group bg-background-dim dark:bg-background-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
                    <AccordionTrigger className="px-4 py-4 hover:bg-primary/5 hover:no-underline transition-colors [&[data-state=open]>div>span]:text-primary">
                        <div className="flex items-center gap-3">
                            <span className="material-icons text-primary">trending_up</span>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">Math Upgrading</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-0 text-slate-600 dark:text-slate-400 border-t border-gray-200 dark:border-gray-800 ml-9">
                        Pelatihan internal untuk meningkatkan softskill pengurus dalam manajemen organisasi dan kepemimpinan.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="group bg-background-dim dark:bg-background-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
                    <AccordionTrigger className="px-4 py-4 hover:bg-primary/5 hover:no-underline transition-colors [&[data-state=open]>div>span]:text-primary">
                        <div className="flex items-center gap-3">
                            <span className="material-icons text-primary">emoji_events</span>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">National Math Olympiad</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-0 text-slate-600 dark:text-slate-400 border-t border-gray-200 dark:border-gray-800 ml-9">
                        Kompetisi matematika tingkat nasional untuk siswa SMA/sederajat sebagai ajang promosi departemen.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
