import {Options, Vue} from 'vue-class-component';
import {List, Stepper} from '../../index';

const ListItem = List.Item;
@Options({
  name: 'Demo'
})
export default class Demo extends Vue {

  public state = {
    val: 3,
    val1: 2,
    value4: 0,
    value3: 0,
    value2: 0
  };

  public onChange(val) {
    console.log(val);
    // this.val = val;
  }

  public render() {
    return (
        <List>
          <ListItem
              wrap
              extra={
                <Stepper style={{width: '120px'}}
                         max={10}
                         min={1}
                         vModel={this.state.val}
                />}>
            范围1-10
          </ListItem>
          <ListItem
              wrap
              extra={
                <Stepper style={{width: '120px'}}
                         step={2}
                         vModel={this.state.value2}
                />}>
            步进2
          </ListItem>
          <ListItem
              wrap
              extra={
                <Stepper style={{width: '120px'}}
                         readOnly
                         vModel={this.state.value3}
                />}>
            只读
          </ListItem>
          <ListItem
              wrap
              extra={
                <Stepper style={{width: '120px'}}
                         valueEditable={false}
                         vModel={this.state.value4}/>}>
            禁止编辑
          </ListItem>
          <ListItem extra={
            <Stepper style={{width: '120px'}}
                     max={10}
                     min={1}
                     defaultValue={3}
                     disabled={true}/>}>
            禁用状态
          </ListItem>
        </List>
    );
  }
}
