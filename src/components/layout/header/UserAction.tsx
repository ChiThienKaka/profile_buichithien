import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";

export default function UserAction(){
    return <>
        <div
            className="flex items-center gap-2 p-1 border rounded-full border-[#d9e2e2] 
                       text-sm md:text-base
                       px-2 md:px-3 lg:px-4
                       cursor-pointer"
        >
            <Avatar className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>BC</AvatarFallback>
            </Avatar>

            <span className="hidden sm:inline">Roger</span>

            <ChevronDown className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 text-gray-500" />
        </div>
    </>
}