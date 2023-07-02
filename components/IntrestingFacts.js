import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhiskeyGlass,
  faBeerMugEmpty,
  faPeoplePulling,
  faRestroom,
  faCalendarCheck,
  faFire,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    name: "Do you know?",
    description:
      "The global average consumption was 6.18 liters liters per person in the latest year available.",
    icon: faPeoplePulling,
  },
  {
    name: "Do you know?",
    description:
      "Beer is the world’s oldest beverage and dates back 5000 years.",
    icon: faBeerMugEmpty,
  },
  {
    name: "Do you know?",
    description:
      "Vodka is the world’s most popular alcohol with approx 5 billion litres consumed per year.",
    icon: faWhiskeyGlass,
  },
  {
    name: "Do you know?",
    description:
      "After a young woman and a young man drink the same amount of alcohol, the woman will have a higher blood alcohol level.",
    icon: faRestroom,
  },
  {
    name: "Do you know?",
    description:
      "Consuming alcohol causes blood to rush to the skin's surface, which makes you feel warmer but not actually warm you up.",
    icon: faFire,
  },
  {
    name: "Do you know?",
    description:
      "The world’s longest hangover lasted one month exactly; Man from Scotland consumed 60 pints of beer in one sitting.",
    icon: faCalendarCheck,
  },
];

export default function IntrestingFacts() {
  return (
    <div className="mt-12 mb-16 mx-auto w-11/12 max-w-6xl">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Fun Facts Or Not?
          </p>
          <p className="mt-4 text-base sm:text-lg leading-8 text-gray-600 underline decoration-yellow-300 decoration-[10px] [text-decoration-skip-ink:none] underline-offset-[-3px]">
            Lets prepare you for your next going out. Intresting facts!
          </p>
        </div>
      </div>
      <div className="mx-auto mt-4 max-w-6xl px-6 sm:mt-10 md:mt-12 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-4 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <FontAwesomeIcon
                  icon={feature.icon}
                  size="lg"
                  className="absolute left-1 top-1 h-5 w-5 text-yellow-400"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
