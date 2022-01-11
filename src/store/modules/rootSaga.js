import {all} from 'redux-saga/effects';
import carInfo from './carInfo/sagas';

export default function* rootSaga() {
    return yield all([carInfo]);
  }

