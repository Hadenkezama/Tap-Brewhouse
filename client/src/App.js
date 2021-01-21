import React from 'react'
import Catagories from './components/Catagories'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import LiquorLoader from './API loaders/LiquorLoader'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Catagories} />
          <Route
            path="/beers"
            render={(props) => <LiquorLoader {...props} drinkType="beers" />}
          />
          <Route
            path="/wines"
            render={(props) => <LiquorLoader {...props} drinkType="wines" />}
          />
          <Route
            path="/liqueurs"
            render={(props) => <LiquorLoader {...props} drinkType="liqueurs" />}
          />
          <Route
            path="/coolers&ciders"
            render={(props) => (
              <LiquorLoader {...props} drinkType="coolers_ciders" />
            )}
          />
          <Route
            path="/spirits"
            render={(props) => <LiquorLoader {...props} drinkType="spirits" />}
          />
          <Route
            path="/other"
            render={(props) => <LiquorLoader {...props} drinkType="other" />}
          />
        </Switch>
        <Sidebar />
        <Footer />
      </div>
    </Router>
  )
}

export default App
