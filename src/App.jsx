import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [showFaceFlag, setShowFaceFlag] = useState(true);

  const onClickButton = () => alert();
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickShowFaceFlag = () => {
    setShowFaceFlag(!showFaceFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        showFaceFlag || setShowFaceFlag(true);
      } else {
        showFaceFlag && setShowFaceFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!️</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      {/* <ColorfulMessage color="pink" message="元気です！" /> */}
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
      <br />
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickShowFaceFlag}>顔文字表示</button>
      <p>{num}</p>
      {showFaceFlag && <p>(￣∀￣)</p>}
    </>
  );
};

export default App;
