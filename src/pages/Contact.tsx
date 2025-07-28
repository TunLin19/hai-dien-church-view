function Contact() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-holy-blue mb-4 text-center">
        Liên hệ với Giáo xứ Hải Điền
      </h1>
      <div className="w-16 h-1 bg-holy-gold mx-auto mb-8 rounded"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.409175362883!2d106.30784757340389!3d20.158681917096736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31360fb75a9f98e1%3A0x3e96b14468f5c5fb!2zTmjDoCBUaOG7nSBHacOhbyBY4bupIEjhuqNpIMSQaeG7gW4!5e0!3m2!1svi!2s!4v1753286863652!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
            title="Hải Điền map"
          />
        </div>
        {/* Form liên hệ (nếu muốn) */}
      <div className="max-w-xl mx-auto bg-white p-4 border-t rounded-lg shadow-lg">
        <h2 className="text-xl font-medium mb-4 text-center">
          Gửi lời nhắn
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Họ và tên"
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            placeholder="Số điện thoại"
            className="w-full border rounded px-3 py-2"
            required
          />
          <textarea
            placeholder="Nội dung"
            className="w-full border rounded px-3 py-2"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-holy-blue hover:bg-holy-gold text-white font-semibold px-6 py-2 rounded transition"
          >
            Gửi
          </button>
        </form>
      </div>
      </div>
      
    </div>
  )
}

export default Contact
