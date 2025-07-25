# <Select /> — Global Select Dropdown Component

A reusable dropdown component for selecting from a list of options, built for consistency and easy integration across the TPMS system.

---

## Purpose

The `<Select />` component provides a styled alternative to the native HTML `<select>` element, supporting dynamic options, error handling, and label support.

---

## 🔧 Props

| Prop         | Type          | Default     | Description                                                             |
|--------------|---------------|-------------|-------------------------------------------------------------------------|
| `label`      | `string`      | —           | Optional label text displayed above the dropdown                       |
| `name`       | `string`      | —           | Input name and id for form submission                                  |
| `options`    | `array`       | `[]`        | Array of `{ label, value }` objects used to populate the dropdown      |
| `value`      | `string`      | —           | Currently selected value (controlled input)                            |
| `onChange`   | `function`    | —           | Callback triggered when user selects an option                         |
| `error`      | `string`      | —           | Optional error message to display below the dropdown                   |
| `className`  | `string`      | `""`        | Additional Tailwind CSS classes for custom styling                     |
| `...props`   | `any`         | —           | Any valid native `<select>` props (e.g. `required`, `disabled`)        |

---

## 📌 Usage

```jsx
import Select from "@/components/ui/Select/Select";

const zones = [
  { label: "Zone A", value: "zone-a" },
  { label: "Zone B", value: "zone-b" },
];

<Select
  name="zone"
  label="Select Zone"
  value={selectedZone}
  onChange={handleZoneChange}
  options={zones}
  required
/>
