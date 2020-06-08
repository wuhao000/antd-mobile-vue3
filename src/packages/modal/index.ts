import MModal from './src';
import './style';


MModal.install = Vue => {
  Vue.component('MModal', MModal);
};

Vue.prototype.$malert = MModal.alert;
Vue.prototype.$mconfirm = MModal.confirm;
Vue.prototype.$mprompt = MModal.prompt;
Vue.prototype.$moperation = MModal.operation;
export default MModal;
