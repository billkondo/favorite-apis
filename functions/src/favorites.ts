import * as functions from 'firebase-functions';

import { FavoritesCollection, Timestamp } from './sdk';

type FavoriteData = {
  item: any;
};
export const favorite = functions.https.onCall(
  async (data: FavoriteData, context) => {
    if (!context.auth)
      throw new functions.https.HttpsError(
        'unauthenticated',
        'could not favorite item'
      );

    const uid = context.auth.uid;

    const { item } = data;
    if (!item)
      throw new functions.https.HttpsError(
        'invalid-argument',
        'item should not be empty'
      );

    const querySnapshot = await FavoritesCollection.where('id', '==', item.id)
      .where('uid', '==', uid)
      .get();

    const isFavorited = !!querySnapshot.docs[0];

    if (isFavorited) {
      const doc = querySnapshot.docs[0];
      await FavoritesCollection.doc(doc.id).delete();
    } else {
      await FavoritesCollection.add({
        item,
        uid,
        createdAt: Timestamp(),
      });
    }

    const wasFavorited = !isFavorited;
    return wasFavorited;
  }
);

export const list = functions.https.onCall(async (data, context) => {
  if (!context.auth)
    throw new functions.https.HttpsError(
      'unauthenticated',
      'could not favorite item'
    );

  const uid = context.auth.uid;
  const querySnapshot = await FavoritesCollection.where('uid', '==', uid)
    .orderBy('createdAt')
    .get();

  return querySnapshot.docs.map((doc) => doc.data());
});
