import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import { uiReducer } from './uiSlice'
import { categoriesReducer } from './categories'
import { brandsReducer } from './brands'
import { productsReducer } from './products'
import { salesReducer } from './sales'
import { purchasesReducer } from './purchases'
import { firmReducer } from './firms'

const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    categories: categoriesReducer,
    brands: brandsReducer,
    products: productsReducer,
    sales: salesReducer,
    purchases: purchasesReducer,
    firms: firmReducer,
  },
})

export default store
