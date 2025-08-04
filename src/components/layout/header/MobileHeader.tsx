import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { COLORS } from "@/constants";
import { Menu, FolderCode, Folder } from "lucide-react";
import { IMAGE_CONSTANTS } from "@/constants/image";
export default function MobileHeader(){
    return (
        <Sheet>
            {/* Nút trigger mở menu - hiện ở mobile */}
            <SheetTrigger className="block md:hidden p-2">
                <div className="flex items-center space-x-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src={IMAGE_CONSTANTS.img_admin} />
                        <AvatarFallback>BC</AvatarFallback>
                    </Avatar>
                    <div style={{backgroundColor:COLORS.bgColor}} className="rounded-full p-1"><Menu className="w-4 h-4 text-white" /></div>
                </div>
            </SheetTrigger>

            {/* Nội dung menu */}
            <SheetContent side="right" className="bg-white w-3/4">
                <SheetHeader>
                    <SheetTitle>
                        <div className="flex items-center space-x-2 text-sm">
                            <Avatar className="w-8 h-8">
                                <AvatarImage src={IMAGE_CONSTANTS.img_admin} />
                                <AvatarFallback>BC</AvatarFallback>
                            </Avatar>
                            <div>
                                <div>Bùi Chí Thiện</div>
                                <div className="font-light">thien190602@gmail.com</div>
                            </div>
                        </div>
                        <hr className=" mt-2 border-t border-gray-300 opacity-50" />
                    </SheetTitle>
                    <SheetDescription>
                    </SheetDescription>
                    <div className="flex flex-col gap-1 mt-4 text-sm">
                        <button className="flex items-center p-2"><FolderCode className="w-4 h-4 mr-2" />Nhà phát triển</button>
                        <button className="flex items-center p-2"><Folder className="w-4 h-4 mr-2" />Dự án</button>
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}