# Grapefruit-UI

A UI-Framework for Envoii's system-services.

## Grapefruit?

A pinkish or yellow fruit, with lots of layers and pieces.

## What is Grapefruit-UI?

Grapefruit-UI is a collection of react UI components, for faster and easier creation of new services and reusability of Envoii's UI layout. It is implemented into services and makes it possible to create pages, components or other react elements inside of services using the newest version of our UI. It also gives Envoii the ability to update or change the UI Layout in one place, having the changes applied in all services instantly.

Grapefruit-UI aims to increase Envoii's ability to professionally handle UI customizations, wether by customer request or to extend or change Envoii's dashboard design on any service or platform.

## Commiting changes to GitHub

To be conform to semantic versioning, the following commit rules are mandatory to follow:

### 1. Adding a new component to Grapefruit-UI

When a new Component has to be developed, a new branch should be created. Since a new component is a full code addition, this should be done in a feature branch, wich should be named like this:

`feature/[Component Name]`

**Example:**

`feature/Button`

When a new component is "finished" - as in: a state, that it could go into review, the commit message before the review should be written in the following style:

`feat: Add [Component Name] Component`

**Example:**

`feat: Add Button Component`

This will increase the release version by a minor number.

### 2. Making changes to a component

When an existing component has be changed, wether it is a bug that has to be fixed, or serves as an addition to the component itself, these changes should not be made inside of the original feature branch. Instead, a bugfix branch should be created in the following style:

`bugfix/[Component Name]-[Task Name]`

**Example:**

`bugfix/Button-change-border-radius`

When the change is ready for review, the commit message before the review should be written in the following style:

`fix: [Task-Description]`

**Example:**

`fix: [Changed border-radius on Button Component]`

Alternatively, a fix can also be committed with the relation to the changed file or task:

`fix([File or Component name]): [Task Description]`

**Example:**

`fix(Button.jsx): Changed border-radius`

This will increase the release version by a patch number.

## How to's

### How to implement a component?

Grapefruit-UI supplies storybook (https://storybook.js.org/) a react framework for easily testing react components, each component of Grapefruit-UI is well documented in storybook and can be tested, including all its props and settings.

### Testing out Grapefruit-UI components online:

The storybook environment for Grapefruit-UI is availible at _____

### Testing out Grapefruit-UI components locally:

To start storybook locally, install Grapefruit-UI's dependencys by running `npm install` in your terminal. Then run `npm run build-storybook` and open the file /docs/index.html in your browser.

To use the watch mode version instead, install the dependencies and run `npm run storybook`.

### How to create components for Grapefruit-UI?

First, start storybook in watch mode by typing `npm run storybook` in your terminal and open a browser window at http://localhost:6006/. For your convenience, you will see what you are working on updating in real time.

Creating new components for Grapefruit-UI, including storybook support, works almost the same as creating any other react component, there are only a few things you need to take into consideration.

Any component sits in the `src/Components` directory in its own folder (eg `/Button`), the component contains a `.jsx` file, containing the component code, an `.scss` file, containing the components specific custom (scss) styling, overwriting default styles and a `.stories.mdx` file, containing the stories of the component.

The following section will show a Button component and its stories, with comments explaining the specific sections of the code:

**Important**: When you created a new component including stories, please delete the `./docs` folder before you push your changes.

**Component Layout**

```js
// src/Components/Button/Button.jsx

// import react and prop-types:
import React from 'react';
import PropTypes from 'prop-types';

// import the custom style-sheet to overwrite ant-designs defaults:
import './button.scss';

// export the component on creation, and supply all props that belong to the component + any other prop that could be supplied (...props)
export const Button = ({
    className, 
    type, 
    size, 
    label, 
    danger,
    ...props
}) =>
{
    // work on the component, like you are used to, and use the props for their respective settings:
    return (
        <button
            className={`AutoComplete ${status && 'valiError'} ${size === 'large' && 'largeAutoComplete'}`}
            size={ size }
            type={ type }
            danger={ danger }
            { ...props }
        >
            { label }
        </button>
    );
};

// create the propTypes for every prop, so storybook knows what kind of type a prop is. JSDoc style comments will be shown as descriptions in the storybook documentation of the component:
Button.propTypes =
{
    /**
	 * Custom class name of Component
	 */
    className: PropTypes.string,
    /**
     * Is this the principal call to action on the page?
     */
    type: PropTypes.string,
    /**
     * For dangerous operations
     */
    danger: PropTypes.bool,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf([ 'small', 'default', 'large' ]),
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

// set up a few default prop values:
Button.defaultProps =
{
    danger: false,
    type: 'primary',
    size: 'default',
    onClick: undefined,
};
```

**Story layout**

```jsx
// src/Components/Button/Button.stories.mdx

// import storybook addons
import { Canvas, Meta, Story, Props } from '@storybook/addon-docs';

// import the component
import { Button } from './Button';

// create a template, to reuse the component in every story.
export const Template = (args) =>
(
    <Button { ...args } />
);

// create a meta element, with reference to the component and its location in the storybook overview.
<Meta title='Components/Button' component={ Button } />

// the title of the component
# Button

// a short description of the component
A Clickable component to trigger an operation.

// the following will include all story examples
## Examples

// the default story
### Default

// the default story explanation
In default, the button needs a label to be visible.

// the canvas houses a single story, with the name of the story and the arguments that can be changes to show the changes from story to story.
<Canvas>
    <Story
        name="Default"
        args={{
            label: 'Required Label'
        }}
    >
        { DefaultTemplate.bind({}) }
    </Story>
</Canvas>

// ... include more story examples here

## API

// at the end, the Api-props of the component can be displayed
<Props of={ Button } />
```

When your component is finished, and it was not autogenerated, please export it inside of the `/src/index.js` by using the location of your component directory.

## How to use Grapefruit-UI components with a service?

In the future, Grapefruit-UI will be a dependency of a service-template, and all its components can be used inside of it in any way you see fit, a detailed documentation this topic will follow.