# <Input /> — Global Input Component

A reusable input field component for text-based inputs, with support for labels, icons, and validation error messages.

---

## ✅ Purpose

The `<Input />` component provides a consistent UI and behavior for form fields across the application. It supports standard input types like text, email, and password, and integrates well with form libraries such as `react-hook-form`.

---

## 🔧 Props

| Prop        | Type         | Default     | Description                                                           |
|-------------|--------------|-------------|-----------------------------------------------------------------------|
| `name`      | `string`     | —           | The name and `id` of the input field (required)                      |
| `type`      | `string`     | `"text"`    | HTML input type (e.g. `"text"`, `"email"`, `"password"`)             |
| `label`     | `string`     | —           | Optional label shown above the input field                           |
| `placeholder` | `string`   | —           | Placeholder text for the input field                                 |
| `error`     | `string`     | —           | Error message displayed below the input if present                   |
| `ref`       | `React Ref`  | —           | Forwarded ref (useful with `react-hook-form`)                        |
| `...props`  | `any`        | —           | Any valid native input attributes (e.g. `required`, `autoFocus`)     |

---

## 📌 Usage

```jsx
import Input from "@/components/ui/Input";

<Input
  name="email"
  type="email"
  placeholder="Enter your email"
  label="Email Address"
  required
/>

<Input
  name="password"
  type="password"
  placeholder="Enter your password"
  label="Password"
  error="Password is required"
/>