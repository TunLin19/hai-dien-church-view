function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-cyan-800 mb-8">Giới Thiệu</h1>

      {/* History Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-cyan-700 mb-4">Lịch Sử</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 mb-4">
            Giáo xứ Hải Điền được thành lập từ năm 1900, là một trong những giáo
            xứ lâu đời nhất trong Giáo phận. Trải qua hơn 120 năm hình thành và
            phát triển, giáo xứ đã từng bước xây dựng và phát triển...
          </p>
          <p className="text-gray-600">
            Nhà thờ hiện tại được xây dựng vào năm 1960, với kiến trúc Gothic
            đặc trưng, là một công trình kiến trúc độc đáo của vùng...
          </p>
        </div>
      </section>

      {/* Community Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-cyan-700 mb-4">
          Cộng Đoàn Giáo Xứ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-medium mb-3">Thống kê</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Số giáo dân: 5,000</li>
              <li>Số giáo họ: 4</li>
              <li>Số hội đoàn: 10</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-medium mb-3">Các Hội Đoàn</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Hội Các Bà Mẹ Công Giáo</li>
              <li>Đoàn Thiếu Nhi Thánh Thể</li>
              <li>Ca Đoàn Thánh Tâm</li>
              <li>Hội Legio Mariae</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-semibold text-cyan-700 mb-4">Liên Hệ</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-3">Thông tin liên lạc</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Địa chỉ: 123 Đường ABC, Xã Hải Điền</li>
                <li>Điện thoại: (84) 234 567 890</li>
                <li>Email: giaoxuhaidien@gmail.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">
                Giờ làm việc văn phòng
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>Thứ 2 - Thứ 6: 8:00 - 17:00</li>
                <li>Thứ 7: 8:00 - 12:00</li>
                <li>Chúa Nhật: Đóng cửa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
