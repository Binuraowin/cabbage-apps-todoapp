import React from 'react';
import "tailwindcss/tailwind.css";
import "./index.css"
import { Todos } from "./Components/Todos"

const App: React.FC = () => {
  return (
      <div className="App h-screen flex justify-center items-center bg-gray-100">
        <Todos />
      </div>
  );
}

export default App;
