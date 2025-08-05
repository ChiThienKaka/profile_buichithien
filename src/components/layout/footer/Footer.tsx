import { IMAGE_CONSTANTS } from "@/constants";

export default function Footer(){
    return(
        <footer className="bg-[#f6f6f6] dark:bg-black shadow-inner py-10 px-6 hidden sm:block md:px-16">
      <div className="w-full mx-auto grid grid-cols-3 gap-8">
        <div className="col-span-1">
              {/* Logo + Mô tả + Social */}
              <div className="flex flex-col items-start">
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
        <div className="col-span-2">
            <div className="grid grid-cols-3 gap-8 justify-items-end">
              {/* Quick Links */}
              <div>
                <h4 className="text-md font-semibold mb-3">Liên kết</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:underline">Trang chủ</a></li>
                  <li><a href="#" className="hover:underline">Thông tin</a></li>
                  <li><a href="#" className="hover:underline">Đối tác</a></li>
                  <li><a href="#" className="hover:underline">Liên hệ</a></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-md font-semibold mb-3">Dịch vụ</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:underline">Thiết kế website</a></li>
                  <li><a href="#" className="hover:underline">Thiết kế Data</a></li>
                  <li><a href="#" className="hover:underline">Xử lý Data</a></li>
                  <li><a href="#" className="hover:underline">Làm thuê Đồ án CNTT</a></li>
                </ul>
              </div>

              {/* Help & Support */}
              <div>
                <h4 className="text-md font-semibold mb-3">Hỗ trợ</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:underline">Trung tâm hỗ trợ</a></li>
                  <li><a href="#" className="hover:underline">Đường dây nóng</a></li>
                  <li><a href="#" className="hover:underline">Câu hỏi thường gặp</a></li>
                  <li><a href="#" className="hover:underline">Điều khoản & Điều kiện</a></li>
                </ul>
              </div>
                  </div>
              </div>    
      </div>
    </footer>
    )
}