import { MessageCircle, UserRoundPlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { IMAGE_CONSTANTS } from "@/constants/image";
export default function CardProfile() {
    return (
        //darkmode
        <div className="flex flex-col w-full h-full gap-y-5 p-4 shadow-lg
            rounded-lg bg-white
            dark:bg-black dark:border-2 dark:border-white
            border-1 border-gray-300
            absolute md:bottom-20
            text-xs sm:text-sm md:text-base">
            <div className="flex flex-1 justify-center items-center">
                <Avatar className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28">
                    <AvatarImage src={IMAGE_CONSTANTS.img_admin} />
                    <AvatarFallback>BC</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex flex-1 flex-row justify-center">
                <div className="leading-relaxed text-center sm:text-xs md:test-sm lg:text-base">
                    <h1 className="font-semibold">Bùi Chí Thiện</h1> 
                    <span>Khoa CNTT - Viện kỹ thuật công nghệ</span> <br />
                    <span> Đại học Thủ Dầu Một</span> <br />
                    <span className="text-[#b8b8b8]">Tân Đông Hiệp, TP.HCM</span>
                </div>
            </div>
            <div className="flex flex-1 justify-center items-center space-x-2">
                    <Button className="rounded-full sm:w-6 sm:h-6 md:w-8 md:h-8 bg-[#f89c7f] cursor-pointer hover:bg-[#c9826d]"  variant="secondary" size="sm">
                        <UserRoundPlus className="text-white" />
                    </Button>
                    <Button className="bg-[#28a0a0] sm:w-auto sm:h-6 md:w-auto md:h-8 text-white rounded-4xl
                    cursor-pointer hover:bg-[#4d8c8c]" variant="secondary">
                        <MessageCircle /> <span className="text-xs md:test-sm lg:text-base">Nhắn tin</span>
                    </Button>
            </div>
        </div>
    )
}