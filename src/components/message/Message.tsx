import { FC, memo } from "react";

import { messages } from "../../utils/messages";
import { motion } from "framer-motion";

interface MessageProps {
  readonly showMessage: boolean;
  readonly userId: string;
}

const show = {
  height: "100%",
  opacity: 1,
  display: "block",
};

const hide = {
  height: 0,
  opacity: 0,
  
};

const Message: FC<MessageProps> = ({ showMessage, userId }) => {
  const userMessage = messages.find((message) => message.userId === userId);

  return (
    <>
      {userMessage && (
        <motion.div
          className="border-gray-200 overflow-hidden rounded-md flex border"
          animate={showMessage ? show : hide}
        >
          <p className="text-sm text-gray-400 p-3">{userMessage.message}</p>
        </motion.div>
      )}
    </>
  );
};

export default memo(Message);
