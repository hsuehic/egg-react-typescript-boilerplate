import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Layout from '../../framework/layout';
// https://github.com/gaearon/react-hot-loader/issues/525
import { Tab } from './component/tab';
import { TabProps } from '../../typings/type';
import { createReduxStore } from '../../redux/store';

const store = createReduxStore(true);

class App extends Component<TabProps, any> {
  render() {
    return (
      <Provider store={store}>
        <Layout {...this.props}>
          <Tab {...this.props} />
        </Layout>
      </Provider>
    );
  }
}

function bootstrap() {
  if (EASY_ENV_IS_NODE) {
    return App;
  }
  const state = window.__INITIAL_STATE__;
  const root = document.getElementById('app');
  if (EASY_ENV_IS_DEV) {
    ReactDOM.hydrate(
      <Provider store={store}>
        <AppContainer>
          <Tab {...state} />
        </AppContainer>
      </Provider>,
      root,
    );
    if (module.hot) {
      module.hot.accept();
    }
  } else {
    ReactDOM.hydrate(
      <Provider store={store}>
        <Tab {...state} />
      </Provider>,
      root,
    );
  }
}

export default bootstrap();
