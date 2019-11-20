"use strict";

const e3 = React.createElement;

class SOWshow3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shown: false };
  }

  render() {
    if (this.state.shown) {
      return e3(
        "a",
        {
          class: "text-dark SOW-reveal",
          onClick: () => this.setState({ shown: !this.state.shown })
        },
        "Show Less"
      );
    }

    return e3(
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

const domContainer3 = document.querySelector("#scopeOWRE_container-3");
ReactDOM.render(e3(SOWshow3), domContainer3);
