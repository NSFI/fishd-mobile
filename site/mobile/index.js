import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';
import { Router, hashHistory, Route, IndexRoute, Redirect } from 'react-router';
import initIframe from '@/lib/iframe';
import '@/lib/lang'

import Layout from './pages/Layout';
import Home from './pages/Home';
import Demo from './pages/Demo';
import './styles/base.less';
import './styles/font.less';

initIframe();

const currentLang = window.$lang;
const langs = ['en-US', 'zh-CN'];

const genRoutes = function (lang) {
  return (
    <Route path={`/${lang}`} component={Layout}>
      <IndexRoute component={Home} />
      <Route path={`/${lang}/:demo`} component={Demo}></Route>
      <Redirect from="*" to={`/${lang}`} />
    </Route>
  );
};

const routes = (
  <div>
    {genRoutes(langs[0])}
    {genRoutes(langs[1])}
    <Redirect from="*" to={`/${currentLang}`} />
  </div>
);
const App = () => <Router history={hashHistory}>{routes}</Router>;

const Gvm = hot(module)(App);

render(<Gvm />, document.getElementById('app'));
