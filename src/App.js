import './App.css';
import { CardList } from './components/list-component/list-component';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {monsters : []};
}


  componentDidMount() {
    fetch("https://aeternum-dev.github.io/dummy-json/")
  .then(response => response.json())
  .then(users => this.setState({monsters : users}))  
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          

          {/*using own component*/}
          this should recieve the whole json
          <CardList data={this.state.monsters}/>


          {/*this.state.monsters.map(monsters => <CardList id = {monsters.id} name = {monsters.name}/>)*/}


          <h2>fetched content</h2>




        </header>
      </div>
    );
  }
}

export default App;
