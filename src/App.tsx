import React from "react";
import styles from "./App.scss";
import { Icon } from "./components/index";
function App() {
  const fn = (e: React.MouseEvent) => {
    console.log(e);
    console.log(e.target);
    console.log((e.target as HTMLDivElement).style);
  };
  return (
    <div className={styles.App}>
      <Icon type="wechat" onClick={fn} />
      <Icon type="alipay" />
      <Icon type="left" />
      <Icon type="right" />
    </div>
  );
}

export default App;
