import { Component } from 'react';

import Header from './components/Header.js';
import Tea from './components/Tea.js';
import AddTeaForm from './components/AddTeaForm.js';
import './App.css';

import initLocalStorage from 'utils/data.js'

initLocalStorage();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teas: [],
      route: "teaList",
    };
  }

  updateState() {
    let teas = JSON.parse(localStorage.getItem("tea_index")).map(
      (tea_id) => <Tea key={"tea-" + tea_id} tea_id={tea_id} />
    )

    this.setState({teas: teas})
  }

  togglePage(route, truc) {
    if (route === undefined) {
      this.setState({route: "teaList"})
    } else {
      this.setState({route: route})
    }
  }

  componentDidMount() {
    this.updateState()
  }

  render() {
    return (
      <div className="content">
        <Header route={this.state.route} routeFct={this.togglePage.bind(this)}/>

        <div key="teaList" id="teaList" style={{display: this.state.route === "teaList" ? "inherit" : "none"}}>
          { this.state.teas }
        </div>
        <div key="addTea" className="container" id="addTea" style={{display: this.state.route === "addTea" ? "inherit" : "none"}}>
          <AddTeaForm />
        </div>
      </div>
    );
  }
}

export default App;
