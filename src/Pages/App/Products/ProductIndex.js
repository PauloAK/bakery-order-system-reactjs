import BoxListItem from "../../../Components/UI/BoxListItem";
import BaseLayout from "../../Layouts/BaseLayout";
import { FaBox } from "react-icons/fa";
import FloatingButton from "../../../Components/UI/FloatingButton";
import { AiOutlinePlus } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import ProductApi from "../../../Api/ProductApi";
import { useLoading } from "../../../Providers/LoadingProvider";

const ProductIndex = () => {
    const loading = useLoading();
    const [products, setProducts] = useState([]);

    const loadProducts = async (page = 1) => {
        loading.show();
        let response = await ProductApi.list(page);
        setProducts(response.json.data);
        loading.hide();
    }

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <BaseLayout>
            <FloatingButton icon={<AiOutlinePlus />} color="blue" href="/products/create"/>
            <div className="p-2 flex gap-2 flex-col">
                {products ? products.map(product => {
                    return (
                    <BoxListItem
                        key={product.id}
                        icon={<FaBox />}
                        title={product.name}
                        text={product.short_description}
                        href={`/products/${product.id}`}
                    />
                    );
                }) : ''}
            </div>
        </BaseLayout>
    );
}

export default ProductIndex;