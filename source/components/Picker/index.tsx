import Picker from './Picker';
import { show } from './show';
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component';

export type { PickerProps } from './Picker';

export default attachPropertiesToComponent(Picker, {
  show
});
