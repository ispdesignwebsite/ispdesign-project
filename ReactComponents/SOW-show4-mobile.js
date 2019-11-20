"use strict";

const e4m = React.createElement;

class SOWshow4mobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shown: false };
  }

  render() {
    if (this.state.shown) {
      return e4m(
        "a",
        {
          class: "text-dark SOW-reveal",
          onClick: () => this.setState({ shown: !this.state.shown })
        },
        "Show Less"
      );
    }

    return e4m(
      "a",
      {
        class: "text-dark SOW-reveal",
        onClick: () => this.setState({ shown: !this.state.shown })
      },
      "Show More"
    );
  }
}

const domContainer4mobile = document.querySelector(
  "#scopeOWRE_container-4-mobile"
);
ReactDOM.render(e4m(SOWshow4mobile), domContainer4mobile);
