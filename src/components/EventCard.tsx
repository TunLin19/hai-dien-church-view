import type { Event } from "@/pages/Events";
import { Button } from "./ui/button";

function EventCard({ event }: { event: Event }) {
  return (
    <div className="border-content rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-60 md:h-48 object-fill rounded-lg"
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
            <span className="w-20 font-medium">Tổ chức:</span>
            {event.institute}
          </p>
        </div>

        <p className="mt-2 text-gray-600">{event.description}</p>
      </div>
      <div className="px-4">
        {event.eventType == "CLASS" ?(
          <Button className="pt-2 w-full bg-cyan-800 hover:bg-cyan-900 text-white">
            Đăng ký
          </Button>
        ):null}
      </div>
    </div>
  );
}

export default EventCard;
