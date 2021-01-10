import React from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    };
    // bindings here
    this.getFilms = this.getFilms.bind(this);
  }
  componentDidMount() {
    this.getFilms();
  }

  getFilms() {
    axios.get('/weebs')
    .then(res => {
      const {data} = res;
      this.setState({films:data});
    })
    .catch(err=>console.log(err));
  }

  render() {
    return (
      <div>
        < Header />
        < List films={this.state.films}/>
      </div>
    )
  }

}

export default App