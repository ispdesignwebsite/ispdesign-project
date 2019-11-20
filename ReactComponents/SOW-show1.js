"use strict";

const e1 = React.createElement;

class SOWshow1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shown: false };
  }

  render() {
    if (this.state.shown) {
      return e1(
        "a",
        {
          class: "text-dark SOW-reveal",
          id: "noover",
          onClick: () => this.setState({ shown: !this.state.shown })
        },
        "Show Less"
      );
    }

    return e1(
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

const domContainer1 = document.querySelector("#scopeOWRE_container-1");
ReactDOM.render(e1(SOWshow1), domContainer1);
