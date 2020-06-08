import MFlex from './src';

const Plugin: any = MFlex;

Plugin.install = Vue => {
  Vue.component('MFlex', MFlex);
  Vue.component('MFlexItem', MFlex.Item);
};

const FlexItem = MFlex.Item;
export {FlexItem};
export default Plugin;
