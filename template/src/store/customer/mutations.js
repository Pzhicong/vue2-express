/**
 * Created by qianqing on 2017/2/4.
 */
import * as type from './type';

export default {
  [type.UPDATECUSTOMERINFO] (state, {info}) {
    state.info = info;
  }
};
