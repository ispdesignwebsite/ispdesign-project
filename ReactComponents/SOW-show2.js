"use strict";

const e2 = React.createElement;

class SOWshow2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shown: false };
  }

  render() {
    if (this.state.shown) {
      return e2(
        "a",
        {
          class: "text-dark SOW-reveal",
          id: "noover",
          onClick: () => this.setState({ shown: !this.state.shown })
        },
        "Show Less"
      );
    }

    return e2(
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

const domContainer2 = document.querySelector("#scopeOWRE_container-2");
ReactDOM.render(e2(SOWshow2), domContainer2);
