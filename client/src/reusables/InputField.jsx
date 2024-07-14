/* eslint-disable react/prop-types */

const InputField = ({
  type,
  placeholder,
  className,
  value,
  onChange,
  min,
  pattern,
  maxLength,
}) => {
  return (
    <div className="p-2">
      <input
        required
        type={type}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChange}
        min={min}
        pattern={pattern}
        maxLength={maxLength}
      />
    </div>
  );
};

export default InputField;
