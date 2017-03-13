/**
 * Created by qianqing on 2016/12/24.
 */
'use strict';
const axios = require('axios');
const logger = require('../logger').system;

const api = {
  base: {
    dev: 'http://10.3.12.55:9191/api/v1/',
    pro: 'http://127.0.0.1:9191/api/v1/'
  },
  module: {
    Customer: {
      login: 'Customers/login',
    }
  }
};

const baseURL = process.env.NODE_ENV === 'debug' ? api.base.dev : api.base.pro;
if (!baseURL) {
  throw new Error('please config base url');
}

module.exports = function (module, operation, json, token = '', timeout = 15000) {
  let promise = new Promise((resolve, reject) => {
    if (!json) {
      reject({IsSuccess: 0, ErrorMessage: `post data is null`});
    }
    if (!module || !operation) {
      reject({IsSuccess: 0, ErrorMessage: `Can't get api, please enter module and operation`});
    }

    if (!api.module[module] || !api.module[module][operation]) {
      reject({IsSuccess: 0, ErrorMessage: `Can't get api, please confirm module and operation`});
    }
    ;

    let url = api.module[module][operation];
    let req = {
      url: url,
      baseURL: baseURL,
      method: 'post',
      data: json,
      timeout: timeout,
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-Access-Token': token}
    };
    axios(req)
      .then((response) => {
        let repData = response.data.repData;
        if (repData) {
          if (repData.IsSuccess === 1) {
            resolve(repData);
          } else {
            reject(repData);
          }
        } else {
          logger.error(`api get data error: ${url} ### ${response.data}`);
          reject({IsSuccess: 0, ErrorMessage: `api 异常: ${url}`});
        }
      })
      .catch((error) => {
        logger.error(`axios error: ${url} ### ${error.message}`);
        if (error.message) {
          reject({IsSuccess: 0, ErrorMessage: error.message});
        } else {
          reject({IsSuccess: 0, ErrorMessage: 'axios 异常' + url});
        }
      });
  });

  return promise;
};
