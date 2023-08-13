import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import './app.scss'
// import HotelListState from "./store/index";
import MyState from './store/index';


function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  // return children
  return <MyState.Provider> {children} </MyState.Provider>;
}

export default App
