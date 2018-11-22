import React from "react";
import { string, node } from "prop-types";
import Icon from "../Icon";

import { Section, Title, IconContainer, Header } from "./styles";

function Card({
  title,
  icon,
  iconColor,
  titleColor,
  iconContainerBg,
  children,
  ...props
}) {
  return (
    <Section data-test={props["data-test"]} hasChildren={!!children}>
      {(icon || title) && (
        <Header>
          {icon && (
            <IconContainer iconContainerBg={iconContainerBg}>
              <Icon type={icon} color={iconColor} />
            </IconContainer>
          )}
          {title && <Title titleColor={titleColor}>{title}</Title>}
        </Header>
      )}

      {children}
    </Section>
  );
}

Card.defaultProps = {
  title: null,
  icon: null,
  iconColor: null,
  titleColor: null,
  children: null
};

Card.propTypes = {
  title: string,
  icon: string,
  iconColor: string,
  titleColor: string,
  children: node
};

export default Card;
