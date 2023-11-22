import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhiskeyGlass,
  faBeerMugEmpty,
  faPeoplePulling,
  faRestroom,
  faCalendarCheck,
  faFire,
} from "@fortawesome/free-solid-svg-icons";

const icons = [
  faWhiskeyGlass,
  faBeerMugEmpty,
  faPeoplePulling,
  faRestroom,
  faCalendarCheck,
  faFire,
];

export default function FunFacts({ isVisible, funFacts }) {
  if (!isVisible) {
    return;
  }
  const maxDisplayedFacts = 6;
  if (funFacts.length > maxDisplayedFacts) {
    let randomIndex = Math.floor(
      Math.random() * (funFacts.length - maxDisplayedFacts)
    );
    funFacts = funFacts.slice(randomIndex, randomIndex + maxDisplayedFacts);
  }

  return (
    <section className="mb-12 mt-6 mx-auto w-11/12 max-w-6xl">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-3xl font-bold tracking-tight text-pirateGold-200 text-shadow-h3 sm:text-4xl">
          Fun Facts Or Not?
        </h2>
        <p className="mt-2 text-lg font-bold leading-8 text-pirateGold-500 underline decoration-pirateGold-900 decoration-4 [text-decoration-skip-ink:none] underline-offset-[-2px]">
          Lets prepare you for your next going out. Intresting facts!
        </p>
      </div>
      <dl className="mx-auto mt-4 lg:mt-10 grid grid-cols-1 gap-x-4 gap-y-2 text-base leading-7 text-pirateGold-500 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
        {funFacts.map((funFact, index) => (
          <article key={index} className="relative pl-9">
            <dt
              key={`name_${index}`}
              className="inline font-semibold text-pirateGold-500"
            >
              <FontAwesomeIcon
                key={`icon_${index}`}
                icon={icons[index] || icons[0]}
                size="lg"
                className="absolute left-1 top-1 h-5 w-5 text-pirateGold-500"
              />
              {funFact.name}
            </dt>{" "}
            <dd
              key={`description_${index}`}
              className="text-pirateGold-200 inline"
            >
              {funFact.text}
            </dd>
          </article>
        ))}
      </dl>
    </section>
  );
}
