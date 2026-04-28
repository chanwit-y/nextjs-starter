"use client";

import {
  forwardRef,
  useId,
  useState,
  type ReactNode,
  type SelectHTMLAttributes,
} from "react";
import "./SelectField.css";

type Variant = "outlined" | "filled" | "standard";
type Size = "small" | "medium";
type Color = "primary" | "secondary" | "error";

export type SelectOption = {
  value: string | number;
  label: ReactNode;
  disabled?: boolean;
};

export type SelectFieldProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "size"
> & {
  /** Visual variant of the select field. */
  variant?: Variant;
  /** Size of the select field. */
  size?: Size;
  /** Theme color applied on focus. */
  color?: Color;
  /** Label text displayed above / inside the field. */
  label?: ReactNode;
  /** Helper text displayed below the field. */
  helperText?: ReactNode;
  /** If true, the field is styled in an error state. */
  error?: boolean;
  /** If true, the select takes the full width of its container. */
  fullWidth?: boolean;
  /** Element placed at the start of the select. */
  startAdornment?: ReactNode;
  /** Options to render inside the select. */
  options?: SelectOption[];
  /** Placeholder text shown as the first disabled option. */
  placeholder?: string;
};

const VARIANT_CLASS: Record<Variant, string> = {
  outlined: "mui-selectfield-outlined",
  filled: "mui-selectfield-filled",
  standard: "mui-selectfield-standard",
};

const SIZE_CLASS: Record<Size, string> = {
  small: "mui-selectfield-small",
  medium: "mui-selectfield-medium",
};

const COLOR_CLASS: Record<Color, string> = {
  primary: "mui-selectfield-color-primary",
  secondary: "mui-selectfield-color-secondary",
  error: "mui-selectfield-color-error",
};

const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  function SelectField(
    {
      variant = "outlined",
      size = "medium",
      color = "primary",
      label,
      helperText,
      error,
      fullWidth,
      startAdornment,
      options,
      placeholder,
      className = "",
      id,
      disabled,
      required,
      value,
      defaultValue,
      onFocus,
      onBlur,
      children,
      ...rest
    },
    ref,
  ) {
    const autoId = useId();
    const inputId = id ?? autoId;
    const helperId = `${inputId}-helper`;

    const [focused, setFocused] = useState(false);

    const shrinkLabel = true;

    const rootClasses = [
      "mui-selectfield",
      VARIANT_CLASS[variant],
      SIZE_CLASS[size],
      COLOR_CLASS[error ? "error" : color],
      focused ? "mui-selectfield-focused" : "",
      disabled ? "mui-selectfield-disabled" : "",
      error ? "mui-selectfield-error" : "",
      fullWidth ? "mui-selectfield-fullwidth" : "",
      shrinkLabel ? "mui-selectfield-label-shrink" : "",
      label ? "" : "mui-selectfield-no-label",
      startAdornment ? "mui-selectfield-has-start" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const handleFocus = (e: React.FocusEvent<HTMLSelectElement>) => {
      setFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
      setFocused(false);
      onBlur?.(e);
    };

    return (
      <div className={rootClasses}>
        <div className="mui-selectfield-input-wrapper">
          {label && (
            <label htmlFor={inputId} className="mui-selectfield-label">
              {label}
              {required && <span aria-hidden> *</span>}
            </label>
          )}

          {startAdornment && (
            <span className="mui-selectfield-adornment mui-selectfield-adornment-start">
              {startAdornment}
            </span>
          )}

          <select
            ref={ref}
            id={inputId}
            className="mui-selectfield-select"
            disabled={disabled}
            required={required}
            value={value}
            defaultValue={defaultValue}
            aria-describedby={helperText ? helperId : undefined}
            aria-invalid={error || undefined}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...rest}
          >
            {placeholder && (
              <option value="" disabled hidden>
                {placeholder}
              </option>
            )}
            {options
              ? options.map((opt) => (
                  <option
                    key={opt.value}
                    value={opt.value}
                    disabled={opt.disabled}
                  >
                    {opt.label}
                  </option>
                ))
              : children}
          </select>

          <span className="mui-selectfield-arrow" aria-hidden>
            <svg
              focusable="false"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </span>

          {variant === "outlined" && (
            <fieldset aria-hidden className="mui-selectfield-outline">
              <legend className="mui-selectfield-outline-legend">
                {shrinkLabel && label ? (
                  <span>
                    {label}
                    {required && " *"}
                  </span>
                ) : (
                  <span className="mui-selectfield-outline-legend-empty" />
                )}
              </legend>
            </fieldset>
          )}
        </div>

        {helperText && (
          <p id={helperId} className="mui-selectfield-helper">
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

export default SelectField;
