import React from "react";
import styles from "./App.less";
import { Icon } from "./components/index";
function App() {
  return (
    <div className={styles.App}>
      <Icon type="wechat" />
      <Icon type="alipay" />
      <Icon type="left" />
      <Icon type="right" />
    </div>
  );
}

export default App;
