import BoxListItem from "../../../Components/UI/BoxListItem";
import BaseLayout from "../../Layouts/BaseLayout";
import { FaBox } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import FloatingButton from "../../../Components/UI/FloatingButton";
import React, { useState } from "react";
import ProductApi from "../../../Api/ProductApi";
import { useLoading } from "../../../Providers/LoadingProvider";
import MoneyHelper from "../../../Helpers/MoneyHelper";
import ReactPaginate from "react-paginate";

const ProductIndex = () => {
    const loading = useLoading();
    const [products, setProducts] = useState([]);
    const [pagination, setPagination] = useState({
        last_page: 0,
        current_page: 0
    });

    const loadProducts = async (page = 1) => {
        loading.show();
        setProducts([]);
        let response = await ProductApi.list(page);
        setProducts(response.json.data);
        setPagination({
            last_page: response.json.meta.last_page,
            current_page: response.json.meta.current_page
        })
        loading.hide();
    }

    const handlePageClick = (e) => {
        loadProducts(e.selected + 1);
    }

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
                        text={<div>
                            <span className="block w-full text-green-600 font-medium">{MoneyHelper.format(product.value)}</span>
                            {product.short_description}
                        </div>}
                        href={`/products/${product.id}`}
                    />
                    );
                }) : ''}
            </div>

            <ReactPaginate
                pageCount={pagination.last_page}
                initialPage={pagination.current_page}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                previousLabel="&#x276E;"
                nextLabel="&#x276F;"
                containerClassName="w-full flex gap-1 justify-center"
                pageLinkClassName="px-3 py-1 bg-white border border-gray-300 rounded font-medium"
                nextLinkClassName="px-3 py-1 bg-white border border-gray-300 rounded"
                previousLinkClassName="px-3 py-1 bg-white border border-gray-300 rounded"
                activeLinkClassName="bg-blue-400 text-white border-blue-300"
                disabledClassName="cursor-not-allowed opacity-40"
                onPageChange={handlePageClick}
            />
        </BaseLayout>
    );
}

export default ProductIndex;