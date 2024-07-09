/* eslint-disable react/prop-types */

const Button = ({ name, type, onClick, className }) => {
  return (
    <div>
      <button type={type} onClick={onClick} className={className}>
        {name}
      </button>
    </div>
  );
};

export default Button;
