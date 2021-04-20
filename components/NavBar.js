import requests from '../utils/requests';
import { useRouter } from 'next/router';

function NavBar() {
  const router = useRouter();
  return (
    <nav className="relative mb-5">
      <div className="absolute top-0 left-0 bg-gradient-to-r from-[#06202A] h-10 w-1/12 z-10" />
      <div className="flex px-10 sm:px-20 text-xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title }]) => {
          return (
            <h2
              className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-400"
              key={key}
              onClick={() => router.push(`/?genre=${key}`)}
            >
              {title}
            </h2>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
}

export default NavBar;
