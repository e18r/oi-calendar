import React, { Component } from "react";
import "./App.css";
import { AppHeader, AppFooter, AppMenu } from "./AppHeaderAndFooter";

class App extends Component {
  render() {
    const { views } = this.props;
    const { EventCalendar, UserProfile } = views;
    return (
      <div className="App">
        <header className="App-header">
          <AppHeader>
            <UserProfile />
          </AppHeader>
          <AppMenu />
        </header>
        <EventCalendar />
        <footer>
          <AppFooter />
        </footer>
      </div>
    );
  }
}

export default App;