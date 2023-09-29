/*! For license information please see components-Tabs-Tabs-stories-mdx.cf04d37f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_envoii_technologies_grapefruit_ui=self.webpackChunk_envoii_technologies_grapefruit_ui||[]).push([[9021],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Xz:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/Tabs/Tabs.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:function(){return Template},defaultStory:function(){return defaultStory}});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_Tabs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Tabs/Tabs.jsx"),_TabItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Tabs/TabItem.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>{const _components=Object.assign({div:"div"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)());return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.div,{style:{maxWidth:"100%"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Tabs__WEBPACK_IMPORTED_MODULE_2__.m,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TabItem__WEBPACK_IMPORTED_MODULE_3__.E,{title:"First Tab",children:"First Tab"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TabItem__WEBPACK_IMPORTED_MODULE_3__.E,{title:"Second Tab",children:"Second Tab"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TabItem__WEBPACK_IMPORTED_MODULE_3__.E,{title:"Third Tab",children:"Third Tab"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TabItem__WEBPACK_IMPORTED_MODULE_3__.E,{title:"Fourth Tab",children:"Fourth Tab"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TabItem__WEBPACK_IMPORTED_MODULE_3__.E,{title:"Fifth Tab",children:"Fifth Tab"})]})})};function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Components/Tabs",component:_Tabs__WEBPACK_IMPORTED_MODULE_2__.m}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h1,{id:"tabs",children:"Tabs"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default",args:{},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_Tabs__WEBPACK_IMPORTED_MODULE_2__.m})]})}const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.args={},defaultStory.parameters={storySource:{source:'args => <div style={{\n  maxWidth: "100%"\n}}>\n\t<Tabs {...args}>\n\t\t<TabItem title="First Tab">First Tab</TabItem>\n\t\t<TabItem title="Second Tab">Second Tab</TabItem>\n\t\t<TabItem title="Third Tab">Third Tab</TabItem>\n\t\t<TabItem title="Fourth Tab">Fourth Tab</TabItem>\n\t\t<TabItem title="Fifth Tab">Fifth Tab</TabItem>\n\t</Tabs>\n\t</div>'}};const componentMeta={title:"Components/Tabs",component:_Tabs__WEBPACK_IMPORTED_MODULE_2__.m,tags:["stories-mdx"],includeStories:["defaultStory"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},__webpack_exports__.default=componentMeta},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);