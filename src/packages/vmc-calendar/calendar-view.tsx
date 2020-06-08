import CalendarBase from './calendar-base';
import {Options, Vue} from 'vue-class-component';

@Options({
  name: 'CalendarView'
})
export default class CalendarView extends CalendarBase {

  public render() {
    return this.renderCalendar();
  }
}
