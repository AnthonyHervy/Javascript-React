import React, { Component } from 'react';
import './App.css';
let uuid = require('uuid');
let firebase = require('firebase');

// Firebase Configuration 

var config = {
  apiKey: "AIzaSyAKCfb86CjZf7m4QYZwnJ_upR7sNZ5z_so",
  authDomain: "formulaire-simple.firebaseapp.com",
  databaseURL: "https://formulaire-simple.firebaseio.com",
  projectId: "formulaire-simple",
  storageBucket: "formulaire-simple.appspot.com",
  messagingSenderId: "607113493861"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid.v1(),
      name: '',
      answers: {
        q1: '',
        q2: '',
        q3: ''
      },
      submitted: false
    }
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
  }

  handleNameSubmit(event){
    let name = this.refs.name.value;
    //debug : asynchrone : il faut une fonction en callback pour recuperer la valeur
    this.setState({name:name}, function(){
      console.log(this.state);
    })
    event.preventDefault();
  }

  handleQuestionChange(event){
    let answers = this.state.answers;
    if(event.target.name === 'q1'){
      answers.q1 = event.target.value;
    } else if (event.target.name === 'q2'){
      answers.q2 = event.target.value;
    } else if (event.target.name === 'q3'){
      answers.q3 = event.target.value;
    }
    this.setState({answers:answers},function(){
      //console.log(this.state);
  });
  }

  handleQuestionSubmit(event){
    firebase.database().ref('formulaire'+this.state.id).set({
      name : this.state.name,
      answers:this.state.answers
    })
      this.setState({submitted:true},function(){});
      event.preventDefault();
  }

  render() {
    var user;
    var questions;
    if (this.state.name && this.state.submitted === false) {
      user = <h2>Bonjour {this.state.name}</h2>
      questions = <span>
        <h3>Voici quelques questions : </h3>
        <form onSubmit={this.handleQuestionSubmit.bind(this)}>
          <div>
            <label>Question 1 : Quel est votre système d'exploitation préféré ?</label><br />
            <input type="radio" name="q1" value="Windows" onChange={this.handleQuestionChange} />Windows<br />
            <input type="radio" name="q1" value="Linux" onChange={this.handleQuestionChange} />Linux<br />
            <input type="radio" name="q1" value="Mac OS" onChange={this.handleQuestionChange} />Mac OS<br />
            <input type="radio" name="q1" value="Autre" onChange={this.handleQuestionChange}/>Autre<br />
          </div>
          <div>
            <label>Question 2 : Quel est votre constructeur préféré ?</label><br />
            <input type="radio" name="q2" value="Microsoft" onChange={this.handleQuestionChange} />Microsoft<br />
            <input type="radio" name="q2" value="Sony" onChange={this.handleQuestionChange} />Sony<br />
            <input type="radio" name="q2" value="Samsung" onChange={this.handleQuestionChange} />Samsung<br />
            <input type="radio" name="q2" value="Apple" onChange={this.handleQuestionChange}/>Apple<br />
            <input type="radio" name="q2" value="Xiaomi" onChange={this.handleQuestionChange}/>Xiaomi<br />
            <input type="radio" name="q2" value="Autre" onChange={this.handleQuestionChange}/>Autre<br />
          </div>
          <div>
            <label>Question 3 : votre langage de programmation favori ?</label><br />
            <input type="radio" name="q3" value="PHP/SQL" onChange={this.handleQuestionChange} />PHP/SQL<br />
            <input type="radio" name="q3" value="Javascript" onChange={this.handleQuestionChange} />Javascript<br />
            <input type="radio" name="q3" value="Ruby" onChange={this.handleQuestionChange} />Ruby<br />
            <input type="radio" name="q3" value="Python" onChange={this.handleQuestionChange}/>Python<br />
            <input type="radio" name="q3" value="Java" onChange={this.handleQuestionChange}/>Java<br />
            <input type="radio" name="q3" value="C#" onChange={this.handleQuestionChange}/>C#<br />
            <input type="radio" name="q3" value="Autre" onChange={this.handleQuestionChange}/>Autre<br />
          </div>
          <input type="submit" value="Envoyer le formulaire" />
        </form>
      </span>
    }
    else if (!this.state.name && this.state.submitted === false) {
      user = <span>
             <h2>Entrez votre nom pour commencer le formulaire</h2>
              <form onSubmit={this.handleNameSubmit.bind(this)}>
               <input type="text" placeholder="Votre nom:" ref="name" />
              </form>
             </span>;
      questions = '';
    } else if (this.state.submitted === true) {
      user = <h2>Vos réponses ont bien été enregistrées. Merci de votre participation !</h2>
    }
    return (
      <div className="App">
        <header className="App-header text-center">
          <h2>Formulaire Firebase</h2>
        </header>
        <div className="text-center">
          {user}
        </div>
        <div className="container">
        {questions}
        </div>
      </div>
    );
  }
}

export default App;
