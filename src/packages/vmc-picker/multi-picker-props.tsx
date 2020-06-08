
import {Options, Vue} from 'vue-class-component';
import {Prop} from 'vue-property-decorator';

@Options({
  name: 'MultiPickerProps'
})
export class MultiPickerProps extends Vue {
  @Prop({type: String})
  public prefixCls?: string;
  @Prop()
  public selectedValue?: any[];
}
