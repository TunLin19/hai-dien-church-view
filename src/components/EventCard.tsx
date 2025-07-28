function EventCard({ event }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-4">
        <h3 className="text-xl font-semibold text-cyan-800 mb-2">
          {event.title}
        </h3>

        <div className="space-y-2 text-gray-600">
          <p className="flex items-center">
            <span className="w-20 font-medium">Thời gian:</span>
            {event.time}
          </p>
          <p className="flex items-center">
            <span className="w-20 font-medium">Ngày:</span>
            {event.date}
          </p>
          <p className="flex items-center">
            <span className="w-20 font-medium">Địa điểm:</span>
            {event.location}
          </p>
          <p className="flex items-center">
            <span className="w-20 font-medium">Tổ chức:</span>
            {event.organizer}
          </p>
        </div>

        <p className="mt-4 text-gray-600">{event.description}</p>
      </div>
    </div>
  );
}

export default EventCard;
