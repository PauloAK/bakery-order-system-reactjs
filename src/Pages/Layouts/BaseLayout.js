import Navbar from "../../Components/UI/Menu/Navbar"
import { FaBoxes, FaHome, FaShoppingCart } from 'react-icons/fa';
import { ImUsers } from 'react-icons/im';
import { BsInboxesFill, BsChevronLeft } from 'react-icons/bs';
import { Link } from "react-router-dom";

const BaseLayout = ({ backLink, showBackLink = false, children }) => {
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
            { showBackLink ? 
                <div className="bg-white h-10 fixed top-0 left-0 right-0 shadow-md shadow-white flex items-center gap-1 px-2 font-medium">
                    <Link to={backLink}>
                        <BsChevronLeft />
                    </Link>
                    Voltar
                </div>
                : ''
            }
            <div className={`pb-14 ${showBackLink ? 'pt-10' : ''}`}>
                {children}
            </div>
            <Navbar itens={menuItens} />
        </div>
    );
}

export default BaseLayout;