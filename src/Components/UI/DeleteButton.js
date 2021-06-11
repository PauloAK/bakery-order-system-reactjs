import * as React from 'react';
import { useHistory } from 'react-router';
import withReactContent from 'sweetalert2-react-content';
import { useLoading } from '../../Providers/LoadingProvider';
import { default as SwalPackage } from 'sweetalert2';
import Swal from './Swal';

const DeleteButton = ({ deleteMethod, redirectTo }) => {    
    const swal = withReactContent(SwalPackage);
    const history = useHistory();
    const loading = useLoading();
    const onClick = async () => {
        swal.fire({
            html: 'Deseja realmente deletar esse registro?',
            title: 'Deletar',
            icon: 'info',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#EF4444',
            cancelButtonColor: '#3B82F6',
            focusCancel: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Confirmar'
        }).then(async (confirm) => {
            if (!confirm.isConfirmed)
                return;
            loading.show();
            let response = await deleteMethod();
            loading.hide();
            if (response.status == 200) {
                Swal.showToast("success", "Excluído com sucesso!");
                if (redirectTo == 'back')
                    history.goBack();
                else
                    history.push(redirectTo);
            } else {
                Swal.showToast("Erro", "Erro ao excluir o registro!");
            }
        });
    }
    return (
        <>
            <button className="btn btn-sm btn-red" onClick={onClick} type="button">
                Excluir
            </button>
        </>
    )
}

export default DeleteButton;