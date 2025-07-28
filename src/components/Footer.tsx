import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-cyan-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Church Info */}
          <div>
            <div className="text-xl font-bold mb-4">Giáo xứ Hải Điền</div>
            <ul className="space-y-2">
              <li>123 Đường ABC, Xã Hải Điền</li>
              <li>Điện thoại: (84) 234 567 890</li>
              <li>Email: giaoxuhaidien@gmail.com</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Liên kết nhanh
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="transition-colors"
                  onClick={handleScrollToTop}
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="transition-colors"
                  onClick={handleScrollToTop}
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="transition-colors"
                  onClick={handleScrollToTop}
                >
                  Lịch sự kiện
                </Link>
              </li>
            </ul>
          </div>

          {/* Mass Schedule */}
          <div>
            <h3 className="text-xl font-bold mb-4">Giờ lễ</h3>
            <div className=" grid grid-cols-2 space-y-2">
              <div>
                <h4 className="font-medium mb-2">Ngày thường</h4>
                <ul>
                  <li>Sáng: 5:00</li>
                  <li>Chiều: 17:30</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Chúa nhật</h4>
                <ul>
                  <li>Sáng: 5:00 - 7:00</li>
                  <li>Chiều: 16:30 - 18:30</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-700 mt-6 pt-6">
          <div className="relative flex justify-center items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Giáo xứ Hải Điền.
            </p>
            <a
              href="https://www.facebook.com/linh.tuan.35380399/"
              className="absolute right-0 logo"
            >
           <img className="w-8 h-8 border-2 border-white rounded-full" src={logo} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
