import ky, { BeforeRequestHook } from 'ky';
import merge from 'lodash/merge';

import {
  kyAuthConfigs,
  kyConfigs,
} from './config';

const cookieInterceptor: BeforeRequestHook = async (request) => {
  request.headers.set('Accept', 'application/json, text/plain, */*');
 
};

export const serverFetch = ky.create(
  merge(JSON.parse(JSON.stringify(kyConfigs)), {
    hooks: {
      afterResponse: [
        async (_input: Request, _options: any, response: Response) => {
          const body = await response.json();
          if (body.errors || body.message) {
            throw new Error(JSON.stringify(body));
          }
        },
      ],
      beforeRequest: [cookieInterceptor],
    },
  })
);

export const serverAuthFetch = ky.create(
  merge(JSON.parse(JSON.stringify(kyAuthConfigs)), {
    hooks: {
      afterResponse: [
        async (_input: Request, _options: any, response: Response) => {
          const body = await response.json();
          if (body.errors || body.message) {
            throw new Error(JSON.stringify(body));
          }
        },
      ],
      beforeRequest: [cookieInterceptor],
    },
  })
);
