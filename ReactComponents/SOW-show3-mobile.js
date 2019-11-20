"use strict";

const e3m = React.createElement;

class SOWshow3mobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shown: false };
  }

  render() {
    if (this.state.shown) {
      return e3m(
        "a",
        {
          class: "text-dark SOW-reveal",
          onClick: () => this.setState({ shown: !this.state.shown })
        },
        "Show Less"
      );
    }

    return e3m(
      "a",
      {
        class: "text-dark SOW-reveal",
        onClick: () => this.setState({ shown: !this.state.shown })
      },
      "Show More"
    );
  }
}

const domContainer3mobile = document.querySelector(
  "#scopeOWRE_container-3-mobile"
);
ReactDOM.render(e3m(SOWshow3mobile), domContainer3mobile);
