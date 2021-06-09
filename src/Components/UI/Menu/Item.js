import { Link, useRouteMatch } from "react-router-dom";

const Item = ({ icon, text, route }) => {
    const isActive = useRouteMatch(route)?.isExact || false;
    return (
        <Link
            className="nav-item h-full flex justify-center content-center flex-col"
            to={route}
        >
            <span className={"text-xl flex justify-center " + ( isActive ? 'text-blue-400' : 'text-gray-600' )}>{icon}</span>
            { isActive ?
                <span className={"text flex justify-center font-medium text-blue-400"}>{text}</span>
                : ''
            }
        </Link>
    );
}

export default Item;