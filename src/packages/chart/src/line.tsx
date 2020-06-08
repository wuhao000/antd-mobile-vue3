import Component, {mixins} from 'vue-class-component';
import Base from './mixin';

@Options({
  name: 'VLine'
})
export default class VLine extends mixins(Base) {
  public chartName = 'line';
}
