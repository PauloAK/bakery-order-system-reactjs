import BoxListItem from "../../../Components/UI/BoxListItem";
import BaseLayout from "../../Layouts/BaseLayout";
import { FaBox } from "react-icons/fa";
import FloatingButton from "../../../Components/UI/FloatingButton";
import { AiOutlinePlus } from "react-icons/ai";

const Products = () => {
    const products = [{}];
    return (
        <BaseLayout>
            <FloatingButton icon={<AiOutlinePlus />} color="blue"/>
            <div className="p-2 flex gap-2 flex-col">
                {products.map(i => {
                    return (
                    <BoxListItem
                        icon={<FaBox />}
                        title="Cuca de Paçoca"
                        text="Teste"
                    />
                    );
                })}
            </div>
        </BaseLayout>
    );
}

export default Products;