import React, { Component } from 'react';
import axios from 'axios';

import url from '../config/config';
import ListItem from './ListItem';
//  pad the code to make it line by line with Native MainApp

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: null,
    };
  }

  componentWillMount() {
    axios.get(url)
      .then(response => this.setState({ listItems: response.data }));
  }

  renderListItems() {
    if(this.state.listItems !== null) // finds an error first render
      return this.state.listItems.map(
        listItem =>
          <ListItem key={listItem.title} listItem={listItem}/>
      );
  }

  render() {
    console.log(this.state.listItems);
    return (
      <div>
        {this.renderListItems()}
      </div>
    );
  }
}

export default List;
