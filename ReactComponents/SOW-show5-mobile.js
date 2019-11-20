"use strict";

const e5m = React.createElement;

class SOWshow5mobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shown: false };
  }

  render() {
    if (this.state.shown) {
      return e5m(
        "a",
        {
          class: "text-dark SOW-reveal",
          onClick: () => this.setState({ shown: !this.state.shown })
        },
        "Show Less"
      );
    }

    return e5m(
      "a",
      {
        class: "text-dark SOW-reveal",
        onClick: () => this.setState({ shown: !this.state.shown })
      },
      "Show More"
    );
  }
}

const domContainer5mobile = document.querySelector(
  "#scopeOWRE_container-5-mobile"
);
ReactDOM.render(e5m(SOWshow5mobile), domContainer5mobile);
