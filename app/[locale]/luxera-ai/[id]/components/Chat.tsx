"use client";

import { useState } from "react";
import { createNewChat, SendNextMessage } from "../../services/chatbot.client.";
import { MessageType } from "@/app/types/ai";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store/store";
import { addNewChat } from "@/app/store/features/luxeraAISlice";
import { useRouter } from "next/navigation";
import ChatInput from "./ChatInput";
import { v4 as uuidV4 } from "uuid";
import MessageCard from "./MessageCard";

interface ChatProps {
  messagesData: MessageType[];
  chatId: string;
}

const Chat = ({ messagesData, chatId }: ChatProps) => {
  const [messages, setMessages] = useState<MessageType[]>(messagesData);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [typingMessageId, setTypingMessageId] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleCreateNewChat = async () => {
    try {
      const res = await createNewChat(input);
      if (res?.status === 200) {
        const newMessage: MessageType = {
          id: res.data.data.conversation_id,
          content: res.data.data.message,
          role: "assistant",
          product_cards: res.data.data.product_cards,
        };
        router.push(`/luxera-ai/${res.data.data.conversation_id}`);
        setMessages([...messages, newMessage]);
        setTypingMessageId(newMessage.id); // Mark this message for typewriter effect

        dispatch(
          addNewChat({
            id: res.data.data.conversation_id,
            title: res.data.data.title,
          }),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSendNextMessage = async () => {
    try {
      const res = await SendNextMessage(input, chatId);
      console.log("res content", res?.data.data.content);
      if (res?.status === 200) {
        const newMessage: MessageType = {
          id: res.data.data.conversation_id,
          content: res.data.data.message,
          role: "assistant",
          product_cards: res.data.data.product_cards,
        };

        setMessages([...messages, newMessage]);
        setTypingMessageId(newMessage.id); // Mark this message for typewriter effect

        return res;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);

    const userMessage: MessageType = {
      role: "user",
      content: input,
      id: uuidV4(),
    };

    setMessages([...messages, userMessage]);

    setInput("");

    try {
      if (!messages.length) {
        await handleCreateNewChat();
      } else {
        await handleSendNextMessage();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col">
      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "assistant" ? "justify-start" : "justify-end"
            }`}
          >
            <MessageCard
              content={message.content}
              products={message?.product_cards}
              isTyping={
                message.role === "assistant" && message.id === typingMessageId
              }
            />
          </div>
        ))}
      </div>

      <div className="mt-4">
        <ChatInput
          input={input}
          loading={loading}
          handleSendMessage={handleSendMessage}
          setInput={setInput}
        />
      </div>
    </div>
  );
};

export default Chat;
