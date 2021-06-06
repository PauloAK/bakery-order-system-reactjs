import Swal, { SweetAlertIcon } from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const swal = withReactContent(Swal);

export default {
    showSwal(type : SweetAlertIcon, text : string, title ?: string, isToast : boolean = false) {
        if (isToast) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            
            Toast.fire({
                icon: type,
                title: text
            })
        } else {
            swal.fire({
                html: text,
                title: title,
                icon: type
            });
        }
    }
}