import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Friends from "../components/Friends";
import * as FriendsAction from "../actions/FriendsAction";

@connect(state => ({ //decorator
  friends: state.friends
}))

export default class FetchFriendsApp extends Component {
  render() {
    const { friends, dispatch } = this.props;
    //The only use case for bindActionCreators is when you want to pass some action creators down to a component that isn't aware of Redux, and you don't want to pass dispatch or the Redux store to it.
    return(
      <Friends friends={friends} 
                {...bindActionCreators(FriendsAction, dispatch)} />

    );
  }
}