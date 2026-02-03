"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { io, Socket } from "socket.io-client";

interface SocketContextType {
  socket: Socket | null;
  isConnected: boolean;
  transport: string;
}

const SocketContext = createContext<SocketContextType>({
  socket: null,
  isConnected: false,
  transport: "N/A",
});

export function useSocket() {
  return useContext(SocketContext);
}

interface SocketProviderProps {
  children: ReactNode;
}

export function SocketProvider({ children }: SocketProviderProps) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");

  useEffect(() => {
    const isProduction = process.env.NODE_ENV === "production";
    const socketClient = io(
      isProduction ? process.env.PROD_API_URL : "http://localhost:4001",
      {
        transports: ["websocket", "polling"],
      },
    );
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSocket(socketClient);

    function onConnect() {
      setIsConnected(true);
      setTransport(socketClient.io.engine.transport.name);

      socketClient.io.engine.on("upgrade", (t) => {
        setTransport(t.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    socketClient.on("connect", onConnect);
    socketClient.on("disconnect", onDisconnect);

    return () => {
      socketClient.off("connect", onConnect);
      socketClient.off("disconnect", onDisconnect);
      socketClient.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket, isConnected, transport }}>
      {children}
    </SocketContext.Provider>
  );
}
