import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import html2canvas from "html2canvas";
import "./App.css";

function App() {
  const printRef = useRef();
  const [title, setTitle] = useState("Pursuit of Intelligence II");
  const [message, setMessage] = useState("Help me do my homework");
  const [reward, setReward] = useState("Bubble Tea of your choice");
  const [deadline, setDeadline] = useState("2 days from now");

  function changeMessage(e) {
    const text = e.target.value;
    setMessage(text);
  }

  function changeTitle(e) {
    const text = e.target.value;
    setTitle(text);
  }
  function changeReward(e) {
    const text = e.target.value;
    setReward(text);
  }
  function changeDeadline(e) {
    const text = e.target.value;
    setDeadline(text);
  }

  const downloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };
  return (
    <>
      <div>
        <h1> valu's quest generator</h1>
        <h3>create fun quests for your friends to complete</h3>
      </div>
      <div className="content">
        <div className="imageContainer">
          {/* <h2>sample quest</h2> */}
          <div className="Quest" ref={printRef}>
            <p className="title">{title}</p>
            {/* <hr class="solid"></hr> */}
            <p className="text">{message}</p>
            <p className="title">Rewards:</p>
            <p className="text">{reward}</p>

            {/* <p className="title">Deadline:</p>
            <p className="text">{deadline}</p> */}
          </div>
          <button onClick={downloadImage}>Download PNG</button>
        </div>
        <form className="inputContainer">
          <label>Enter Title of your Request here</label>
          <input
            className="messageBox"
            size="50"
            onChange={changeTitle}
            maxLength="100"
            placeholder="Pursuit of Intelligence II"
            type="text"
            id="title"
            name="title"
            required
          ></input>
          <label>Enter your Request here</label>
          <input
            className="messageBox"
            size="50"
            onChange={changeMessage}
            maxLength="100"
            placeholder="e.g. Help me do my homework"
            type="text"
            id="message"
            name="message"
            required
          ></input>
          <label>Enter your Reward here</label>
          <input
            className="messageBox"
            size="50"
            maxLength="100"
            onChange={changeReward}
            placeholder="e.g. Bubble Tea of your choice"
            type="text"
            id="reward"
            name="reward"
            required
          ></input>
          <label>Enter your Deadline here</label>
          {/* <input
            className="messageBox"
            size="50"
            maxLength="30"
            onChange={changeDeadline}
            placeholder="e.g. 2 days from now"
            type="text"
            id="deadline"
            name="deadline"
          ></input> */}
        </form>
      </div>

      <div></div>
    </>
  );
}

export default App;
