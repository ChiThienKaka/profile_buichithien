
export default function Overview(){
    const dataTech = [
        {
            name: "React js",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s"
        },
        {
            name: "Node js",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtb_9zVzsPWq_LDNDBVCsBYFo996KtVyCxWg&s"
        },
        {
            name:"PostgreSQL",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/800px-Postgresql_elephant.svg.png"
        },
        {
            name:"Firebase",
            image:"https://www.gstatic.com/devrel-devsite/prod/v7f9e36f6d186549b8ffe909dedf2851d752c55d39aba6c518bdd33de03ff1b45/firebase/images/touchicon-180.png"
        },
        {
            name:"Tailwind",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s"
        }
    ]
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
            {/* Cột trái */}
            <div className=" p-4 overflow-auto">
                <h1 className="font-semibold"> Mục tiêu nghề nghiệp</h1>
                <div className="font-light text-justify">
                    <p>Mục tiêu ngắn hạn: Làm việc trong môi trường chuyên nghiệp để học hỏi kinh nghiệm thực tế, nâng cao kỹ năng frontend và backend với React, Node.js có thể học thêm ngôn ngữ khác nếu nhà tuyển dụng yêu cầu, chấp nhận thử thách khó khăn.</p>
                    <p>Mục tiêu dài hạn: Trở thành Fullstack Web/App Developer vững chuyên môn, có khả năng xây dựng hệ thống web hiệu quả và đóng góp vào sự phát triển sản phẩm của doanh nghiệp..</p>
                </div>
                <h1 className="font-semibold">Kỹ năng</h1>
                <div className="font-light text-justify">
                    <p>Kỹ năng chuyên môn: OOP, GIT, HTML5, CSS3, JavaScript (ES6+), TypeScript, ReactJS, ViteJS và Ant Design trong phát triển giao diện. Có kinh nghiệm xây dựng RESTful API với Node.js, ExpressJS, xác thực người dùng bằng JWT, Google OAuth (Firebase).</p>
                    <p>Kỹ năng mềm: Tư duy giải quyết vấn đề, tự học nhanh, làm việc nhóm hiệu quả, giao tiếp kỹ thuật rõ ràng, có khả năng quản lý thời gian và hoàn thành công việc đúng deadline.</p>
                </div>
            </div>

            {/* Cột phải */}
            <div className="p-4 overflow-auto bg-[#f5f5f5] rounded-lg">
                <h1>Công nghệ</h1>
                <div>
                    <div className="flex justify-between mt-1 text-gray-400">
                        <span>Tất cả ({dataTech.length??0})</span>
                        <span className="text-[#2fb3b6] hover:underline cursor-pointer">Xem thêm</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 mt-2">
                        {dataTech && dataTech.map((tech, index) => (
                            <div key={index} className="text-center flex flex-col items-center p-4 bg-white shadow-lg rounded-lg
                            transition-transform duration-300 ease-in-out
                            hover:scale-105 hover:shadow-xl hover:bg-gray-50">
                            <img
                                src={tech.image}
                                alt={tech.name}
                                className="w-10 h-10 md:object-contain md:h-15 md:w-15 lg:h-20 lg:w-20 object-cover"
                            />
                            <span className="text-xs md:text-xs lg:text-sm">{tech.name}</span>
                        </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}