import * as functions from 'firebase-functions';
import axios from 'axios';

const BASE_URL = 'https://www.freetogame.com/api/games';

export const freeToGame = functions.https.onRequest(
  async (request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
    response.set('Access-Control-Allow-Headers', '*');

    try {
      const { queryString = '' } = request.body;
      functions.logger.info(queryString);

      const res = await axios.get(
        queryString ? `${BASE_URL}?${queryString}` : BASE_URL
      );

      if (res.data.status === 0) {
        response.json({
          items_count: 0,
          items: [],
        });

        return;
      }

      const results = res.data as Array<any>;
      response.json({
        items_count: results.length,
        items: results,
      });
    } catch (error) {
      functions.logger.error(error);
      response.status(500).send('api request failed');
    }
  }
);
