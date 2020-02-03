import React, {Component} from 'react';
import './App.css';
import { Cardlist } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters : [],
      searchField: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }
  //We wait for the component to mount before fetching those user properties and feeding it into our state

  handleChange = (e)=> this.setState({ searchField: e.target.value});

  render(){
    //Pull off the monsters value and the search field value from the state using **destructuring**
    const {monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return(
     <div className="App">
       <h1>Monsters Rolodex</h1>
      <SearchBox 
        placeholder='Search monsters' 
        handleChange= {this.handleChange}
      />
       <Cardlist monsters={filteredMonster}></Cardlist>
    </div>
    );
  }
}

export default App;
