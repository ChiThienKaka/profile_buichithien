import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Overview from "./Overview";
export default function TabContent() {
    const tabTriggers = `
        relative px-1 py-2 text-sm font-normal text-gray-600 
                !bg-transparent !border-none !shadow-none !outline-none 
                focus:!outline-none focus:!ring-0 ring-0
                sm:text-xs md:test-sm lg:text-base
                 data-[state=active]:text-[#00BCD4]
                 data-[state=active]:after:content-[''] 
                 data-[state=active]:after:absolute 
                 data-[state=active]:after:bottom-0 
                 data-[state=active]:after:left-0 
                 data-[state=active]:after:w-full 
                 data-[state=active]:after:h-[2px] 
                 data-[state=active]:after:bg-[#00BCD4]
    `
    return(
        <Tabs defaultValue="overview" className="w-full">
            <TabsList className="lg:space-x-10">
                <TabsTrigger className={tabTriggers} value="overview">Tổng quan</TabsTrigger>
                <TabsTrigger className={tabTriggers} value="education">Học vấn</TabsTrigger>
                <TabsTrigger className={tabTriggers} value="experiences">Kinh nghiệm</TabsTrigger>
                <TabsTrigger className={tabTriggers} value="reviews">Đánh giá</TabsTrigger>
            </TabsList>
            <hr className="w-full border-t border-gray-200" />
            <TabsContent value="overview"><Overview /></TabsContent>
            <TabsContent value="education"><Overview /></TabsContent>
            <TabsContent value="experiences"><Overview /></TabsContent>
            <TabsContent value="reviews"><Overview /></TabsContent>
        </Tabs>
    )
}