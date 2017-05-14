import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import './css/SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: ''
        };
    }

    render() {
        return (
          <div>
            <div className='container-searchBox'>
              <input 
                placeholder='Search...' 
                className='input-searchBox' 
                type='text' 
                value={this.state.textInput} 
                onChange={(event) => this.setState({ textInput: event.target.value })} 
              />
              <button className='button-searchBox' onClick={() => browserHistory.push(`/${this.state.textInput}`)}>Search</button>
            </div>
            <div>
              {this.props.children}
            </div>
          </div>
        );
    }
}

export default SearchBar;
