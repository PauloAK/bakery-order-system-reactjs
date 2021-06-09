import Navbar from "../../Components/UI/Menu/Navbar"
import { FaBoxes, FaHome, FaShoppingCart } from 'react-icons/fa';
import { ImUsers } from 'react-icons/im';
import { BsInboxesFill } from 'react-icons/bs';

const BaseLayout = () => {
    const menuItens = [
        {
            icon: <FaHome />,
            text: 'Início',
            route: '/'
        },
        {
            icon: <BsInboxesFill />,
            text: 'Pedidos',
            route: '/orders'
        },
        {
            icon: <FaBoxes />,
            text: 'Produtos',
            route: '/products'
        },
        {
            icon: <FaShoppingCart />,
            text: 'Gastos',
            route: '/expenses'
        },
        {
            icon: <ImUsers />,
            text: 'Clientes',
            route: '/customers'
        },
    ];
    
    return (
        <div className="app-container">
            <Navbar itens={menuItens} />
        </div>
    );
}

export default BaseLayout;