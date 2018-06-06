import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

import Search from "./Components/searchByName/SearchByName";
import Results from "./Components/results/Results";
import Entrance from "./Components/entrance/Entrance";
import CurrentCard from "./Components/currentCard/CurrentCard";
import DeckBuilder from "./Components/deckBuilder/DeckBuilder";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: "*",
      userId: 1,//hardCoded
      loading: false,
      fromDb:[]
    };
    this.getCardsfromApi = this.getCardsfromApi.bind(this);
    this.loginRequest = this.loginRequest.bind(this);
    this.liftCurrentCard = this.liftCurrentCard.bind(this);
    this.postCardoDb = this.postCardToDb.bind(this);
    this.getDeckInfo = this.getDeckInfo.bind(this);
  }
  getDeckInfo() {
    this.setState({loading: true});
    axios("/cards")
      .then(resp => {
        console.log("SUCCESSFUL getDeckInfo", resp.data);
        let cards = resp.data;
        // console.log(this.state.usersCards)

        this.setState({
          fromDb: cards,
          loading: false
        });

        // console.log(this.state.usersCards)
        // this.axiosMap();
      })
      .catch(err => {
         this.setState({
          loading: false
        });
        console.log("err at getDeckInfo", err);
      });
  }
  

  postCardToDb(info) {
    axios({
      url: "/cards",
      method: "Post",
      data: info,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(resp => {
        console.log("POST TO DB WORKED", resp);
      })
      .catch(err => {
        console.log("ERROR at postToDb", err);
      });
  }

  getCardsfromApi(userQuery) {
    this.setState({
      loading: true
    });
    axios(`https://api.magicthegathering.io/v1/cards?name=${userQuery}`)
      .then(resp => {
        let cards = resp.data.cards;
        console.log("RESPONCE SUCCESSFUL", cards);
        this.setState({
          searchResult: cards,
          loading: false
        });
      })
      .catch(err => {
        console.log("ERROR at getCardsfromApi", err);
        this.setState({
          loading: false
        });
      });
  }
  loginRequest(userInfo) {
    axios("/login", {
      params: userInfo
    })
      .then(resp => {
        console.log("LOGIN SUCCESSFUL", resp);
      })
      .catch(err => {
        console.log("LOGIN UNSUCCESSFUL", err);
      });
  }
  liftCurrentCard(currentCard) {
    this.setState({
      currentCard: currentCard
    });
  }

  componentDidMount() {
    this.getDeckInfo();
  }
  render() {
    const linkStyle = { 
      textDecoration: 'none',
      color: 'inherit' };

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/root"
              render={props => {
                <div>
                <Entrance handleLogin={this.loginRequest} />
                </div>
              }}
            />
            <Route
              exact
              path="/"
              render={props => {
                return (
                  <div className = "search">
                  <h1>Welcome to the Magic the gathering deck constructor</h1>
                    <Search getCards={this.getCardsfromApi} />
                    <Link  style={linkStyle} to="builder"><h1 className="hover">Manage Deck</h1> </Link>
                    {this.state.searchResult === "*" ? null : (
                      <Results
                        cardlist={this.state.searchResult}
                        handleLiftInfo={this.liftCurrentCard}
                      />
                    )}
                  </div>
                );
              }}
            />
            <Route
              exact
              path="/cardInfo"
              render={props => {
                return (
                  <CurrentCard
                    linkStyle={linkStyle}
                    userId={this.state.userId}
                    savesData={this.postCardToDb}
                    currentCard={this.state.currentCard}
                  />
                );
              }}
            />
            <Route
              exact
              path="/builder"
              render={props => {
                return <DeckBuilder
                linkStyle = {linkStyle}
                getDeckInfo ={this.getDeckInfo} 
                cards = {this.state.fromDb}
                loading={this.state.loading} />;
              }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
