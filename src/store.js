import { configureStore } from '@reduxjs/toolkit'
import rotateReducer from './reducers/rotateReducer'
export default configureStore({
  reducer: {rotate:rotateReducer}
})