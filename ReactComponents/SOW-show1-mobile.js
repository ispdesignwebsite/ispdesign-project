"use strict";

const e1m = React.createElement;

class SOWshow1mobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shown: false };
  }

  render() {
    if (this.state.shown) {
      return e1m(
        "a",
        {
          class: "text-dark SOW-reveal",
          onClick: () => this.setState({ shown: !this.state.shown })
        },
        "Show Less"
      );
    }

    return e1m(
      "a",
      {
        class: "text-dark SOW-reveal",
        onClick: () => this.setState({ shown: !this.state.shown })
      },
      "Show More"
    );
  }
}

const domContainer1mobile = document.querySelector(
  "#scopeOWRE_container-1-mobile"
);
ReactDOM.render(e1m(SOWshow1mobile), domContainer1mobile);
