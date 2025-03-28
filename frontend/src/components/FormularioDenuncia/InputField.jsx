export const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
}) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-300 mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-verde-paleta sm:text-sm"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};
