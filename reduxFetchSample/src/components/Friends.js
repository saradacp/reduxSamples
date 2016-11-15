import React, { Component, PropTypes } from "react";
export default class Friends extends Component {
  static propTypes = {
    getFriends: PropTypes.func.isRequired,
    friends: PropTypes.array.isRequired
  };
  render() {
    const { getFriends, friends: {friends} } = this.props;
    var friendsList = friends && friends.map((name) => {
                        return <li>{name}</li>;
                      })
    return (
      <div>
        <ul>{friendsList}</ul>
        <button onClick={getFriends}> Fetch my friends </button>
      </div>
    );
  }
}