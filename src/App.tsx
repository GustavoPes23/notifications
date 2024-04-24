import { useState, useCallback, useEffect } from "react";

import { motion } from "framer-motion";

import { defaultUsers, User } from "./utils/users";
import Notification from "./components/notification/Notification";

const totalNotifications = defaultUsers.reduce((acc, user) => {
  if (!user.viewed) {
    return acc + 1;
  }

  return acc;
}, 0);

function App() {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>(defaultUsers);

  const readAllNotifications = useCallback((): void => {
    const updatedUsers = users.map((user) => {
      return { ...user, viewed: true };
    });

    setUsers(updatedUsers);
  }, [users]);

  const handleInfo = (): void => {
    if (showInfo) {
      return;
    }

    setInterval(() => {
      setShowInfo(!showInfo);
    }, 800);
  };

  useEffect(() => {
    handleInfo();
  }, []);

  return (
    <motion.div
      className="flex h-screen justify-center items-center font-sans"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: {
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      <div className="relative flex flex-col shadow-md bg-clip-border rounded-xl bg-white md:w-[40vw] w-full">
        <div className="grid p-6 gap-3">
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              {!showInfo ? (
                <div role="status" className="max-w-sm animate-pulse">
                  <div className="h-2.5 bg-gray-300 rounded-full w-40 mb-4"></div>
                </div>
              ) : (
                <>
                  <span className="font-bold">Notifications</span>
                  <span className="notification-count text-white rounded-md px-2 font-bold text-sm">
                    {totalNotifications}
                  </span>
                </>
              )}
            </div>
            {!showInfo ? (
              <div role="status" className="max-w-sm animate-pulse">
                <div className="h-2.5 bg-gray-300 rounded-full w-20 mb-4"></div>
              </div>
            ) : (
              <a
                className="text-end text-sm text-gray-400 cursor-pointer hover:underline"
                onClick={readAllNotifications}
              >
                Mark all as read
              </a>
            )}
          </div>
              
          {!showInfo ? (
            [0, 1, 3, 4, 5, 6, 7].map((_, index) => (
              <div
              key={index}
              role="status"
              className="border rounded animate-pulse p-2"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-10 h-10 me-3 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div>
                  <div className="w-60 h-2 bg-gray-200 rounded-full mb-2"></div>
                  <div className="h-2.5 bg-gray-200 rounded-full w-20 "></div>
                </div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
            ))
          ) : (
            <motion.div
              className="flex flex-col gap-2"
              variants={{
                hidden: { opacity: 1, scale: 0 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delayChildren: 0.3,
                    staggerChildren: 0.2,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              {users.map((user) => (
                <Notification
                  key={user.id}
                  {...user}
                  setUsers={setUsers}
                  users={users}
                />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default App;
