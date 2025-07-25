# 🌐 `<Button />` — Global Reusable Button Component

A versatile, themeable button component designed to provide consistent styles and behavior across the TPMS system.

---

## Purpose

This component centralizes all button-related styling and logic into one reusable component. It supports different styles (`variants`), icons, loading states, full-width behavior, and more.

---

## 🛠️ Props

| Prop         | Type        | Default     | Description                                                                 |
|--------------|-------------|-------------|-----------------------------------------------------------------------------|
| `children`   | `ReactNode` | —           | Text or element inside the button                                           |
| `icon`       | `ReactNode` | `null`      | Optional icon placed beside the text                                        |
| `loading`    | `boolean`   | `false`     | If `true`, disables button and shows `"Processing..."`                     |
| `disabled`   | `boolean`   | `false`     | Disables the button                                                         |
| `type`       | `string`    | `"button"`  | HTML button type (`button`, `submit`, or `reset`)                          |
| `className`  | `string`    | `""`        | Additional Tailwind CSS classes for customization                          |
| `variant`    | `string`    | `"primary"` | Visual style of the button (see [Variants](#-variants))                   |
| `fullWidth`  | `boolean`   | `true`      | If `true`, button stretches to parent width                                |
| `...rest`    | `any`       | —           | Other valid `<button>` props (e.g., `onClick`, `aria-*`, `title`, etc.)    |

---

## Variants

Use the `variant` prop to style the button differently:

| Variant        | Style Description                             |
|----------------|-----------------------------------------------|
| `primary`      | Blue background, white text                   |
| `danger`       | Red background, white text                    |
| `dangerOutline`| White background, red border and red text     |
| `outline`      | White background, gray border, dark text      |
| `ghost`        | Transparent background, subtle hover effect   |

---

## 📌 Usage

```jsx
import Button from "@/components/ui/Button";
import { FaPlus } from "react-icons/fa";

<Button type="submit" variant="primary">
  Submit
</Button>

<Button variant="danger" onClick={handleDelete}>
  Delete
</Button>

<Button variant="outline" icon={<FaPlus />} fullWidth={false}>
  Add New
</Button>

<Button loading>
  Saving...
</Button>
