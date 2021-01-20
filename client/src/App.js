import React from 'react'
import Catagories from './components/Catagories'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import BeerLoader from './API loaders/BeerLoader'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Catagories} />
          <Route path="/beer" component={BeerLoader} />
        </Switch>
        <Sidebar />
        <Footer />
      </div>
    </Router>
  )
}

export default App
