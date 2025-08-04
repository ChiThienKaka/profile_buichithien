import { IMAGE_CONSTANTS } from "@/constants/image";

export default function MobileFooter() {
    return (
        <footer className="bg-[#f6f6f6] shadow-inner py-10 px-6 sm:hidden md:px-16">
            <div className="w-full">
                    {/* Logo + Mô tả + Social */}
                <div className="flex flex-col items-center">
                <img
                    src={"./bui-chi-thien1.svg"}
                    alt="Bui Chi thien"
                    className="w-24 mb-3"
                />
                <p className="text-gray-500 text-sm mb-4 text-justify">
                    Hãy kết nối với tôi để cùng nhau phát triển và chia sẻ những kiến thức bổ ích trong lĩnh vực công nghệ thông tin.
                </p>
                <div className="flex space-x-3">
                    <a href="https://www.facebook.com/chithien.bui.10690/" className="hover:opacity-70 transition">
                    <img src={IMAGE_CONSTANTS.fabook} alt="Facebook" className="w-6 h-6" />
                    </a>
                    <a href="#" className="hover:opacity-70 transition">
                    <img src={IMAGE_CONSTANTS.zalo} alt="Zalo" className="w-6 h-6" />
                    </a>
                    <a href="#" className="hover:opacity-70 transition">
                    <img src={IMAGE_CONSTANTS.tiktok} alt="Tiktok" className="w-6 h-6" />
                    </a>
                    <a href="#" className="hover:opacity-70 transition">
                    <img src={IMAGE_CONSTANTS.linkedin} alt="LinkedIn" className="w-6 h-6" />
                    </a>
                </div>
                </div>
            </div>
        </footer>
    );
}