//  Pass data into ListItems
import React, { Component } from 'react';
import axios from 'axios';
import Config from '../config/config';
import { Item } from './common';
//  pad the code to make it line by line with Native MainApp

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: null,
    };
  }

  componentWillMount() {
    axios.get(Config.MusicAlbumsURL)
      .then(response => this.setState({ listItems: response.data }));
  }

  renderListItems() {
    if(this.state.listItems !== null) // finds an error first render
      return this.state.listItems.map(
        listItem =>
          <Item key={listItem.title} listItem={listItem}/>
      );
  }

  render() {
    return (
      <div>
        {this.renderListItems()}
      </div>
    );
  }
}

export default List;
