import Image from "./Image";
import Link from "next/link";
import {
  EnvelopeOpenIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/20/solid";

export default function Navbar() {
  return (
    <nav className="flex justify-between h-10 sm:w-10/12 my-auto items-center p-4 sm:p-2 sm:m-auto max-w-6xl">
      <Link
        href="tel:+359892461022"
        alt="call to telephone number :+359892461022"
        className="text-pirateGold-500 w-1/3 flex"
      >
        <PhoneArrowUpRightIcon className="text-pirateGold-200 mr-2 w-4 h-4 sm:w-6 sm:h-6 my-auto"></PhoneArrowUpRightIcon>{" "}
        +359892461022
      </Link>
      <Image
        src="https://cdn.pixabay.com/photo/2017/09/23/21/21/label-2780146_1280.png"
        alt="Bar logo"
        classNameRoot="w-14 h-14 hidden sm:block rounded-full border-2 border-pirateGold-500 z-10 mt-10"
        classNameImage=" "
      ></Image>
      <Link
        href="mailto:zhzlatko@gmail.com"
        alt="send email to zhzlatkov@gmail.com"
        className="text-pirateGold-500 justify-end w-1/3 flex mr-0"
      >
        info@abv.bg
        <EnvelopeOpenIcon className="text-pirateGold-100 ml-2 w-4 h-4 sm:w-6 sm:h-6 my-auto"></EnvelopeOpenIcon>
      </Link>
    </nav>
  );
}
