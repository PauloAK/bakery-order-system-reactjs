import Box from "../../../Components/UI/Box";
import BaseLayout from "../../Layouts/BaseLayout";
import { AiOutlineDollar } from 'react-icons/ai';
import { useEffect, useState } from "react";
import InputGroup from "../../../Components/UI/InputGroup";
import ProductApi from "../../../Api/ProductApi";
import { useLoading } from "../../../Providers/LoadingProvider";
import Swal from "../../../Components/UI/Swal";
import { useHistory, useParams } from "react-router";
import _ from "lodash";
import DeleteButton from "../../../Components/UI/DeleteButton";
import MoneyField from '../../../Components/UI/MoneyField'

const ProductForm = () => {
    const [ formData, setFormData ] = useState({});
    const [ id, setId ] = useState(null);
    const loading = useLoading();
    const history = useHistory();
    const params = useParams();

    useEffect( () => {
        if (params && params.id) {
            setId(params.id);
            loadProductInfo(params.id);
        }
    }, [])

    const onChange = (e) => {
        const {name, value} = e.currentTarget;
        setFormData({...formData, [name]:value});
    };

    const loadProductInfo = async (id) => {
        loading.show();
        let response = await ProductApi.get(id);
        if (response.status === 404){
            Swal.showToast('error', '404 - Não encontrado');
            history.goBack();
            loading.hide();
            return;
        }
        setFormData(_.pick(response.json.data, ['name', 'value', 'short_description', 'long_description']));
        loading.hide();
    }

    const submitHandle = async e => {
        e.preventDefault();
        loading.show();
        let response = await (id ? ProductApi.update(id, formData) : ProductApi.store(formData));
        loading.hide();
        if ( [200, 201].indexOf(response.status) !== -1 ){
            Swal.showToast("success", response.status === 201 ? "Produto criado com sucesso" : "Produto atualizado com sucesso");
            history.push('/products');
        } else {
            // Error
        }
    }

    return (
        <BaseLayout showBackLink={true} backLink="/products">
            <div className="p-2">
                <Box title={id ? 'Editar Produto' : 'Novo Produto'}>
                    <form onSubmit={submitHandle} className="flex-wrap">
                        <div className="form-group w-full lg:w-4/5">
                            <label>Nome:</label>
                            <input name="name" required onChange={onChange} value={formData.name || ''}/>
                        </div>

                        <div className="form-group w-full lg:w-1/5">
                            <label>Valor (R$):</label>
                            <InputGroup
                                addon={<AiOutlineDollar />}
                            >
                                <MoneyField 
                                    onChange={onChange}
                                    required={true}
                                    defaultValue={formData.value}
                                    name="value"
                                />
                            </InputGroup>
                        </div>

                        <div className="form-group">
                            <label>Descrição curta:</label>
                            <textarea name="short_description" required resize="vertical" rows="2" onChange={onChange} value={formData.short_description || ''}></textarea>
                        </div>

                        <div className="form-group">
                            <label>Descrição longa:</label>
                            <textarea name="long_description" resize="vertical" rows="4" onChange={onChange} value={formData.long_description || ''}></textarea>
                        </div>

                        <div className="w-full flex justify-center mt-2 gap-2">
                            { id ?
                                <DeleteButton deleteMethod={() => { return ProductApi.destroy(id) }} redirectTo="back"/>
                                : ''
                            }
                            <button className="btn btn-blue btn-sm">Salvar</button>
                        </div>
                    </form>
                </Box>
            </div>
        </BaseLayout>
    );
}

export default ProductForm;