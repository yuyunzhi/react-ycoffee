import React, { FC } from "react";
import "src/assets/icons/wechat.svg";
import "./exportAllIcons"; // 动态引入文件
import styles from "./icon.scss";

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  type: string;
}

const Icon: FC<IconProps> = (props) => {
  const { type, ...rest } = props;
  return (
    <span className={styles["yCoffee-icon"]} {...rest}>
      <svg>
        <use xlinkHref={`#${type}`} />
      </svg>
    </span>
  );
};

export default Icon;
