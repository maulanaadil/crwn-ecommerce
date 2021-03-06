import { call, takeEvery, put } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.util";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop.action";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTION_START,
    fetchCollectionsAsync
  );
}
