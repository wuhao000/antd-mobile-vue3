/* tslint:disable:jsx-no-multiline-js */
import classnames from 'classnames';

import {Options, Vue} from 'vue-class-component';
import {Prop} from 'vue-property-decorator';
import Checkbox from '../../checkbox';
import List, {ListItem} from '../../list';
import Radio from '../../radio';
import {DataItem} from './props-type';

@Options({
  name: 'SubMenu'
})
class SubMenu extends Vue {
  @Prop({type: String})
  public subMenuPrefixCls?: string;
  @Prop({type: String})
  public radioPrefixCls?: string;
  @Prop({})
  public subMenuData: DataItem[];
  @Prop({type: Boolean})
  public showSelect: boolean;
  @Prop({})
  public onSel: (dataItem: DataItem) => void;
  @Prop({})
  public selItem: DataItem[];
  @Prop({type: Boolean})
  public multiSelect?: boolean;

  public onClick(dataItem: DataItem) {
    this.$emit('click', dataItem);
  }

  public render() {
    const {
      subMenuPrefixCls,
      radioPrefixCls,
      subMenuData,
      showSelect,
      selItem,
      multiSelect
    } = this;
    const selected = (dataItem: DataItem) =>
        showSelect &&
        (selItem.length > 0 && selItem.indexOf(dataItem.value) !== -1);

    const ItemComponent = !multiSelect ? Radio : Checkbox;

    return (
        <List style={{paddingTop: 0}} class={subMenuPrefixCls}>
          {subMenuData.map((dataItem, idx) => (
              <ListItem
                  class={classnames(`${radioPrefixCls}-item`, {
                    [`${subMenuPrefixCls}-item-selected`]: selected(dataItem),
                    [`${subMenuPrefixCls}-item-disabled`]: dataItem.disabled
                  })}
                  key={idx}
                  extra={
                    <ItemComponent
                        value={selected(dataItem)}
                        disabled={dataItem.disabled}
                        onChange={() => this.onClick(dataItem)}
                    />
                  }
              >
                {dataItem.label}
              </ListItem>
          ))}
        </List>
    );
  }
}

export default SubMenu as any;
