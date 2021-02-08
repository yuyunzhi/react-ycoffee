import React, { FC } from "react";
import "src/assets/icons/wechat.svg";
import "./exportAllIcons"; // 动态引入文件

interface IconProps {
  type: string;
}

const Icon: FC<IconProps> = (props) => {
  return (
    <span>
      <svg>
        <use xlinkHref={`#${props.type}`} />
      </svg>
    </span>
  );
};

export default Icon;
