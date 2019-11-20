"use strict";

const e2m = React.createElement;

class SOWshow2mobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shown: false };
  }

  render() {
    if (this.state.shown) {
      return e2m(
        "a",
        {
          class: "text-dark SOW-reveal",
          onClick: () => this.setState({ shown: !this.state.shown })
        },
        "Show Less"
      );
    }

    return e2m(
      "a",
      {
        class: "text-dark SOW-reveal",
        onClick: () => this.setState({ shown: !this.state.shown })
      },
      "Show More"
    );
  }
}

const domContainer2mobile = document.querySelector(
  "#scopeOWRE_container-2-mobile"
);
ReactDOM.render(e2m(SOWshow2mobile), domContainer2mobile);
