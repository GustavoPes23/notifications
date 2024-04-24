import { type FC, memo, useCallback, useState } from "react";

import { motion } from "framer-motion";

import type { User } from "../../utils/users";

import Message from "../message/Message";

interface NotificationProps extends User {
  setUsers: (users: User[]) => void;
  users: User[];
}

const getBgNotification = (isViewed: boolean): string =>
  isViewed ? "bg-white" : "notification-not-viewed";

const Notification: FC<NotificationProps> = ({
  id,
  name,
  avatar,
  action,
  emphasis,
  empashisColor,
  extraImage,
  time,
  viewed,
  setUsers,
  users,
}) => {
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const viewNotification = useCallback(
    (notificationId: string): void => {
      const updatedUsers = users.map((user) => {
        if (user.id === notificationId) {
          return { ...user, viewed: true };
        }

        return user;
      });

      setUsers(updatedUsers);
      setShowMessage(!showMessage);
    },
    [setUsers, users]
  );

  return (
    <motion.div
      className={`${getBgNotification(
        viewed
      )} flex flex-row gap-1 p-3 rounded-md cursor-pointer items-center w-full`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => viewNotification(id)}
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
    >
      <img src={avatar} alt={name} className="w-10 h-10 rounded-full me-2" />
      <div className="flex flex-col gap-1 w-full">
        <div className="flex flex-row gap-1 items-center whitespace-wrap *:flex-shrink-0 w-full text-ellipsis overflow-hidden">
          <span className="font-bold text-sm">{name}</span>
          <span className="text-gray-400">{action}</span>
          {emphasis && (
            <span className={`font-bold ${empashisColor || "text-gray-400"}`}>
              {emphasis}
            </span>
          )}
          {!viewed && <div className="w-2 h-2 bg-red-600 rounded-full"></div>}
        </div>

        <p className="text-sm text-gray-400">{time}</p>
        <Message showMessage={showMessage} userId={id} />
      </div>
      {extraImage && (
        <img
          src={extraImage}
          alt={name}
          className="w-10 h-10 rounded-md mr-auto"
        />
      )}
    </motion.div>
  );
};

export default memo(Notification);
