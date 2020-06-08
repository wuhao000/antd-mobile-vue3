import {VNode} from 'vue';
import {Options} from 'vue-class-component';
import {Prop} from 'vue-property-decorator';
import List from '../../list';
import {FormComponent} from '../../mixins/form-component';
import Range from './index';
const ListItem = List.Item;
const ListItemBrief = ListItem.Brief;

@Options({
  name: 'RangeItem'
})
export default class RangeItem extends FormComponent {

  @Prop({type: [String, Object]})
  public title: string | VNode;

  public render() {
    return <ListItem multipleLine={true}
                      disabled={this.isDisabled}>
      {this.title}
      <ListItemBrief style={{padding: '15px', flex: 1}}>
        <Range attrs={Object.assign({}, this.$attrs, this.$props)}
               disabled={this.isDisabled}
               value={this.currentValue}
               on={{
                 change: (v) => {
                   this.currentValue = v;
                 }
               }}/>
      </ListItemBrief>
    </ListItem>;
  }
}
