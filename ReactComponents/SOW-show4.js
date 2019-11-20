"use strict";

const e4 = React.createElement;

class SOWshow4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shown: false };
  }

  render() {
    if (this.state.shown) {
      return e4(
        "a",
        {
          class: "text-dark SOW-reveal",
          onClick: () => this.setState({ shown: !this.state.shown })
        },
        "Show Less"
      );
    }

    return e4(
      "a",
      {
        class: "text-dark SOW-reveal",
        id: "noover",
        onClick: () => this.setState({ shown: !this.state.shown })
      },
      "Show More"
    );
  }
}

const domContainer4 = document.querySelector("#scopeOWRE_container-4");
ReactDOM.render(e4(SOWshow4), domContainer4);
