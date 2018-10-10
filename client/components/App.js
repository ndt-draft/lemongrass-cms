import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route } from 'react-router-dom'
import Home from './Home'
import DrinkType from './DrinkType'
import DrinkTemperature from './DrinkTemperature'

const App = props => (
  <Provider store={props.store}>
    <ConnectedRouter history={props.history}>
      <div>
        {props.routes.map((route, i) =>
          route.routes.map((childRoute, j) => (
            <route.layout key={childRoute.path} {...childRoute} />
          ))
        )}
      </div>
    </ConnectedRouter>
  </Provider>
)

export default App