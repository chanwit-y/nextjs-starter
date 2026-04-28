# SelectField

A form select component for choosing from a list of options, inspired by Material UI's Select.

## Import

```tsx
import SelectField from "@/components/common/SelectField/SelectField";
```

## Basic Usage

```tsx
<SelectField
  label="Age"
  options={[
    { value: 10, label: "Ten" },
    { value: 20, label: "Twenty" },
    { value: 30, label: "Thirty" },
  ]}
/>
```

## Variants

### Outlined (default)

```tsx
<SelectField variant="outlined" label="Outlined" options={options} />
```

### Filled

```tsx
<SelectField variant="filled" label="Filled" options={options} />
```

### Standard

```tsx
<SelectField variant="standard" label="Standard" options={options} />
```

## Sizes

```tsx
<SelectField label="Medium (default)" size="medium" options={options} />
<SelectField label="Small" size="small" options={options} />
```

## Placeholder

```tsx
<SelectField label="Country" placeholder="Select a country" options={options} />
```

## Helper Text

```tsx
<SelectField label="Role" helperText="Choose your primary role." options={options} />
```

## Error State

```tsx
<SelectField label="Role" error helperText="Please select a role." options={options} />
```

## Required Field

```tsx
<SelectField label="Department" required options={options} />
```

## Disabled

```tsx
<SelectField label="Disabled" disabled defaultValue={10} options={options} />
```

## Full Width

```tsx
<SelectField label="Full width" fullWidth options={options} />
```

## Adornment

Add an icon or text at the start of the select.

```tsx
<SelectField
  label="Currency"
  startAdornment={<span>$</span>}
  options={currencies}
/>
```

## Color

Change the focus/active color.

```tsx
<SelectField label="Primary" color="primary" options={options} />
<SelectField label="Secondary" color="secondary" options={options} />
<SelectField label="Error" color="error" options={options} />
```

## Controlled

```tsx
const [value, setValue] = useState("");

<SelectField
  label="Controlled"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  options={options}
/>
```

## Using Children Instead of Options

You can pass `<option>` elements as children instead of the `options` prop.

```tsx
<SelectField label="Fruit">
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="cherry">Cherry</option>
</SelectField>
```

## Combining Variants, Sizes, and Adornments

```tsx
<SelectField
  variant="filled"
  size="small"
  label="Category"
  startAdornment={<TagIcon />}
  options={categories}
/>

<SelectField
  variant="standard"
  label="Priority"
  options={priorities}
/>
```

## Custom Styles and HTML Attributes

SelectField accepts all standard `select` attributes (`className`, `style`, `name`, `autoComplete`, `multiple`, etc.) and supports `ref` forwarding.

```tsx
<SelectField
  label="Custom"
  className="my-select"
  style={{ maxWidth: 300 }}
  name="custom"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"outlined" \| "filled" \| "standard"` | `"outlined"` | Visual style of the field |
| `size` | `"small" \| "medium"` | `"medium"` | Size of the field |
| `color` | `"primary" \| "secondary" \| "error"` | `"primary"` | Focus/active color |
| `label` | `ReactNode` | — | Label displayed above / inside the field |
| `helperText` | `ReactNode` | — | Helper text below the field |
| `error` | `boolean` | `false` | Applies error styling |
| `fullWidth` | `boolean` | `false` | Takes the full container width |
| `startAdornment` | `ReactNode` | — | Element at the start of the select |
| `options` | `SelectOption[]` | — | Options to render in the dropdown |
| `placeholder` | `string` | — | Placeholder shown as first disabled option |
| `disabled` | `boolean` | `false` | Disables the field |
| `required` | `boolean` | `false` | Marks the field as required |
| `children` | `ReactNode` | — | Raw `<option>` elements (alternative to `options` prop) |

### SelectOption

| Property | Type | Description |
|----------|------|-------------|
| `value` | `string \| number` | The option value |
| `label` | `ReactNode` | The display text |
| `disabled` | `boolean` | If true, the option is disabled |
