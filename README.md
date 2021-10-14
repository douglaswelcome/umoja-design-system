## Building an Umoja component

# CSS Architecture and class names

The Umoja Design System uses a strict class naming convention. Keeping to this convention creates a modular system with better clarity, improved legibility, and avoids conflicts. This is all accomplished by combining 4 techniques:

1. a global namespace
2. class prefixes
3. pascal casing
4. BEM syntax

The prefixes available are:

b- (Base) for classes that add additional styling to base HTML elements
c- (Component) for UI components, such as .umoja-c-btn
l- (Layout) for layout-related styles, such as .umoja-l-grid__item or .umoja-l-input-group__item

Based off of: [CSS Architecture for Design Systems](https://bradfrost.com/blog/post/css-architecture-for-design-systems/)

## Use an Umoja component

This is a general guide to using umoja components. Refer to a component’s README or other documentation for specific details.

To use a umoja component in your code:

1. From your project folder, install the component from npm.

```bash
npm install umoja-web-components
# requires node 10 & npm 6 or higher
```

2. Import the component.

In a JavaScript module:

```bash
import {SomeComponent} from 'umoja-web-components';
```

3. Add the component to your application or component:

```bash
<umoja-component></umoja-component>
```

## Testing

This sample modern-web.dev's
[@web/test-runner](https://www.npmjs.com/package/@web/test-runner) along with
Mocha, Chai, and some related helpers for testing. See the
[modern-web.dev testing documentation](https://modern-web.dev/docs/test-runner/overview) for
more information.

Tests can be run with the `test` script:

```bash
npm test
```

## Linting

Linting of JavaScript files is provided by [ESLint](eslint.org). In addition, [lit-analyzer](https://www.npmjs.com/package/lit-analyzer) is used to type-check and lint lit-html templates with the same engine and rules as lit-plugin.

The rules are mostly the recommended rules from each project, but some have been turned off to make LitElement usage easier. The recommended rules are pretty strict, so you may want to relax them by editing `.eslintrc.json`.

To lint the project run:

```bash
npm run lint
```

## Formatting

[Prettier](https://prettier.io/) is used for code formatting. It has been pre-configured according to the Polymer Project's style. You can change this in `.prettierrc.json`.

Prettier has not been configured to run when commiting files, but this can be added with Husky and and `pretty-quick`. See the [prettier.io](https://prettier.io/) site for instructions.

## Editing

If you use VS Code, we highly reccomend the [lit-plugin extension](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin), which enables some extremely useful features for lit-html templates:

- Syntax highlighting
- Type-checking
- Code completion
- Hover-over docs
- Jump to definition
- Linting
- Quick Fixes

The project is setup to reccomend lit-plugin to VS Code users if they don't already have it installed.
