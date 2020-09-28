import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Overview } from "./components/OverviewComponent";
import { LiveChart } from "./components/LiveChart";
import { Error } from "./components/Error";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Overview} exact />
          <Route path="/liveChart" component={LiveChart} />
          <Route component={Error} />
        </Switch>
      </main>
    </div>
  );
}