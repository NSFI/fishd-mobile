import Modal from './Modal';
import { show } from './show';
import { alert } from './alert';
import { confirm } from './confirm';
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component';

export type { ModalProps } from './Modal';
export type { ModalConfirmProps } from './confirm';
export type { ModalAlertProps } from './alert';
export type { ModalShowProps } from './show';

export default attachPropertiesToComponent(Modal, {
  show,
  alert,
  confirm
});
