import MobileHeader from "./MobileHeader"
import UserAction from "./UserAction"
import { COLORS } from "@/constants"
import { SwitchDarkMode } from "@/components/components-ui"

export default function Header () {
     return (
        <header  className="flex items-center justify-between p-2 bg-[#e6f1f2] dark:bg-black">
            <h1 className="text-sm md:text-base lg:text-lg font-semibold">
                <span style={{color:COLORS.bgColor}}>buichi</span>
                <span className="text-red-500">thien</span>
            </h1>
            <nav className="hidden md:block">
                <ul className="flex items-center space-x-4 text-sm md:text-base">
                    <li className="cursor-pointer hover:underline">Nhà phát triển</li>
                    <li style={{color:COLORS.bgColor}} className="cursor-pointer hover:underline">Dự án</li>
                    
                    <li className="flex items-center">
                        <SwitchDarkMode />
                    </li>
                    <li className="flex items-center">
                        <UserAction />
                    </li>
                </ul>
            </nav>
            {/* Mobile Header  */}
            <MobileHeader />
        </header>
     )
}