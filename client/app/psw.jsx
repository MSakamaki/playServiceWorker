import React from 'react';

var CommentBox = React.createClass({
  render: function() {
    return (
      <div>
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
);