import classnames from 'classnames';

import {Options, Vue} from 'vue-class-component';
import {Prop} from 'vue-property-decorator';

@Options({
  name: 'Body'
})
export default class Body extends Vue {
  @Prop({default: 'am-card'})
  public prefixCls?: string;

  public render() {
    const {prefixCls} = this;
    const wrapCls = classnames(`${prefixCls}-body`);

    return <div class={wrapCls}>{this.$slots.default}</div>;
  }
}
