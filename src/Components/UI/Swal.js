import { default as SwalPackage } from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const swal = withReactContent(SwalPackage);

const Swal = {
    showSwal: (type, text, title, isToast = false) => {
        if (isToast) {
            const Toast = SwalPackage.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                backdrop: false,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', SwalPackage.stopTimer)
                    toast.addEventListener('mouseleave', SwalPackage.resumeTimer)
                    toast.addEventListener('click', SwalPackage.close)
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
};

export default Swal;