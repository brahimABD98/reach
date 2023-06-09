import HomeIcon from "@heroicons/react/24/solid/HomeIcon";
import BellIcon from "@heroicons/react/24/solid/BellIcon";
import DiscoverIcon from "@heroicons/react/24/solid/HashtagIcon";
import MessageIcon from "@heroicons/react/24/solid/ChatBubbleLeftRightIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import Image from "next/image";


export const SideBar = () => {
  return (
    <>
      <nav
        className="h-screen  flex justify-between  border-2 rounded-2xl border-slate-600 flex-col items-start md:w-1/5 overflow-y-auto">
        <ul className="flex flex-col items-start p-2 gap-y-4 ">
          <li className="text-xl font-bold font-mono  rounded-full  p-4">Reach</li>
          <li
            className="flex flex-row items-center  text-xl font-bold font-mono  rounded-full hover:bg-slate-700  p-2">
            <HomeIcon className="h-10 w-10 p-2" />
            <p className="p-2">Home</p>
          </li>
          <li
            className="flex flex-row items-center text-xl font-bold font-mono  rounded-full hover:bg-slate-700  p-2">
            <BellIcon className="h-10 w-10 p-2" />
            <p className="p-2">Notification</p>

          </li>
          <li className="flex flex-row items-center text-xl font-bold font-mono  rounded-full hover:bg-slate-700  p-2">
            <DiscoverIcon className="h-10 w-10 p-2" />
            <p className="p-2">Discover</p>
          </li>

          <li className="flex flex-row items-center text-xl font-bold font-mono  rounded-full hover:bg-slate-700  p-2">
            <MessageIcon className="h-10 w-10 p-2" />
            <p className="p-2">Messages</p>
          </li>

          <li className="flex flex-row items-center text-xl font-bold font-mono  rounded-full hover:bg-slate-700  p-2">
            <UserIcon className="h-10 w-10 p-2" />
            <p className="p-2">Profile</p>
          </li>

        </ul>
        <ol className="self-center  rounded-full  w-full  p-2">
          <li className=" flex flex-row items-center justify-between hover:bg-slate-700 grow rounded-full p-2">
            <Image src="/favicon.ico" alt="" className="rounded-full border-2 border-slate-600 p-2" placeholder="blur"
                   blurDataURL={`data:image/svg+xml;base64)}`} width={56}
                   height={56} />
            <p className="p-2 rounded-full hover:bg-slate-600 text-2xl">. . .</p>
          </li>
        </ol>
      </nav>
    </>
  );
};

