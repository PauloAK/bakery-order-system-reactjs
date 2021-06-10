import Box from "../../../Components/UI/Box";
import BaseLayout from "../../Layouts/BaseLayout";
import { AiOutlineDollar } from 'react-icons/ai';
import { useState } from "react";

const ProductForm = () => {
    const [ formData, setFormData ] = useState({});
    const onChange = (e) => {
        const {name, value} = e.currentTarget;
        setFormData({...formData, [name]:value});
    };

    const submitHandle = e => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <BaseLayout showBackLink={true} backLink="/products">
            <div className="p-2">
                <Box title="Novo Produto">
                    <form onSubmit={submitHandle}>
                        <div className="form-group">
                            <label>Nome:</label>
                            <input name="name" required onChange={onChange}/>
                        </div>

                        <div className="form-group">
                            <label>Descrição curta:</label>
                            <textarea name="short_description" required resize="vertical" rows="2" onChange={onChange}></textarea>
                        </div>

                        <div className="form-group">
                            <label>Descrição longa:</label>
                            <textarea name="long_description" resize="vertical" rows="4" onChange={onChange}></textarea>
                        </div>

                        <div className="form-group">
                            <label>Valor (R$):</label>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <AiOutlineDollar />
                                </span>
                                <input name="value" type="number" required onChange={onChange}/>
                            </div>
                        </div>

                        <div className="w-full flex justify-center mt-2">
                            <button className="btn btn-blue btn-sm">Salvar</button>
                        </div>
                    </form>
                </Box>
            </div>
        </BaseLayout>
    );
}

export default ProductForm;