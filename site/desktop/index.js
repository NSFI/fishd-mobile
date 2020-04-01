import React from 'react'
import { render } from 'react-dom'
import { hot } from 'react-hot-loader'
import { Router, hashHistory, Route, IndexRoute, Redirect } from 'react-router'
import initIframe from '@/lib/iframe'
import { setLang } from '@/lib/lang'

import Home from './pages/Home'
import Components from './pages/Components'
import Demo from './pages/Demo'
import Layout from './pages/Layout'

import 'ppfish/es/assets/css/index.less'
import './styles/index.less'

initIframe()

// TODO: 国际化
const currentLang = window.$lang
const langs = ['en-US', 'zh-CN']

const genRoutes = function (lang) {
  return (
    <Route path={`/${lang}`} component={Layout}>
      <IndexRoute component={Home} />
      <Route path={`/${lang}/home`} component={Home} />
      <Route path={`/${lang}/components`} component={Components}>
        <IndexRoute component={Demo} />
        <Route path=":demo" component={Demo} />
      </Route>
      <Redirect from="*" to={`/${lang}/home`} />
    </Route>
  )
}

const routes = (
  <div>
    {genRoutes(langs[0])}
    {genRoutes(langs[1])}
    <Redirect from="*" to={`/${currentLang}`} />
  </div>
)

const App = () => (
  <Router history={hashHistory}>
    {routes}
  </Router>
)

const Gvm = hot(module)(App)

render(<Gvm />, document.getElementById('app'))
