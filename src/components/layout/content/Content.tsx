import { CardProfile } from "@/components/components-ui";
import TabContent from "./TabContent";

export default function Content() {
    return (
        //nếu lớn hơn sm thì mới hiển thị
        <div className="hidden md:flex mx-20 gap-x-8">
            {/* Bên trái: 1/3 */}
            <div className="basis-1/4 p-4 relative h-96">
                <CardProfile />
            </div>

            {/* Bên phải: 2/3 */}
            <div className="basis-3/4 bg-white p-4">
                {/* Nội dung phải */}
                <TabContent />
            </div>
        </div>
    )
}