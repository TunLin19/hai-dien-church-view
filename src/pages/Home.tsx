import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";

function Home() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Welcome Message */}
      <section className="container mx-auto py-8 px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold  mb-6">
            Chào mừng đến với Giáo xứ Hải Điền
          </h2>
          <p className="text-gray-700 mb-6">
            Chúng tôi vui mừng chào đón bạn đến với cộng đoàn đức tin của chúng
            tôi. Giáo xứ Hải Điền là nơi chúng ta cùng nhau thờ phượng, cầu
            nguyện và phục vụ trong tình yêu của Chúa Kitô.
          </p>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Sự Kiện Sắp Tới</h2>
          <Link
            to="/events"
            className="font-medium"
            onClick={handleScrollToTop}
          >
            Xem tất cả →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-content">
            <h3 className="text-xl semibold">Lễ Chúa Nhật</h3>
            <p className="mt-2 text-gray-600">Thời gian: 7:00 AM</p>
            <p className="text-gray-600">Ngày: Mỗi Chủ nhật</p>
          </div>
          <div className="border-content">
            <h3 className="text-xl semibold">
              Rửa tội tập thể
            </h3>
            <p className="mt-2 text-gray-600">Thời gian: 9:00 AM</p>
            <p className="text-gray-600">Ngày: 20/03/2025</p>
          </div>
        </div>
      </section>

      {/* Mass Schedule Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center">
            Giờ Lễ
          </h2>
          <div className="max-w-3xl p-4 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Ngày Thường</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Sáng</span>
                    <span className="text-gray-700">5:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Chiều</span>
                    <span className="text-gray-700">17:30</span>
                  </li>
                </ul>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Chúa Nhật</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Sáng</span>
                    <span className="text-gray-700">5:00 - 7:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Chiều</span>
                    <span className="text-gray-700">16:30 - 18:30</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry/Activities */}
      <section className="w-full py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">
            Các Hoạt Động Mục Vụ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-content text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🙏</span>
              </div>
              <h3 className="text-xl font-medium mb-2">
                Cầu Nguyện
              </h3>
              <p className="text-gray-700">
                Các nhóm cầu nguyện và thờ phượng hàng tuần
              </p>
            </div>
            <div className="border-content text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h3 className="text-xl font-medium mb-2">
                Bác Ái
              </h3>
              <p className="text-gray-700">
                Các hoạt động từ thiện và hỗ trợ cộng đồng
              </p>
            </div>
            <div className="border-content text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">📚</span>
              </div>
              <h3 className="text-xl font-medium mb-2">
                Giáo Lý
              </h3>
              <p className="text-gray-700">Các lớp giáo lý cho mọi lứa tuổi</p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
}

export default Home;
