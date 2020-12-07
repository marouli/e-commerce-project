import { takeEvery } from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils.js';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';

export function* fetchCollectionsAsync() {
  yield console.log('I am fired');

  const collectionRef = firestore.collection('collections');
  const snapshot = yield collectionRef.get();

  // collectionRef
  //   .get()
  //   .then((snapshot) => {
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //     dispatch(fetchCollectionsSuccess(collectionsMap));
  //   })
  //   .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
