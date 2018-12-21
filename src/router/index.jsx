import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from '@/pages/login/index'
import Main from '@/pages/Main'
import Home from '@/pages/home/index'
import Home2 from '@/pages/home2/index'
import Home22 from '@/pages/home2/index2'
import Home23 from '@/pages/home2/index3'
import Home24 from '@/pages/home2/index4'
import Home3 from '@/pages/home3/index'
import Home32 from '@/pages/home3/index2'
import Home33 from '@/pages/home3/index3'
import Home34 from '@/pages/home3/index4'

class App extends Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Main>
          	<Route path="/home-index" component={Home}/>
            <Route path="/home2-index" component={Home2}/>
            <Route path="/home2-index2" component={Home22}/>
            <Route path="/home2-index3" component={Home23}/>
          	<Route path="/home2-index4" component={Home24}/>
            <Route path="/home3-index" component={Home3}/>
            <Route path="/home3-index2" component={Home32}/>
            <Route path="/home3-index3" component={Home33}/>
            <Route path="/home3-index4" component={Home34}/>
          </Main>
          <Redirect from='/' to="/login" />
        </Switch>
      </HashRouter>
    )
  }
}

export default App
