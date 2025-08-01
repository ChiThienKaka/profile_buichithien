import { MessageCircle, UserRoundPlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
export default function CardProfile() {
    return (
        <div className="flex flex-col w-full h-full gap-y-5 p-4 shadow">
            <div className="flex flex-1 justify-center items-center">
                <Avatar className="w-25 h-25">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>BC</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex flex-1 flex-row justify-center">
                <div className="leading-relaxed text-center">
                    <h1 className="font-semibold">Bùi Chí Thiện</h1> 
                    <span>Cựu sinh viên - Viện kỹ thuật công nghệ</span> <br />
                    <span> Đại học Thủ Dầu Một</span> <br />
                    <span className="text-[#b8b8b8]">Tân Đông Hiệp, TP.HCM</span>
                </div>
            </div>
            <div className="flex flex-1 justify-center items-center space-x-2">
                    <Button className="rounded-full w-8 h-8 bg-[#f89c7f]"  variant="secondary" size="sm">
                        <UserRoundPlus className="text-white" />
                    </Button>
                    <Button className="bg-[#47c0c0] text-white rounded-4xl" variant="secondary" size="sm">
                        <MessageCircle /> Nhắn tin
                    </Button>
            </div>
        </div>
    )
}