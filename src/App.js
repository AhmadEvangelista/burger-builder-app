import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  state = {
    monsters: [],
    searchField: '',
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((error) => console.error(error.message));
  }
  onSearchMonster = (event) => {
    this.setState({ searchField: event.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='Search Monster' search={this.onSearchMonster} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
