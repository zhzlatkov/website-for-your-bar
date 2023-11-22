import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-2 right-2 z-30">
      <button
        type="button"
        onClick={scrollToTop}
        className={
          (isVisible ? "opacity-100" : "opacity-0") +
          " z-30 inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-pirateGold-400 bg-shark-950 font-extrabold text-xl text-pirateGold-400 shadow-sm transition-opacity hover:bg-shark-700 focus:outline-none focus:ring focus:ring-shark-500 focus:ring-offset md:h-12 md:w-12 md:text-3xl"
        }
      >
        <span className="mb-1 sm:mb-2">▲</span>
      </button>
    </div>
  );
}
