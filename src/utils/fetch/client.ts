"use client";

import ky, { BeforeRequestHook } from "ky";
import merge from "lodash/merge";

import { kyAuthConfigs, kyConfigs } from "./config";

const cookieInterceptor: BeforeRequestHook = async (request) => {
  request.headers.set("Accept", "application/json, text/plain, */*");
};

export const clientFetch = ky.create(
  merge(JSON.parse(JSON.stringify(kyConfigs)), {
    throwHttpErrors: false,
    hooks: {
      beforeRequest: [cookieInterceptor],
      afterResponse: [
        async (_input: Request, _options: any, response: Response) => {
          const body = await response.json();
          if (body.errors || body.message) {
            console.log(body.errors);

            throw new Error(JSON.stringify(body));
          }
        },
      ],
    },
  })
);

export const clientAuthFetch = ky.create(
  merge(JSON.parse(JSON.stringify(kyAuthConfigs)), {
    throwHttpErrors: false,
    hooks: {
      beforeRequest: [cookieInterceptor],
      afterResponse: [
        async (_input: Request, _options: any, response: Response) => {
          const body = await response.json();
          if (body.errors || body.message) {
            throw new Error(JSON.stringify(body));
          }
        },
      ],
    },
  })
);
