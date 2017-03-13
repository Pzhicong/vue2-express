/**
 * Created by qianqing on 2017/2/4.
 */
import {ajax} from '../../assets/tool';
import * as type from './type';

export default {
  [type.GETCUSTOMERINFO] ({commit, state}) {
    return new Promise((resolve, reject) => {
      ajax('/url', {})
        .then(data => {
          commit(type.UPDATECUSTOMERINFO, data);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
