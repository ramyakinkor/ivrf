import { configureStore } from '@reduxjs/toolkit'
import {logger} from 'redux-logger'
import userSlice from './reducers/userSlice'
import ProductSlice from './reducers/productSlice'


export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: {
      user: userSlice,
      products: ProductSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true,
    preloadedState,
  })

  
  return store
}