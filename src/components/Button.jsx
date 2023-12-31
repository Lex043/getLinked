/* eslint-disable react/prop-types */
const Button = ({ children, onClick }) => {
    return (
        <button
            className="w-[90px] lg:w-[100px] rounded-[4px] bg-gradient-to-r from-[#FF26B9] via-[#d434fe] to-[#903aff] py-2 font-montserrat text-xs text-white"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
