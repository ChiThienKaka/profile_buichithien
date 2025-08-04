import { Button } from "@/components/ui/button"
import { Content, Footer, Header } from "../components/layout"
import { Share } from "lucide-react"
import MobileContent from "@/components/layout/content/MobileContent"
import TabletContent from "@/components/layout/content/TabletContent"
// import { CardProfile } from "@/components/components-ui"
export default function MainLayout() {
    return <>
            <div>
                {/* Header  */}
                <Header />
                {/* Image Background  */}
                <div className="relative w-full h-64 bg-cover bg-center hidden sm:block"
                    style={{ backgroundImage: "url('https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/hoang-hon.jpg')" }}
                >
                    <Button className="absolute cursor-pointer hover:bg-black/80 bottom-4 right-4 bg-black/60 text-white rounded-full"
                        variant="secondary" size="sm">
                        <Share />
                        chia sẻ hồ sơ
                    </Button>
                </div>
                <Content />
            
                {/* Mobile Content  */}
                <MobileContent />
                {/* Tablet Content  */}
                <TabletContent />
                {/* Footer  */}
                <Footer />
            </div>
        </>
}
