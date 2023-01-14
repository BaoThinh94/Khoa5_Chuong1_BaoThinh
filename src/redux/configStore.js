import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { HomeModalReducer } from './reducers/HomeModalReducer'
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer'
import { QuanLyRapReducer } from './reducers/QuanLyRapReducer'
import { QuanLyNguoiDungReducer } from './reducers/QuanLyNguoiDungReducer'
import { LoadingReducer } from './reducers/LoadingReducer'
import { QuanLyDatVeReducer } from './reducers/QuanLyDatVeReducer'
import { ModalConfirmReducer } from './reducers/ModalConfirmReducer'
const rootReducer = combineReducers({
    QuanLyPhimReducer,
    QuanLyRapReducer,
    HomeModalReducer,
    QuanLyNguoiDungReducer,
    LoadingReducer,
    QuanLyDatVeReducer,
    ModalConfirmReducer
  

})


export const store = createStore(rootReducer, applyMiddleware(thunk))