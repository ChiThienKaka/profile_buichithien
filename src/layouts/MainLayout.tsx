import { Button } from "@/components/ui/button"
import { Header } from "../components/layout"
import { Share } from "lucide-react"
// import { CardProfile } from "@/components/components-ui"
export default function MainLayout() {
    return <>
            <div>
                {/* Header  */}
                <Header />
                {/* Image Background  */}
                <div className="relative w-full h-64 bg-cover bg-center hidden md:block"
                    style={{ backgroundImage: "url('https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/hoang-hon.jpg')" }}
                >
                    <Button className="absolute cursor-pointer hover:bg-black/80 bottom-4 right-4 bg-black/60 text-white rounded-full"
                        variant="secondary" size="sm">
                        <Share />
                        chia sẻ hồ sơ
                    </Button>
                </div>
            </div>
        </>
}
