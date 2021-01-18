import React, { Component } from 'react'

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/seacrh-box/search-box.component'

import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }

    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) //converting to json format
    // .then(users => console.log(users))
    .then(users => this.setState({monsters: users}))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render(){
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())      
    )

    return(
      <div className="App">
        {/* <input 
          type="search"
          placeholder="Search Monster"
          onChange={ e => this.setState({ searchField: e.target.value })}
          // onChange={e => {
          //   this.setState({
          //     searchField: e.target.value
          //   }, () => console.log(this.state))
          // }}
        /> */}
        <h1>Monster Rollodex</h1>
        <SearchBox  
          placeholder="Search Monsters "
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />        
      </div>
    )
  }
}

export default App;