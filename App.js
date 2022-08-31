import "./styles.css";
import React, { useState } from "react";

const emojiDict = {
  "😊": "Smiling",
  "😳": "Disbelief (Like Whaaat!)",
  "😔": "Sad",
  "🥡": "Takeout box",
  "❤️": "Love (for biryani)",
  "😑": "Annoyance",
  "🤩": "Star-Struck",
  "🏊": "Person Swimming"
};

//Converting Dictionary to array/list
var emojiList = Object.keys(emojiDict);
// console.log(emojiList);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function onChangeHandler(event) {
    var userInput = event.target.value;

    //To cut out extra space or else function won't recognise due to extra space
    var trimmedUserInput = userInput.trim();
    console.log("User Input: " + trimmedUserInput);

    //Seting the meaning so it gets rendered in the View
    var meaning = emojiDict[trimmedUserInput];
    if (meaning === undefined) {
      meaning = "We don't have this emoji with us. Let us now what it means";
      setMeaning("");
    }

    setMeaning(meaning);
  }

  function emojiOnClickHandler(emoji) {
    meaning = emojiDict[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>The Emojipretor</h1>
      <input
        placeholder="Please enter your emoji here"
        onChange={onChangeHandler}
      ></input>

      <div className="emoji-div">
        <h2>Emojis we are familiar with</h2>
        {emojiList.map((emojiItem) => {
          return (
            <span
              key={emojiItem}
              onClick={() => emojiOnClickHandler(emojiItem)}
            >
              {emojiItem}
            </span>
          );
        })}
      </div>

      <div className="meaning-div">
        <b>{meaning}</b>
      </div>
    </div>
  );
}
