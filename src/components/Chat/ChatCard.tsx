import Link from "next/link";
import Image from "next/image";
import { Chat } from "@/types/chat";

const chatData: Chat[] = [
  {
    avatar: "/images/user/user-01.png",
    name: "Hope",
    text: "2024-05-12",
    time: 12,
    textCount: 3,
    dot: 3,
  },
  {
    avatar: "/images/user/user-02.png",
    name: "Burgers",
    text: "2024-05-12",
    time: 12,
    textCount: 0,
    dot: 1,
  },
  {
    avatar: "/images/user/user-04.png",
    name: "Cars",
    text: "2024-05-12",
    time: 32,
    textCount: 0,
    dot: 3,
  },
  
];

const ChatCard = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
     
      <div className="flex justify-between items-center p-2">
      <h4 className="text-xl font-semibold text-black dark:text-white">Scheduled Ads</h4>
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
        <span className="text-sm font-medium text-white">6</span>
      </div>
    </div>

      <div>
        {chatData.map((chat, key) => (
          <Link
            href="/"
            className="flex items-center gap-5 px-7.5 py-3 hover:bg-gray-3 dark:hover:bg-meta-4"
            key={key}
          >
            {/* <div className="relative h-14 w-14 rounded-full">
              <Image
                width={56}
                height={56}
                src={chat.avatar}
                alt="User"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
              <span
                className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white ${
                  chat.dot === 6 ? "bg-meta-6" : `bg-meta-${chat.dot}`
                } `}
              ></span>
            </div> */}

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-medium text-black dark:text-white">
                  {chat.name}
                </h5>
               
              </div>
              <>
              {chat.text}

              </>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatCard;
