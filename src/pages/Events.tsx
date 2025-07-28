import { useState } from "react";
import EventCard from "../components/EventCard";

function Events() {
  const [filter, setFilter] = useState("all");

  const events = [
    {
      id: 1,
      title: "Lễ Chúa Nhật",
      time: "7:00 AM",
      date: "Mỗi Chủ nhật",
      location: "Nhà thờ chính",
      description: "Thánh lễ chính ngày Chúa Nhật dành cho toàn thể giáo dân.",
      organizer: "Cha xứ",
      category: "regular",
      image: "/images/sunday-mass.jpg",
    },
    {
      id: 2,
      title: "Rửa tội tập thể",
      time: "9:00 AM",
      date: "20/03/2025",
      location: "Nhà thờ chính",
      description:
        "Nghi thức Rửa tội dành cho các em nhỏ trong gia đình giáo dân. Xin đăng ký trước tại văn phòng giáo xứ.",
      organizer: "Ban Bí tích",
      category: "special",
      image: "/images/baptism.jpg", // Replace with actual image path
    },
    {
      id: 3,
      title: "Giờ Chầu Thánh Thể",
      time: "7:30 PM - 8:30 PM",
      date: "Thứ Năm hàng tuần",
      location: "Nhà thờ chính",
      description:
        "Giờ chầu Thánh Thể và cầu nguyện chung dành cho mọi giáo dân.",
      organizer: "Hội Thánh Thể",
      category: "regular",
    },
    {
      id: 4,
      title: "Tĩnh tâm Mùa Chay",
      time: "8:00 AM - 5:00 PM",
      date: "15/03/2025",
      location: "Hội trường giáo xứ",
      description:
        "Ngày tĩnh tâm mùa Chay dành cho toàn thể giáo dân. Chương trình bao gồm giảng thuyết, suy niệm, và lãnh nhận Bí tích Hòa giải.",
      organizer: "Ban Mục Vụ",
      category: "special",
      image: "/images/retreat.jpg", // Replace with actual image path
    },
    {
      id: 5,
      title: "Giáo lý hôn nhân",
      time: "7:00 PM - 9:00 PM",
      date: "Thứ Bảy, từ 05/04/2025 - 26/04/2025",
      location: "Phòng học giáo lý",
      description:
        "Khóa học dành cho các đôi chuẩn bị kết hôn. Xin liên hệ văn phòng giáo xứ để đăng ký.",
      organizer: "Ban Giáo Lý",
      category: "class",
    },
    {
      id: 6,
      title: "Lễ kính Đức Mẹ",
      time: "6:00 PM",
      date: "31/05/2025",
      location: "Nhà thờ và khuôn viên",
      description:
        "Thánh lễ kính Đức Mẹ và rước kiệu quanh khuôn viên nhà thờ.",
      organizer: "Ban Phụng Vụ",
      category: "special",
      image: "/images/mary-feast.jpg", // Replace with actual image path
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-cyan-800 mb-8">Lịch Sự Kiện</h1>

      {/* Filter buttons */}
      <div className="flex gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-md ${
            filter === "all" ? "bg-cyan-600 text-white" : "bg-gray-100"
          }`}
          onClick={() => setFilter("all")}
        >
          Tất cả
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            filter === "regular" ? "bg-cyan-600 text-white" : "bg-gray-100"
          }`}
          onClick={() => setFilter("regular")}
        >
          Thường kỳ
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            filter === "special" ? "bg-cyan-600 text-white" : "bg-gray-100"
          }`}
          onClick={() => setFilter("special")}
        >
          Đặc biệt
        </button>
        <button
          onClick={() => setFilter("class")}
          className={`px-4 py-2 rounded-full font-medium transition-colors ${
            filter === "class"
              ? "bg-cyan-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Lớp học & Khóa học
        </button>
      </div>

      {/* Events grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events
          .filter((event) => filter === "all" || event.category === filter)
          .map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
      </div>

      {/* Empty state */}
      {events.filter((event) => filter === "all" || event.category === filter)
        .length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            Không có sự kiện nào trong mục này.
          </p>
        </div>
      )}

      {/* Information section */}
      <div className="mt-12 bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-serif mb-4">
          Thông tin đăng ký sự kiện
        </h3>
        <p className="text-gray-700 mb-4">
          Để đăng ký tham gia các sự kiện đặc biệt hoặc các lớp học, xin vui
          lòng liên hệ với văn phòng giáo xứ:
        </p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Điện thoại: [Số điện thoại]</li>
          <li>Email: haidienchurch@example.com</li>
          <li>Văn phòng mở cửa: Thứ Hai - Thứ Sáu, 8:00 AM - 4:00 PM</li>
        </ul>
      </div>
    </div>
  );
}

export default Events;
