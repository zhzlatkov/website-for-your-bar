import Image from "./Image";
import Link from "next/link";
import {
  EnvelopeOpenIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/20/solid";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-gradient-to-r from-yellow-400 via-white to-yellow-400 h-12 items-center">
      <Link
        href="mailto:zhzlatko@gmail.com"
        alt="send email to zhzlatkov@gmail.com"
        className="ml-4"
      >
        <EnvelopeOpenIcon className="text-white w-8 h-8 mx-auto"></EnvelopeOpenIcon>
      </Link>
      <Image
        src="https://cdn.pixabay.com/photo/2017/09/23/21/21/label-2780146_1280.png"
        alt="Bar logo"
        classNameRoot="w-20 h-20 rounded-full border-8 border-white z-10 mt-10"
        classNameImage=" "
      ></Image>
      <Link
        href="tel:+359892461022"
        alt="call to telephone number :+359892461022"
        className="mr-4"
      >
        <PhoneArrowUpRightIcon className="text-white w-8 h-8 mx-auto"></PhoneArrowUpRightIcon>
      </Link>
    </nav>
  );
}
