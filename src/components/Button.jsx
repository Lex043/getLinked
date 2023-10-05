/* eslint-disable react/prop-types */
const Button = ({ children, onClick }) => {
    return (
        <button
            className="w-[90px] lg:w-[100px] rounded-sm bg-gradient-to-r from-[#d434fe] via-[#d434fe] to-[#903aff] py-2 font-montserrat text-xs text-white"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
