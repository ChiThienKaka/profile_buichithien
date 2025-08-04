import { CardProfile } from "@/components/components-ui";
import TabContent from "./TabContent";
export default function MobileContent() {
    return (
        <div className="flex flex-col justify-center p-4 sm:hidden">
            <div className="relative w-full h-64">
                 <CardProfile />
            </div>
            <div className="my-10"><TabContent /></div>
        </div>
    );
}   