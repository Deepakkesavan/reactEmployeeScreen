import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { type SensitiveFieldProps } from './interfaces/SensitiveField.interface';

export function SensitiveField({
  label,
  value,
  disabled = false,
  required = false,
  className = "",
  onChange,
}: SensitiveFieldProps) {
  const [showValue, setShowValue] = useState(false);

  const maskSensitiveData = (val: string, showLength = 4) => {
    if (val.length <= showLength) return val;
    return "*".repeat(val.length - showLength) + val.slice(-showLength);
  };

  const gridClasses = className.includes("col-span") ? className : `${className}`;
  const inputSize = "max-w-xs";

  return (
    <div className={gridClasses}>
      <label className="block text-sm font-medium text-base-content mb-2">
        {label} {required && "*"}
      </label>
      <div className="relative">
        <input
          type="text"
          className={`input input-bordered bg-base-200 text-base-content border-base-300 pr-10 ${inputSize}`}
          value={disabled && !showValue ? maskSensitiveData(value) : value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
        />
        {disabled && (
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-base-300 rounded text-base-content"
            onClick={() => setShowValue(!showValue)}
          >
            {showValue ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>
    </div>
  );
}