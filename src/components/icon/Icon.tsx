import React, { FC } from "react";
import "src/assets/icons/wechat.svg";

interface IconProps {
  type: string;
}
const Icon: FC<IconProps> = (props) => {
  return (
    <span>
      <svg>
        <use xlinkHref={`#wechat`} />
      </svg>
    </span>
  );
};

export default Icon;
