# <Form /> — Global Form Component

A reusable wrapper around the native HTML `<form>` element, designed to apply consistent layout and spacing across your TPMS forms.

---

## ✅ Purpose

This component standardizes the appearance of all forms in the application by applying layout utility classes (`flex`, `gap-4`, `w-full`) and enabling easy extension via `className`.

---

## 🔧 Props

| Prop         | Type        | Default   | Description                                           |
|--------------|-------------|-----------|-------------------------------------------------------|
| `onSubmit`   | `function`  | —         | Callback fired on form submission                    |
| `className`  | `string`    | `""`      | Additional Tailwind CSS classes                      |
| `children`   | `ReactNode` | —         | Form fields and buttons to render inside the form    |
| `...props`   | `any`       | —         | Any other valid form attributes (e.g. `id`, `method`) |

---

## 📌 Usage

```jsx
import Form from "@/components/ui/Form";

<Form onSubmit={handleSubmit} className="space-y-6">
  <Input name="email" type="email" placeholder="Enter email" required />
  <Input name="password" type="password" placeholder="Enter password" required />
  <Button type="submit">Login</Button>
</Form>
