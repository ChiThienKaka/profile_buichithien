import MobileHeader from "./MobileHeader"
import UserAction from "./UserAction"
import { COLORS } from "@/constants"
export default function Header () {
     return (
        <header className="flex items-center justify-between shadow p-2">
            <h1 className="text-sm md:text-base lg:text-lg font-semibold">
                <span style={{color:COLORS.bgColor}}>buichi</span>
                <span className="text-red-500">thien</span>
            </h1>
            <nav className="hidden md:block">
                <ul className="flex items-center justify-between space-x-3
                    text-sm md:text-base
                ">
                    <li className="cursor-pointer hover:underline">Nhà phát triển</li>
                    <li style={{color:COLORS.bgColor}} className="cursor-pointer hover:underline">Dự án</li>
                    <UserAction />
                </ul>
            </nav>
            {/* Mobile Header  */}
            <MobileHeader />
        </header>
     )
}