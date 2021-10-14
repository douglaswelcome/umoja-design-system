## Use an Umoja component

This is a general guide to using umoja components. Refer to a component’s README or other documentation for specific details.

To use a umoja component in your code:

1. From your project folder, install the component from npm.

```bash
npm install umoja-web-components
# requires node 10 & npm 6 or higher
```

2. Import the component.

All components:
```bash
import 'umoja-web-components';
```

You can import a single component with it's file path:
Example:
```bash
import 'umoja-web-components/components/button/button].js';
```

3. Add the component to your application or component:

```bash
<umoja-component></umoja-component>
```
