import { configureStore } from '@reduxjs/toolkit'
import shopSlice from '../Slice/shopSlice'

export const store=configureStore({
reducer:{
dukan:shopSlice,
}
})