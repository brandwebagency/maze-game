# Field Sales - Front-end

## Folder Structure

```
Field-Sales_front-end/
│
├── public/
│   └── static/
│       └── images/
│           └── Static assets like images and icons
│
├── src/
│   ├── api/
│   │   └── firebase/
│   │       └── Firebase config and collection operations
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   └── Global layout components such as Header and Footer
│   │   │
│   │   └── ui/
│   │       └── UI elements for sections
│   │
│   ├── constants/
│   │   └── Global reusable constants. F.e. brandVariables and themes
│   │
│   ├── contexts/
│   │   └── React Context providers for global state sharing
│   │       - AuthProvider: Centralizes authentication state
│   │
│   ├── features/
│   │   ├── example/
│   │   │   ├── components/
│   │   │   │   └── ManageForm/
│   │   │   │       ├── {feature}ManageForm.tsx
│   │   │   │       └── {feature}Manageform.types.tsx
│   │   │   │
│   │   │   ├── hooks/
│   │   │   │   ├── use{create/update/delete}{feature}.ts
│   │   │   │   ├── useSingle{feature}.ts
│   │   │   │   ├── use{feature}.ts
│   │   │   │   └── use{role}{feature}.ts
│   │   │   │
│   │   │   ├── pages/
│   │   │   │   ├── create/
│   │   │   │   ├── overview/
│   │   │   │   │   ├── components/
│   │   │   │   │   │   └── {feature}OverviewFetcher/
│   │   │   │   │   │   └── {feature}OverviewUI/
│   │   │   │   │   └── {feature}UpdatePage.tsx
│   │   │   │   │
│   │   │   │   ├── single/
│   │   │   │   └── update/
│   │   │   │       ├── components/
│   │   │   │       │   └── Components specific to login view
│   │   │   │       └── {feature}UpdatePage.tsx
│   │   │   └── styles/
│   │   │
│   │   ├── auth/
│   │   ├── brandRetailJunction/
│   │   ├── brands/
│   │   ├── category/
│   │   ├── dashboard/
│   │   ├── employees/
│   │   ├── error/
│   │   ├── invite/
│   │   ├── locations/
│   │   ├── mediaLibrary/
│   │   ├── pools/
│   │   ├── profile/
│   │   ├── retail/
│   │   ├── training/
│   │   ├── users/
│   │   │
│   │   └── ProtectedRoute.tsx
│   │
│   ├── hooks/
│   │   └── Global React hooks used across more than one feature
│   │
│   ├── i18n/
│   │   ├── locales/
│   │   │   ├── en/
│   │   │   │   ├── index.ts
│   │   │   │   ├── common.ts
│   │   │   │   ├── auth.ts
│   │   │   │   ├── training.ts
│   │   │   │   ├── brands.ts
│   │   │   │   └── ...
│   │   │   └── da/ (future Danish translations)
│   │   ├── types.ts
│   │   └── i18n.ts
│   │
│   ├── models/
│   │   └── Data models, interfaces, types, and schema definitions
│   │
│   ├── routes/
│   │   └── Route utilities, custom route handlers, and navigation helpers
│   │
│   ├── store/
│   │   └── Global state management using Zustand and Jotai for different
│   │       data stores (e.g., companies, auth, user profiles)
│   │
│   ├── styles/
│   │   ├── base/
│   │   ├── layout/
│   │   ├── themes/
│   │   └── utils/
│   │
│   └── utils/
│       ├── helperFunctions/
│       ├── formatters/
│       └── validators/
│
├── package.json
├── LICENSE.md
├── README.md
└── vite.config.ts
```

## Principles and Guidelines

### Guidelines for component placement:

Place in `auth/components/` if:

- The component is used in multiple pages within auth
- The component represents a core auth domain concept
- It's likely to be reused in future auth pages

Place in `auth/[page]/components/` if:

- The component is only used in that specific page
- The component is highly specialized to that page's context
- The component depends on page-specific state or logic

### Performance

Page load times (both real and perceived) are a key consideration for users of all browsers and device types.

- Send fewest bytes possible down the wire
- Avoid unnecessary use of `display: none`;
- Keep CSS selectors concise (be wary of SASS nesting)
- Minimise HTTP requests
- Minimise blocking – content should be readable before client side processing
- Lazy load 'supplementary' content (especially images)

### Don't Repeat Yourself (DRY)

If you repeat anything that has already been defined in code, refactor it so that it only ever has one representation in the codebase.

If you stick to this principle, you will ensure that you will only ever need to change one implementation of a feature without worrying about needing to change any other part of the code.

