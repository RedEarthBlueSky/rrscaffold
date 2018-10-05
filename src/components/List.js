import React, { Component } from 'react';
import url from '../config/config';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentWillMount() {
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }


  render() {
    console.log(this.state.data);
    return (
      <div>
        <p>This is the List</p>
      </div>
    );
  }
}

export default List;
