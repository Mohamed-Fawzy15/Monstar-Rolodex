import "./App.css";

import CardList from "./component/card-list/card-list-component";
import { Component } from "react";
import SearchBox from "./component/search-box/search-box-component";

class App extends Component {
  state = {
    monster: [],
    searchField: "",
  };

  componentDidMount() {
    // it help us to know if the react fetch the data from the website or not
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monster: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monster, searchField } = this.state;
    const filterMonsters = monster.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search For Monster"
          handleChange={this.handleChange}
        />
        <CardList monster={filterMonsters} />
      </div>
    );
  }
}

export default App;
