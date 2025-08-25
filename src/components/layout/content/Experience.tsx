import { IMAGE_CONSTANTS } from "@/constants"
import LibraryImage from "@/components/components-ui/LibraryImage";
import { MapPin, MapPinned, Image, Database, ChartColumnBig, ArrowDownUp, CheckCheck } from "lucide-react";
export default function Experience() {
    const dataImages = [
        {src: "https://res.cloudinary.com/dgrwfoh9x/image/upload/v1755166737/vnpt_11_sz6cnq.jpg"},
        {src: "https://res.cloudinary.com/dgrwfoh9x/image/upload/v1755166737/vnpt_10_sulmsl.jpg"},
        {src: "https://res.cloudinary.com/dgrwfoh9x/image/upload/v1755166737/vnpt_12_dhikgg.jpg"},
        {src:"https://res.cloudinary.com/dgrwfoh9x/image/upload/v1755166737/vnpt_7_uav7ju.jpg"},
        {src:"https://res.cloudinary.com/dgrwfoh9x/image/upload/v1755166737/vnpt_9_pr3ku3.jpg"},
        {src:"https://res.cloudinary.com/dgrwfoh9x/image/upload/v1755166737/vnpt_8_gbvkpn.jpg"},
        {src:"https://res.cloudinary.com/dgrwfoh9x/image/upload/v1755166736/vnpt_2_vetspy.jpg"},
        {src:"https://res.cloudinary.com/dgrwfoh9x/image/upload/v1755166736/vnpt_6_ntrkpl.jpg"},
        {src:"https://res.cloudinary.com/dgrwfoh9x/image/upload/v1755166736/vnpt_5_uiwhnf.jpg"},
        {src:"https://res.cloudinary.com/dgrwfoh9x/image/upload/v1755166736/vnpt_3_k8rahy.jpg"},
        {src:"https://res.cloudinary.com/dgrwfoh9x/image/upload/v1755166736/vnpt_1_lufp94.jpg"},
        {src:"https://res.cloudinary.com/dgrwfoh9x/image/upload/v1755166735/vnpt_4_vtmxlx.jpg"}
    ]
    return (
        <div className="flex flex-col gap-y-5 w-full">
            <div className="flex flex-col gap-y-5 w-full
                text-xs sm:text-sm md:text-base">
                    <div className="flex w-full flex-wrap justify-between items-center dark:text-white">
                        <span className="font-semibold">Thực tập tinh thực tập phần mềm - VNPT Bình Dương</span>
                        <img src="./vnpt.png" alt="vnpt bình dương" 
                        className="w-5 h-5 sm:w-8 sm:h-8 object-cover overflow-hidden rounded-full shadow" />
                    </div>
                    <div>
                        <ul className="text-justify space-y-2">
                            <li className="flex items-start gap-2"><MapPin  />GIS & Bản đồ: Tích hợp Leaflet.js để hiển thị bản đồ tương tác với các điểm đánh dấu có thể kéo thả, phục vụ theo dõi vị trí theo thời gian thực.</li>
                            <li className="flex items-start gap-2"><MapPinned  />Dịch vụ định vị: Phát triển chức năng lấy tọa độ người dùng và xác nhận vị trí, sau đó lưu vào hệ thống phục vụ đăng ký hộ kinh doanh.</li>
                            <li className="flex items-start gap-2"><Image  />Xử lý hình ảnh: Xây dựng tính năng chụp ảnh trực tiếp hoặc tải lên từ thiết bị, cho phép người dùng đính kèm hình ảnh.</li>
                            <li className="flex items-start gap-2"><Database  />API vị trí động: Tích hợp .NET Web API để lấy và cập nhật dữ liệu tỉnh/thành, quận/huyện và phường/xã một cách linh hoạt.</li>
                            <li className="flex items-start gap-2"><ChartColumnBig  />Trực quan hóa dữ liệu: Xây dựng bảng thống kê hiển thị tình trạng thu thập dữ liệu hộ kinh doanh.</li>
                            <li className="flex items-start gap-2"><ArrowDownUp  />Quản lý cơ sở dữ liệu: Kết nối .NET Web API với PostgreSQL để truy xuất và lưu trữ dữ liệu mượt mà.</li>
                           <li className="flex items-start gap-2"><CheckCheck  /> Kiểm thử & xác thực API: Sử dụng Postman để kiểm thử và xác thực các yêu cầu API.</li>
                        </ul>
                    </div>
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="flex flex-wrap gap-2">
                            <img src={IMAGE_CONSTANTS.pg} alt="postgresql" className="w-5 h-5 sm:w-8 sm:h-8 object-cover rounded-full shadow" />
                            <img src={IMAGE_CONSTANTS.postman} alt="postman" className="w-5 h-5 sm:w-8 sm:h-8 object-cover rounded-full shadow" />
                            <img src={IMAGE_CONSTANTS.swagger} alt="swagger" className="w-5 h-5 sm:w-8 sm:h-8 object-cover rounded-full shadow" />
                            <img src={IMAGE_CONSTANTS.ts} alt="typescript" className="w-5 h-5 sm:w-8 sm:h-8 object-cover rounded-full shadow" />
                            <img src={IMAGE_CONSTANTS.dotnet} alt="dotnet" className="w-5 h-5 sm:w-8 sm:h-8 object-cover rounded-full shadow" />
                        </div>
                        <div>
                            <span className="text-xs sm:text-sm font-semibold text-gray-400">từ 06-2024 đến 08-2024</span>
                        </div>
                    </div>
                </div>

              <div> 
                <div className="flex items-center w-full">
                    <div className="flex-grow border-t border-gray-300 dark:border-white"></div>
                    <span className="px-3 text-gray-300 text-xs sm:text-base md:text-lg">Giao diện</span>
                    <div className="flex-grow border-t border-gray-300 dark:border-white"></div>
                </div>

                <LibraryImage limit={8} css_grid="grid grid-cols-3 lg:grid-cols-4 gap-2 [grid-auto-rows:0.5fr]" data={dataImages} />
            </div>
        </div>
    )
}