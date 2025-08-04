import { CardProfile } from "@/components/components-ui";
export default function MobileContent() {
    return (
        <div className="flex justify-center p-4">
            <div className="relative w-full h-64 sm:hidden">
                 <CardProfile />
            </div>
        </div>
    );
}   