import Image from "./Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChampagneGlasses,
  faMartiniGlassCitrus,
  faIcons,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    name: "Private Events",
    description:
      "From an office party to an at-home celebration, we can help with your next event. Please fill out the form below and we’ll be in touch soon!",
    icon: faChampagneGlasses,
  },
  {
    name: "Food & Drinks",
    description:
      "Our culinary team provides a seamless blend of traditional and modern cuisine to compliment your evening with the special tastes of food & drinks!",
    icon: faMartiniGlassCitrus,
  },
  {
    name: "Special Events",
    description:
      "Every month we organize different special events that require a personal invitation with the presence of different special guests!",
    icon: faIcons,
  },
];

export default function Services() {
  return (
    <div className="relative isolate overflow-hidden bg-shark-900 pt-2 pb-4 sm:py-12">
      <Image
        src="https://cdn.pixabay.com/photo/2015/05/29/19/18/cafe-789635_1280.jpg"
        alt="your bar interior cover photo"
        withContainer={false}
        classNameImage="inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-10"
      />
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-shark-100 to-shark-600 opacity-10"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-shark-600 to-shark-950 opacity-10"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto w-11/12 max-w-6xl">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl my-6 font-bold tracking-tight text-pirateGold-500 text-5xl sm:text-6xl">
            BAR & DINNER
          </h2>
          <h4 className="text-2xl my-2 font-bold underline decoration-pirateGold-500 decoration-8 [text-decoration-skip-ink:none] underline-offset-[-3px] tracking-wide text-pirateGold-100 text-3xl sm:text-4xl">
            Brunch & Burger after 4 p.m.
          </h4>
          <p className="my-6 text-lg leading-8 text-pirateGold-100">
            Out bar is more than just a place to grab a drink; our bar is a
            space where people can unwind, socialize, and enjoy themselves!
            Currently the best cocktail bar in Europe, number 1 one in Germany!
          </p>
        </div>
        <div className="mx-auto my-6 grid max-w-2xl grid-cols-1 gap-4 sm:my-10 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {services.map((card) => (
            <div
              key={card.name}
              className="flex items-center sm:items-start gap-x-4 rounded-xl bg-shark-900 p-7 sm:p-8 opacity-80"
            >
              <FontAwesomeIcon
                icon={card.icon}
                size="2xl"
                className="mx-auto mr-1 sm:m-auto sm:mr-4 h-8 w-8 flex-none text-pirateGold-500"
              />
              <div className=" leading-7">
                <h3 className="font-medium sm:font-semi-bold text-pirateGold-200">
                  {card.name}
                </h3>
                <p className="text-pirateGold-500 text-sm">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
