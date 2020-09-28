import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
const endPoint = "http://localhost:9000/";

export const LiveChart = () => {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const socket = socketIOClient(endPoint);
    socket.on("FromAPI", (data) => {
      setResponse(data);
    })
    
    /**Clean up connection */
    return () => socket.disconnect();
  }, []);

  return (
    <p>
      It's <time dateTime={response}>{response}</time>
    </p>
  );
};
