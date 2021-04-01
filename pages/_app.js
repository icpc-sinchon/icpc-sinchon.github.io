import { Provider } from 'react-redux'
import withRedux, { createWrapper } from 'next-redux-wrapper'
import { applyMiddleware, compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../reducers';

import '../styles/global.scss'
import { useRouter } from 'next/router'

import '../styles/SeasonNav.scss'
import '../public/fonts/fonts.css'

const App = ({ Component, pageProps, store }) => {
  return (
    // 버전이 달라서 Provider로 감쌀 필요 없다 !!
    // https://darrengwon.tistory.com/557
    // <Provider store={store}>
    <Component {...pageProps} />
    // </Provider>
  )
}

const configStore = (options) => {
  const router = useRouter()
  const middleWares = []
  const enhancer = process.env.NODE_ENV === 'production' ?
    compose(applyMiddleware(...middleWares)) :
    composeWithDevTools(
      applyMiddleware(...middleWares)
    );
  const data = require(`../public/history/${router.pathname.substring(1)}/${process.env.NEXT_PUBLIC_CURRENT_SUAPC_SEASON}.json`)
  const seasonList = require(`../public/history/${router.pathname.substring(1)}/list.json`)

  const initialState = {
    currentSeasonData: data,
    currentYear: data.year,
    currentSeason: data.season,
    currentSeasonIdx: seasonList.indexOf(process.env.NEXT_PUBLIC_CURRENT_SUAPC_SEASON),
    seasonList
  }
  return createStore(reducer, initialState, enhancer);
}

// store Props가 withRedux를 통해 주입된다.
export default createWrapper(configStore).withRedux(App)
// export default withRedux(configStore)(App)