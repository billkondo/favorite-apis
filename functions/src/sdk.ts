import * as firebaseAdmin from 'firebase-admin';

firebaseAdmin.initializeApp();

export const Timestamp = firebaseAdmin.firestore.FieldValue.serverTimestamp;
export const FavoritesCollection = firebaseAdmin
  .firestore()
  .collection('favorites');
