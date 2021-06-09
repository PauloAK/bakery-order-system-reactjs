import Item from './Item';

const Navbar = ({ itens }) => {
    return (
        <nav className="navbar fixed bottom-0 left-0 right-0 p-0 h-14 bg-white border-t border-gray-200 flex items-center justify-around">
            {itens.map(item => {
                return <Item 
                    key={item.route}
                    icon={item.icon}
                    text={item.text}
                    route={item.route}
                />
            })}
        </nav>
    );
}

export default Navbar;