import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Button } from "@/components/ui/button.tsx";
import axios from "axios";
import requests from "./Requests";

const Event = () => {
  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    headerImageUrl: "",
    dateFrom: "",
    place: "",
  });

  useEffect(() => {
    axios
      .get(requests.requestAPI)
      .then((response) => {
        const data = response.data;
        setEventData({
          name: data.namePub,
          description: data.description,
          headerImageUrl: data.headerImageUrl,
          dateFrom: data.dateFrom,
          place: data.place,
        });
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
      });
  }, []);

  const handleAddToCalendar = () => {
    const eventStartTime = new Date(eventData.dateFrom);
    eventStartTime.setHours(12, 0, 0);
    const eventEndTime = new Date(eventData.dateFrom);
    eventEndTime.setHours(18, 0, 0);

    const formatDateTime = (date: Date) =>
      date.toISOString().replace(/-|:|\.\d\d\d/g, "");

    const eventUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventData.name
    )}&dates=${formatDateTime(eventStartTime)}/${formatDateTime(
      eventEndTime
    )}&details=${encodeURIComponent(
      eventData.description
    )}&location=${encodeURIComponent(eventData.place)}&sf=true&output=xml`;
    window.open(eventUrl, "_blank");
  };

  return (
    <>
      <Navbar isLoggedIn={false} />{" "}
      <div className="flex flex-col grow">
        <main className="grow flex flex-col justify-center">
          <div className="w-full p-4 flex flex-col md:flex-row grow gap-3">
            <div
              className="max-w-screen-lg m-auto bg-white rounded-md grow grid p-3 self-stretch shadow-sm"
              style={{
                gridAutoRows: "min-content",
              }}
            >
              <div className="max-w-screen-lg m-auto p-4 flex flex-col items-start grow gap-3 w-full">
                <img
                  src={eventData.headerImageUrl}
                  alt="Event Header"
                  className="rounded-md max-w-full h-auto mx-auto"
                />
                <h1 className="text-2xl text-zinc-900 font-semibold pt-5">
                  {eventData.name}
                </h1>
                <p className="text-s py-3 text-zinc-500">
                  {eventData.description}
                </p>
                <div className="flex flex-col gap-2 pb-4">
                  <p className="text-s">
                    Kdy:{" "}
                    {new Date(eventData.dateFrom).toLocaleDateString("cs-CZ", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <p>Místo: {eventData.place}</p>
                </div>

                <aside className="w-full rounded-md shadow-sm flex flex-col gap-2">
                  <Button
                    variant="secondary"
                    onClick={handleAddToCalendar}
                    className="hover:ring-purple-800 hover:bg-violet-950 hover:text-white transition duration-500"
                  >
                    Add to calendar
                  </Button>
                </aside>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Event;
