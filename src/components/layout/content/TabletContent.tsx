import { CardProfile } from "@/components/components-ui";
export default function TabletContent(){
    return (
        <div className="hidden sm:block md:hidden">
            <div className="flex justify-center">
                <div className="relative w-64 h-64 -mt-25">
                    <CardProfile />
                </div>
            </div>
        </div>
    );
}