import React, { Component } from "react";
import { string, shape, func, bool, oneOfType, object } from "prop-types";

import Icon from "../Icon";
import { Wrapper, Text, IconWrapper } from "./styles.js";
import { white } from "../Common/styles/settings";

class Toastr extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 500);
  }

  componentWillMount() {
    this.historyListenner = this.props.history.listen(this.props.closeToastr);
  }

  componentDidMount() {
    this.toggle();
  }

  componentWillUnmount() {
    this.historyListenner();
  }

  render() {
    const { toastrSettings, closeToastr } = this.props;
    const { mounted } = this.state;

    return (
      <Wrapper
        data-test="Toastr"
        opened={mounted && toastrSettings}
        onClick={closeToastr}
      >
        <Text>{toastrSettings && toastrSettings.text}</Text>
        <IconWrapper data-test="ToastrClose">
          <Icon type="ToastrClose" color={white} />
        </IconWrapper>
      </Wrapper>
    );
  }
}

Toastr.defaultProps = {
  toastrSettings: false
};

Toastr.propTypes = {
  toastrSettings: oneOfType([
    bool,
    shape({
      text: string
    }).isRequired
  ]),
  history: shape({
    location: object,
    listen: func
  }).isRequired,
  closeToastr: func.isRequired
};

export default Toastr;
