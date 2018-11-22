import React from "react";
import { bool, node, string, func } from "prop-types";
import { ButtonTag } from "../Common/styles/objects";

function Button({
  children,
  onClick,
  isCallToAction,
  isWarning,
  type,
  disabled,
  width,
  className,
  small,
  dataTest,
  opacity
}) {
  return (
    <ButtonTag
      className={className}
      width={width}
      type={type}
      disabled={disabled}
      isCallToAction={isCallToAction}
      isWarning={isWarning}
      data-test={dataTest ? dataTest : Button.displayName}
      onClick={onClick}
      small={small}
      opacity={opacity}
    >
      {children}
    </ButtonTag>
  );
}

Button.displayName = "Button";

Button.defaultProps = {
  isCallToAction: null,
  isWarning: null,
  type: "button",
  disabled: false,
  width: null,
  onClick: null,
  className: null,
  small: false
};

Button.propTypes = {
  children: node.isRequired, // eslint-disable-line
  isCallToAction: bool,
  isWarning: bool,
  disabled: bool,
  type: string,
  width: string,
  onClick: func,
  className: string,
  small: bool
};

export default Button;
