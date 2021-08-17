import { useEffect } from "react";
import { io } from "socket.io-client";

function Socket() {
  useEffect(() => {
    const socket = io(`http://localhost:3334`);

    socket.on(`STATUS_CHANGED`, (message) => {
      console.log(`xpto ->`, message);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  return <div>SOCKET</div>;
}

export default Socket;
