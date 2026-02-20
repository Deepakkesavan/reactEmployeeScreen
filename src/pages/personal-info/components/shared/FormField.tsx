import { type FormFieldProps } from './interfaces/FormField.interface';

export function FormField({
  label,
  type = "text",
  value,
  disabled = false,
  required = false,
  options,
  rows,
  className = "",
  onChange,
}: FormFieldProps) {
  const gridClasses = className.includes("col-span") ? className : `${className}`;
  const inputSize = type === "tel" || type === "number" || label.includes("ID") || label.includes("Code")  || label.includes("text") ? "w-full" :"w-full" ;

  const renderInput = () => {
    if (options) {
      return (
        <select
          className={`select select-bordered bg-base-200 text-base-content border-base-300 ${inputSize}`}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    }

    if (type === "textarea") {
      return (
        <textarea
          className="textarea textarea-bordered bg-base-200 text-base-content border-base-300 w-full"
          rows={rows || 3}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    }

    return (
      <input
        type={type}
        className={`input input-bordered bg-base-200 text-base-content border-base-300 ${inputSize}`}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(type === "number" ? parseFloat(e.target.value) : e.target.value)}
      />
    );
  };

  return (
    <div className={gridClasses}>
      <label className="block text-sm font-medium text-base-content mb-2">
        {label} {required && "*"}
      </label>
      {renderInput()}
    </div>
  );
}