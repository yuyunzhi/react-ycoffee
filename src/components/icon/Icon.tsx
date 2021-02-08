import React, { FC } from "react";
import wechat from "src/assets/icons/wechat.svg";

console.log("wechat", wechat);

interface IconProps {
  name: string;
}
const Icon: FC<IconProps> = (props) => {
  return (
    <span>
      <svg>
        <use xlinkHref="#wehcat" />
      </svg>
    </span>
  );
};

export default Icon;
