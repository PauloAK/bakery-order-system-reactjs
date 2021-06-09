import { Link } from "react-router-dom";

const FloatingButton = ({ href, icon, color }) => {
    return (
        <Link className={`btn btn-${color} rounded-full fixed bottom-16 right-4 h-10 w-10 flex items-center justify-center text-4xl p-2`} to={href}>
            {icon}
        </Link>
    );
}

export default FloatingButton;