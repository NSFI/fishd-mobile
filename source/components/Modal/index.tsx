import Modal from './Modal';
import { show } from './show';
import { alert } from './alert';
import { confirm } from './confirm';
export type { ModalProps } from './Modal';

type CompoundedType = typeof Modal & {
  show: typeof show;
  alert: typeof alert;
  confirm: typeof confirm;
};

const Compounded = Modal as CompoundedType;
Compounded.show = show;
Compounded.alert = alert;
Compounded.confirm = confirm;

export default Compounded;
