import { CardProfile } from "@/components/components-ui";
import TabContent from "./TabContent";
export default function TabletContent(){
    return (
        <div className="hidden sm:block md:hidden">
            <div className="flex justify-center mb-4">
                <div className="relative w-64 h-64 -mt-20">
                    <CardProfile />
                </div>
            </div>
            <div className="mb-10 mx-6"><TabContent /></div>
        </div>
    );
}