### Seperation

Separate structure from presentation from behaviour to aid maintainability and understanding.

- Keep CSS (presentation), JS (behaviour) and HTML (structure) in separate files
- Avoid writing inline CSS
- Avoid writing CSS or HTML in Javascript
- Don't choose HTML elements to imply style
- Where appropriate, use CSS rather than Javascript for animations and transitions
- Try to use templates when defining markup in Javascript

### Write code to be read

Follow the principles of 'Keep It Simple, Stupid' (KISS); hard to read or obfuscated code is difficult to maintain and debug. Don't be too clever; write code to be read.

### Commenting

Don't leave commented out chunks of code in the codebase. It makes the code look unfinished, and can be confusing for other developers.

Be verbose with your comments but ensure:

- Your comments add something to the code, they don't just repeat what is there
- They are kept up to date, if you change something that has been commented, ensure you up date the comment as well
- If code needs extensive commenting, can it be refactored to make it less complex / easier to understand?
- You focus on why rather than how - unless your code is too complex, it should be self documenting

## Naming Convention

### PascalCase

PascalCase for type-related and React-specific constructs.

- React Components
- TypeScript Interfaces
- Type Definitions
- Enum Types

#### React Components Examples

```typescript
// src/components/sections/HeroSection.tsx
export default function HeroSection() {
  return <section>Hero Content</section>;
}
```

#### TypeScript Interfaces Examples

```typescript
// src/types/Product.ts
export interface ProductDetails {
  productId: number;
  productName: string;
  price: number;
}
```

#### Enum Examples

```typescript
// src/types/Roles.ts
export enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}
```

### camelCase

camelCase for most variables, functions, and file names.

- File names
- Function names
- Variable names
- Utility functions

#### File Name Examples

```typescript
// src/utils/userAuthentication.ts
export const authenticateUser = () => {
  /* ... */
};

// src/hooks/useUserData.ts
export function useUserData() {
  /* ... */
}
```

#### Variable Name Examples

```typescript
// Inside a component or function
const userProfile = { name: "John Doe", age: 30 };
let isLoggedIn = false;
const productList = [];

function processData() {
  const currentUser = getUserInfo();
  const totalItems = calculateItemCount();
}
```

### kebab-case

kebab-case for CSS module and some file naming scenarios.
Utilise BEM's 'Block', 'Element', 'Modifier' methodology.

- CSS/SCSS module files

#### SCSS Examples

```scss
// src/styles/base/_global.scss
.page-container {
  max-width: 1200px;
  margin: 0 auto;
}
```

### Role-Specific Component Naming

When creating role-specific variants of existing components, prefix the component name with the role to clearly differentiate functionality and access permissions.

**Pattern:** `{Role}{ComponentName}`

#### Examples

```typescript
// Generic component
RetailSingleUI;

// Role-specific variants
BrandRetailSingleUI; // For brand-user role
AdminRetailSingleUI; // For admin role
ManagerRetailSingleUI; // For retail-manager role

// Other examples
Dashboard; // Generic dashboard
BrandDashboard; // Brand-specific dashboard
AdminDashboard; // Admin-specific dashboard
```

`BrandRetailSingleUI` clearly indicates:

- It's for brand users (Brand)
- It's about retail data (Retail)
- It's a single item view (Single)
- It's a UI component (UI)

**Benefits:**

- Clear component purpose and access level
- Prevents accidental misuse across roles
- Maintains consistency in codebase
- Easier to locate role-specific functionality

### Default Exports

We use **default exports** exclusively for all React components and modules in this project to maintain consistency and simplicity.

#### Correct Usage

```typescript
// src/components/ui/Button.tsx
const Button = () => {
  return <button>Click me</button>;
};

export default Button;
```

```typescript
// Importing components
import Button from "./components/ui/Button";
import CustomButton from "./components/ui/Button"; // Renaming allowed
```

#### Avoid Named Exports for Components

```typescript
// Don't do this for React components
export const Button = () => {
  return <button>Click me</button>;
};
```

**Benefits:**

- **Consistency**: Maintains uniform import/export pattern across the codebase
- **Flexibility**: Allows importing components with contextually appropriate names
- **Simplicity**: Reduces cognitive overhead when working with component imports
- **Refactoring**: Easier to rename components without breaking imports

**Exception:** Named exports are acceptable for utility functions, constants, or when exporting multiple items from a single file.

```typescript
// src/utils/validators.ts
export const validateEmail = (email: string) => {
  /* ... */
};
export const validatePassword = (password: string) => {
  /* ... */
};
```
