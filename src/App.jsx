import { useState, useRef } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import html2canvas from "html2canvas";
import scroll1 from "./assets/scroll1.png";
import "./App.css";

function App() {
  const printRef = useRef();
  const [title, setTitle] = useState("Pursuit of Intelligence II");
  const [message, setMessage] = useState(
    "There is a mathematics assignment which requires your immediate assistance. Please ensure passing grade. "
  );
  const [reward, setReward] = useState(
    "Bubble Tea of your choice (toppings not included)"
  );
  const [greeting, setGreeting] = useState("For the brave and the strong,");

  function changeMessage(e) {
    const text = e.target.value;
    setMessage(text);
  }

  function changeGreeting(e) {
    const text = e.target.value;
    setGreeting(text);
  }

  function changeTitle(e) {
    const text = e.target.value;
    setTitle(text);
  }
  function changeReward(e) {
    const text = e.target.value;
    setReward(text);
  }

  const downloadImage = async (event) => {
    event.preventDefault(); // Prevent the default anchor click behavior

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
        <div className="imageContainer" ref={printRef}>
          <div className="Quest">
            <p className="questtitle">{title}</p>
            <p className="name">{greeting}</p>
            <p className="questmessage">{message}</p>
            {/* <p className="wave">~</p> */}
            <p className="rewardtitle">Reward</p>
            <p className="reward">{reward}</p>
            <p className="question"> Do you accept the quest?</p>
          </div>
        </div>
        <form className="inputContainer">
          <label>Title</label>
          <input
            className="messageBox"
            size="50"
            onChange={changeTitle}
            maxLength="30"
            placeholder="e.g. Pursuit of Intelligence II"
            type="text"
            id="title"
            name="title"
            required
          ></input>
          <label>Greeting</label>
          <input
            className="messageBox"
            size="50"
            onChange={changeGreeting}
            maxLength="36"
            placeholder="e.g.For the brave and the strong"
            type="text"
            id="greeting"
            name="greeting"
            required
          ></input>
          <label>Message</label>
          <input
            className="messageBox"
            size="50"
            onChange={changeMessage}
            maxLength="110"
            placeholder="e.g.There is a mathematics assignment..."
            type="text"
            id="message"
            name="message"
            required
          ></input>
          <label>Reward</label>
          <input
            className="messageBox"
            size="50"
            maxLength="54"
            onChange={changeReward}
            placeholder="e.g. Bubble Tea of your choice"
            type="text"
            id="reward"
            name="reward"
            required
          ></input>
          <button onClick={downloadImage}>Download PNG</button>
        </form>
      </div>

      <div></div>
    </>
  );
}

export default App;
