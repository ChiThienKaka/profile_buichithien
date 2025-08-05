import { Button } from "@/components/ui/button"
import { Content, Footer, Header } from "../components/layout"
import { Share } from "lucide-react"
import MobileContent from "@/components/layout/content/MobileContent"
import TabletContent from "@/components/layout/content/TabletContent"
import { IMAGE_CONSTANTS } from "@/constants"
import MobileFooter from "@/components/layout/footer/MobileFooter"
// import { CardProfile } from "@/components/components-ui"

export default function MainLayout() {
    
    return <>
            <div className="dark:bg-black dark:text-white">
                {/* Header  */}
                <Header />
                
                
                {/* Image Background  */}
                <div className="relative  w-full h-64 bg-cover bg-center hidden sm:block"
                    style={{ backgroundImage: `url(${IMAGE_CONSTANTS.banner})` }}>
                
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
                <MobileFooter />
            </div>
        </>
}
