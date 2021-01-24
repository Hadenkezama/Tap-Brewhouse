import React from 'react'
import Catagories from './components/Catagories'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import LiquorLoader from './API loaders/LiquorLoader'
import CatagorieLiquorLoader from './API loaders/CatagorieLiquorLoader'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Catagories} />
          <Route path="/:drinks" exact component={LiquorLoader} />
          <Route
            path="/:drinks/catagorie/:catagorie"
            exact
            component={CatagorieLiquorLoader}
          />
        </Switch>
        <Sidebar />
        <Footer />
      </div>
    </Router>
  )
}

export default App
