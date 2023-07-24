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
    <div className="mb-20 mx-auto w-11/12 max-w-6xl">
      <div className="mx-auto max-w-2xl sm:text-center">
        <p className="text-3xl font-bold tracking-tight text-pirateGold-200 sm:text-4xl">
          Fun Facts Or Not?
        </p>
        <p className="mt-2 text-lg font-bold leading-8 text-pirateGold-500 underline decoration-pirateGold-900 decoration-4 [text-decoration-skip-ink:none] underline-offset-[-2px]">
          Lets prepare you for your next going out. Intresting facts!
        </p>
      </div>
      <dl className="mx-auto mt-4 lg:mt-10 grid grid-cols-1 gap-x-4 gap-y-2 text-base leading-7 text-pirateGold-500 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
        {features.map((feature) => (
          <div key={feature.name} className="relative pl-9">
            <dt className="inline font-semibold text-pirateGold-500">
              <FontAwesomeIcon
                icon={feature.icon}
                size="lg"
                className="absolute left-1 top-1 h-5 w-5 text-pirateGold-500"
              />
              {feature.name}
            </dt>{" "}
            <dd className="text-pirateGold-200 inline">
              {feature.description}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
