import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LinksEnum } from "@/lib/LinksEnum";
import { UpcomingEventsData } from "./UpcomingEventsData";
import { PastActivities } from "./PastEventsData";
import HighlightCard from "./HighlightsCard";
import UpcomingEventCard from "./UpcomingEventCard";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { TypingAnimation } from "./magicui/typing-animation";
import { BinaryBackground } from "./BinaryBackground";

export const Main: React.FC = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  const handleViewUpcomingEvents = () => {
    navigate(LinksEnum.UPCOMING_EVENTS);
  };

  const selectedEvents = UpcomingEventsData.slice(0, 3);
  const pastSelectedEvents = PastActivities.slice(0, 2);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-cover bg-center bg-fixed flex flex-col">
      <BinaryBackground className="hidden lg:block" />
      <div
        className={`mt-28 md:mt-40 lg:mt-52 xl:mt-52 flex flex-col justify-center items-center transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
          <TypingAnimation className="text-2xl md:text-3xl lg:text-5xl xl:text-5xl">
            Welcome to the UoM Computer Club
          </TypingAnimation>
        </h1>
        <h2 className="text-lg sm:text-lg mb-6 text-center">
          Empowering students through technology, innovation, and collaboration.
        </h2>

        <button
          className="mt-10 px-8 py-3 rounded-lg transition-all"
          onClick={handleViewUpcomingEvents}
        >
          <InteractiveHoverButton className="text-xs lg:text-xl xl:text-xl">
            View all our upcoming events
          </InteractiveHoverButton>
        </button>

        <div className="flex flex-col items-center mt-32 md:mt-40 lg:mt-40 xl:mt-40">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 transition-transform duration-300 hover:scale-105 hover:opacity-80">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-blue-500">
              Scroll to see our newest events
            </span>
          </h2>
          <div className="mt-4 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="text-center">
          <div
            className="flex flex-wrap justify-center gap-6 px-4 sm:px-8 transition-opacity duration-500"
            style={{
              opacity: showContent ? 1 : 0,
              transform: showContent ? "none" : "translateY(30px)",
              transition: "opacity 0.7s, transform 0.7s",
            }}
          >
            {selectedEvents.map((event, index) => (
              <UpcomingEventCard key={index} eventData={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-blue-500">
              View the Highlights of Our Club
            </span>
          </h2>
          <div
            className="flex flex-wrap justify-center gap-6 px-4 sm:px-8 transition-opacity duration-500"
            style={{
              opacity: showContent ? 1 : 0,
              transform: showContent ? "none" : "translateY(30px)",
              transition: "opacity 0.7s, transform 0.7s",
            }}
          >
            {pastSelectedEvents.map((event, index) => (
              <HighlightCard
                key={index}
                eventData={event}
                className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl "
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
