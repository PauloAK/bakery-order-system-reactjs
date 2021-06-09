const BoxListItem = ({ icon, title, text }) => {
    return (
        <div className="box w-full bg-white rounded-xl shadow-md flex">
            <div className="w-10 flex items-center justify-center h-auto bg-blue-300 text-white rounded-l-xl">
                {icon}
            </div>
            <div className="flex-1 p-2">
                <span className="font-medium text-sm">{title}</span>
                <div className="text-xs">{text}</div>
            </div>
        </div>
    );
}

export default BoxListItem;