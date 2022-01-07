import axios from "axios";
import { useEffect, useState } from "react";
// import { addMessage } from "../../Que.2/user";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}
function MyComponent() {
  const [messeges, setmesseges] = useState("");
  const [msglist, setlist] = useState("");
  const handlemessegesChange = (e) => {
    setmesseges(e.target.value);
  };
  const addMessage = async () => {
    const url = "http://localhost:5002/read";
    const result = await fetch(url);
    const list = await result.json();
    const newmsg = [...list];
    setlist(newmsg);
  };
  useEffect(() => addMessage(), []);

  return (
    <div>
      <div>
        <h2 className="bg-primary text-light ">
          MyChatApp by Akshay Shinde_008
        </h2>
      </div>
      <div>
        <input type="text" placeholder="lets chat here..." />
        <input type="button" value="send" onClick={addMessage} />
      </div>
      <h3>MESSAGES</h3>
      {/* {msglist.map((item, index) => (
        <div key={index}>{item.messeges}</div>
      ))} */}
    </div>
  );
}
