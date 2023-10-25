import Link from "next/link";

export default function Footer({ socialMedias }) {
  return (
    <footer className="mx-auto py-4 sm:w-11/12 max-w-6xl md:flex md:items-center md:justify-between">
      <div className="flex justify-center space-x-6 md:order-2">
        {socialMedias.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className="text-shark-400 hover:text-shark-100"
          >
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden="true" />
          </Link>
        ))}
      </div>
      <div className="mt-4 md:order-1 md:mt-0">
        <p className="text-center text-base leading-5 text-shark-400">
          &copy; 2023{" "}
          <Link href="https://github.com/zhzlatkov">Zlatko Zlatkov</Link>, All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
