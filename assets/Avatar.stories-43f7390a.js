import{M as b,b as t,C as o,A as f}from"./chunk-PCJTTTQV-41ab8fe8.js";import{A as i,u as r}from"./testuser-d7e4c479.js";import{j as e}from"./jsx-runtime-32a3b676.js";import{u as y}from"./index-20fbbd08.js";import"./iframe-7243b94b.js";import"../sb-preview/runtime.js";import"./doctrine-380fc95a.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-1fc0ca9a.js";const s=n=>e.jsx(i,{...n});function j(n){const a=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code",em:"em",blockquote:"blockquote",strong:"strong"},y(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"Components/Avatar",component:i}),`
`,e.jsx(a.h1,{id:"avatar",children:"Avatar"}),`
`,e.jsx(a.p,{children:"A component representing a user, by showing the first letter his first and last name, or an image."}),`
`,e.jsx(t,{name:"Example",args:{name:"Koray Uygun",image:r,size:"large"},children:s.bind({})}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(a.h3,{id:"default",children:"Default"}),`
`,e.jsx(a.p,{children:"As default, the avatar components name property is set to Jane Doe, resulting in the shown letters J (fistname) and D (lastname)."}),`
`,e.jsx(o,{children:e.jsx(t,{name:"Default",args:{},children:s.bind({})})}),`
`,e.jsx(a.h3,{id:"custom-name",children:"Custom Name"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"name"})," property can be set to a given name (a ",e.jsx(a.code,{children:"string"})," with 1, 2 or more words), resulting in the first letters of the first and last name being shown in the component."]}),`
`,e.jsx(a.p,{children:e.jsxs(a.em,{children:["In this example, the ",e.jsx(a.code,{children:"name"})," prop is set to ",e.jsx(a.code,{children:"Max Mustermann"}),"."]})}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsxs(a.p,{children:[e.jsx(a.strong,{children:"TIPP:"})," Said string should not contain more than two words, as the font will become smaller, to fit into the component shape, and at some point might have unwanted side-effects."]}),`
`]}),`
`,e.jsx(o,{children:e.jsx(t,{name:"Custom Name",args:{name:"Max Mustermann"},children:s.bind({})})}),`
`,e.jsx(a.h3,{id:"letter-fallback",children:"Letter fallback"}),`
`,e.jsxs(a.p,{children:["If the ",e.jsx(a.code,{children:"name"})," property only contains a ",e.jsx(a.code,{children:"string"})," with one word, only one letter is shown in the component."]}),`
`,e.jsx(a.p,{children:e.jsxs(a.em,{children:["In this example, the ",e.jsx(a.code,{children:"name"})," prop is set to ",e.jsx(a.code,{children:"Richard"}),"."]})}),`
`,e.jsx(o,{children:e.jsx(t,{name:"Letter fallback",args:{name:"Richard"},children:s.bind({})})}),`
`,e.jsx(a.h3,{id:"image",children:"Image"}),`
`,e.jsxs(a.p,{children:["If the ",e.jsx(a.code,{children:"image"})," property contains a ",e.jsx(a.code,{children:"string"})," containing the path to a user image, said imagewill be shown, instead of the above letter examples."]}),`
`,e.jsx(o,{children:e.jsx(t,{name:"Custom Image",args:{name:"Koray Uygun",image:r},children:s.bind({})})}),`
`,e.jsx(a.h3,{id:"size",children:"Size"}),`
`,e.jsxs(a.p,{children:["The size of the Avatar Component can be changed by passing ",e.jsx(a.code,{children:"small"}),", ",e.jsx(a.code,{children:"medium"})," or ",e.jsx(a.code,{children:"large"})," as ",e.jsx(a.code,{children:"string"})," to the ",e.jsx(a.code,{children:"size"})," property, changing the size of the image to 40x40px, 80x80px and 109x109px respectively."]}),`
`,e.jsxs(o,{children:[e.jsx(t,{name:"Small Image Size",args:{name:"Koray Uygun",image:r,size:"small"},children:s.bind({})}),e.jsx(t,{name:"Medium Image Size",args:{name:"Koray Uygun",image:r,size:"medium"},children:s.bind({})}),e.jsx(t,{name:"Large Image Size",args:{name:"Koray Uygun",image:r,size:"large"},children:s.bind({})})]}),`
`,e.jsx(a.h2,{id:"api",children:"API"}),`
`,e.jsx(f,{of:i}),`
`,e.jsxs(a.p,{children:[e.jsx(a.strong,{children:"Note:"})," This component supplies a className property, to call the component with a custom class name, if it needs to be specifically adressed."]})]})}function S(n={}){const{wrapper:a}=Object.assign({},y(),n.components);return a?e.jsx(a,{...n,children:e.jsx(j,{...n})}):j(n)}const c=s.bind({});c.storyName="Example";c.args={name:"Koray Uygun",image:r,size:"large"};c.parameters={storySource:{source:"args => <Avatar {...args} />"}};const l=s.bind({});l.storyName="Default";l.args={};l.parameters={storySource:{source:"args => <Avatar {...args} />"}};const d=s.bind({});d.storyName="Custom Name";d.args={name:"Max Mustermann"};d.parameters={storySource:{source:"args => <Avatar {...args} />"}};const g=s.bind({});g.storyName="Letter fallback";g.args={name:"Richard"};g.parameters={storySource:{source:"args => <Avatar {...args} />"}};const h=s.bind({});h.storyName="Custom Image";h.args={name:"Koray Uygun",image:r};h.parameters={storySource:{source:"args => <Avatar {...args} />"}};const p=s.bind({});p.storyName="Small Image Size";p.args={name:"Koray Uygun",image:r,size:"small"};p.parameters={storySource:{source:"args => <Avatar {...args} />"}};const x=s.bind({});x.storyName="Medium Image Size";x.args={name:"Koray Uygun",image:r,size:"medium"};x.parameters={storySource:{source:"args => <Avatar {...args} />"}};const u=s.bind({});u.storyName="Large Image Size";u.args={name:"Koray Uygun",image:r,size:"large"};u.parameters={storySource:{source:"args => <Avatar {...args} />"}};const m={title:"Components/Avatar",component:i,tags:["stories-mdx"],includeStories:["example","defaultStory","customName","letterFallback","customImage","smallImageSize","mediumImageSize","largeImageSize"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:S};const T=["Template","example","defaultStory","customName","letterFallback","customImage","smallImageSize","mediumImageSize","largeImageSize"];export{s as Template,T as __namedExportsOrder,h as customImage,d as customName,m as default,l as defaultStory,c as example,u as largeImageSize,g as letterFallback,x as mediumImageSize,p as smallImageSize};
//# sourceMappingURL=Avatar.stories-43f7390a.js.map
