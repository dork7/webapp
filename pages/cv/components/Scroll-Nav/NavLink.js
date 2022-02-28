import * as React from "react";

var Link = React.createClass({
  render: function () {
    return <a {...this.props}>{this.props.children}</a>;
  },
});

module.exports = ScrollLink(Link);
