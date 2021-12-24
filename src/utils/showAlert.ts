import Swal, { SweetAlertIcon } from 'sweetalert2';
import { theme } from '../global/theme';

export interface AlertProps {
  icon?: SweetAlertIcon;
  title: string;
  text: string;
}

export const showAlert = ({ title, text, icon }: AlertProps) =>
  Swal.fire({
    icon: icon || 'info',
    title,
    text,
    confirmButtonColor: theme.palette.primary.main,
  });
