import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { HomeModalReducer } from './reducers/HomeModalReducer'
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer'
import { QuanLyRapReducer } from './reducers/QuanLyRapReducer'
import { QuanLyNguoiDungReducer } from './reducers/QuanLyNguoiDungReducer'
import { LoadingReducer } from './reducers/LoadingReducer'
import { QuanLyDatVeReducer } from './reducers/QuanLyDatVeReducer'
import { ModalConfirmReducer } from './reducers/ModalConfirmReducer'
import { AdminTemplateReducer } from './reducers/AdminTemplateReducer'
const rootReducer = combineReducers({
    QuanLyPhimReducer,
    QuanLyRapReducer,
    HomeModalReducer,
    QuanLyNguoiDungReducer,
    LoadingReducer,
    QuanLyDatVeReducer,
    ModalConfirmReducer,
    AdminTemplateReducer
  

})


export const store = createStore(rootReducer, applyMiddleware(thunk))