import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080'); // Adjust with your WebSocket server address

    ws.onopen = () => {
      console.log('WebSocket connection opened');
    };

    ws.onmessage = (event) => {
      const receivedMessage = event.data;
      setMessage(receivedMessage);
    };

    ws.onerror = (error) => {
      console.log('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Cleanup on component unmount
    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <h1>WebSocket Demo</h1>
      <p>Message from server: {message}</p>
    </div>
  );
};

export default App;
