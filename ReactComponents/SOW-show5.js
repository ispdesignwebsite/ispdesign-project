"use strict";

const e5 = React.createElement;

class SOWshow5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shown: false };
  }

  render() {
    if (this.state.shown) {
      return e5(
        "a",
        {
          class: "text-dark SOW-reveal",
          onClick: () => this.setState({ shown: !this.state.shown })
        },
        "Show Less"
      );
    }

    return e5(
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

const domContainer5 = document.querySelector("#scopeOWRE_container-5");
ReactDOM.render(e5(SOWshow5), domContainer5);
