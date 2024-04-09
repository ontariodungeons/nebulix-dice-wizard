# Convert to Astro

When converting React .tsx components to Astro .astro format, follow these guidelines:

1. Use `className` or `class` attributes for assigning CSS classes within JSX expressions in .astro files.
2. Import React components using standard JavaScript imports in the frontmatter script section if they're needed.
3. Include any JavaScript logic from the original .tsx file in the frontmatter script section of the .astro file.
4. Remove the React function component wrapper and use the HTML-like template directly for the .astro component.
5. For any client-side interactivity, include a `<script>` tag with the appropriate `type="module"` attribute, or use Astro's component hydration directives.

For example:

```tsx
// React .tsx file
export default function MyComponent() {
  return (
    <div className="my-class">Content</div>
  );
}
```

```astro
---
// Frontmatter script section (for JavaScript logic if needed)
---
<div class="my-class">Content</div>
```