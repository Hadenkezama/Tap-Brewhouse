import React from 'react'
import Catagories from './components/Catagories'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import LiquorLoader from './API loaders/LiquorLoader'
import CatagorieLiquorLoader from './API loaders/CatagorieLiquorLoader'
import CatagorieWineLoader from './API loaders/CatagorieWineLoader'

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
          <Route
            path="/wines/catagorie/wine_colour/:wine_colour"
            exact
            component={CatagorieWineLoader}
          />
          <Route
            path="/wines/catagorie/wine_region/:wine_region"
            exact
            component={CatagorieWineLoader}
          />
          <Route
            path="/wines/catagorie/wine_colour/:wine_colour/wine_region/:wine_region"
            exact
            component={CatagorieWineLoader}
          />
        </Switch>
        <Sidebar />
        <Footer />
      </div>
    </Router>
  )
}

export default App
