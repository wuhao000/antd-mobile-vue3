import MList from './src';
import './style';

MList.install = Vue => {
  Vue.component('MList', MList);
  Vue.component('MListItem', MList.Item);
  Vue.component('MListItemBrief', MList.Item.Brief);
};

const ListItem =  MList.Item;

export {
  ListItem
}

export default MList;
