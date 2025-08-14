import { FileText, School } from "lucide-react";
import { Button } from "../ui/button";

export default function CardInfo(){
    return (
        <div className="w-full h-full p-5">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap justify-between items-center">
                        <h1 className="font-semibold">Đại học Thủ Dầu Một</h1>
                        <span className="text-xs text-gray-400 dark:text-white">2020-2025</span>
                    </div>  
                    <div className="text-sm leading-6">
                        <span>Chuyên ngành: Công nghệ thông tin</span> <br/>
                        <span>GPA: 7.72/10</span> <br/>
                        <span>Đã tốt nghiệp</span>
                    </div>
                    <div className="flex gap-2">
                        <Button
                        className="rounded-full w-8 h-8 md:w-10 md:h-10 bg-[#f89c7f] hover:bg-[#f89c7f]/30 text-white p-2 shadow-sm transition-colors duration-200"
                        variant="secondary"
                        >
                        <School className="w-5 h-5" />
                        </Button>
                        <Button 
                        className="rounded-full w-8 h-8 md:w-10 md:h-10 bg-[#28a0a0] hover:bg-[#28a0a0]/30 text-white p-2 shadow-sm transition-colors duration-200"
                        variant="secondary">
                             <FileText />
                        </Button>
                    </div>
                </div>
        </div>
    );
}