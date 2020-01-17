import React from 'react'
import { render } from 'react-dom'
import { hot } from 'react-hot-loader'
import { Router, hashHistory, Route, IndexRoute, Redirect } from 'react-router'
import initIframe from '@/lib/iframe'
import { setLang } from '@/lib/lang'

import Layout from './pages/Layout'
import Home from './pages/Home'
import Demo from './pages/Demo'
import './styles/base.less'

initIframe()

// TODO:
const currentLang = window.$lang
const langs = ['en-US', 'zh-CN']

const genRoutes = function (lang) {
  return (
    <Route path={`/${lang}`} component={Layout}>
      <IndexRoute component={Home} />
      <Route path={`/${lang}/:demo`} component={Demo}></Route>
      <Redirect from="*" to="/" />
      <Redirect from="*" to={`/${lang}`} />
    </Route>
  )
}

const App = () => (
  <Router history={hashHistory}>
    {genRoutes(langs[0])}
    {genRoutes(langs[1])}
    <Redirect from="*" to={`/${currentLang}`} />
  </Router>
)

const Gvm = hot(module)(App)

render(<Gvm />, document.getElementById('app'))
