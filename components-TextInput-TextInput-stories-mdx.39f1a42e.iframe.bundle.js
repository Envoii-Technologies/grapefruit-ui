/*! For license information please see components-TextInput-TextInput-stories-mdx.39f1a42e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_envoii_technologies_grapefruit_ui=self.webpackChunk_envoii_technologies_grapefruit_ui||[]).push([[858],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Xz:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/TextInput/TextInput.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{oi:function(){return TextInput_TextInput_TextInput}});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),TextInput=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/TextInput/TextInput.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(TextInput.Z,options),TextInput.Z&&TextInput.Z.locals&&TextInput.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextInputStatus={default:"default",success:"success",error:"error"},TextInputMetaPosition={left:"left",right:"right"},TextInput_TextInput_TextInput=({className:className,autoFocus:autoFocus,label:label,type:type,status:status,placeholder:placeholder,metaLabel:metaLabel,metaPosition:metaPosition,name:name,...props})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("label",{className:"TextInput__label",htmlFor:name,children:label}),(0,jsx_runtime.jsx)("div",{className:`TextInput \n\t\t\t\t${void 0!==className?className:""}\n\t\t\t\t${status}\n\t\t\t\t`,children:(0,jsx_runtime.jsxs)("div",{className:"TextInput__wrapper",children:[metaLabel&&metaPosition===TextInputMetaPosition.left&&(0,jsx_runtime.jsx)("div",{className:"NumberInput__wrapper__metaLabel left",children:(0,jsx_runtime.jsx)("span",{children:metaLabel})}),(0,jsx_runtime.jsx)("input",{autoFocus:autoFocus,className:"TextInput__wrapper__metaInput",type:type,name:name,placeholder:placeholder||label,...props}),metaLabel&&metaPosition===TextInputMetaPosition.right&&(0,jsx_runtime.jsx)("div",{className:"NumberInput__wrapper__metaLabel right",children:(0,jsx_runtime.jsx)("span",{children:metaLabel})})]})})]});TextInput_TextInput_TextInput.propTypes={className:prop_types_default().string,autoFocus:prop_types_default().bool,label:prop_types_default().string,type:prop_types_default().oneOf(Object.keys({text:"text",password:"password"})),status:prop_types_default().oneOf(Object.keys(TextInputStatus)),name:prop_types_default().string,placeholder:prop_types_default().string,metaLabel:prop_types_default().string,metaPosition:prop_types_default().oneOf(Object.keys(TextInputMetaPosition))},TextInput_TextInput_TextInput.defaultProps={className:void 0,autoFocus:!1,label:void 0,type:"text",status:TextInputStatus.default,name:"",placeholder:"",metaLabel:"",metaPosition:TextInputMetaPosition.left},TextInput_TextInput_TextInput.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"Custom class name of Component",type:{name:"string"},required:!1},autoFocus:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},type:{defaultValue:{value:"'text'",computed:!1},description:"",type:{name:"enum",value:[{value:'"text"',computed:!1},{value:'"password"',computed:!1}]},required:!1},status:{defaultValue:{value:"'default'",computed:!1},description:"",type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"success"',computed:!1},{value:'"error"',computed:!1}]},required:!1},name:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},placeholder:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},metaLabel:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},metaPosition:{defaultValue:{value:"'left'",computed:!1},description:"",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]},required:!1}}}},"./src/components/TextInput/TextInput.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:function(){return Template},defaultStory:function(){return defaultStory}});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_TextInput__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/TextInput/TextInput.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_TextInput__WEBPACK_IMPORTED_MODULE_2__.oi,{...args});function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Components/TextInput",component:_TextInput__WEBPACK_IMPORTED_MODULE_2__.oi}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"textinput",children:"TextInput"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default",args:{},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_TextInput__WEBPACK_IMPORTED_MODULE_2__.oi})]})}const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.args={},defaultStory.parameters={storySource:{source:"args => <TextInput {...args} />"}};const componentMeta={title:"Components/TextInput",component:_TextInput__WEBPACK_IMPORTED_MODULE_2__.oi,tags:["stories-mdx"],includeStories:["defaultStory"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},__webpack_exports__.default=componentMeta},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/TextInput/TextInput.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("./src/fonts/Roboto-Regular.ttf"),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);___CSS_LOADER_EXPORT___.push([module.id,'*{box-sizing:border-box;padding:0;margin:0;font-family:"Roboto"}@font-face{font-family:"Roboto";font-style:normal;font-weight:100;src:url('+___CSS_LOADER_URL_REPLACEMENT_0___+') format("truetype")}.TextInput{border-radius:.25rem;margin:.5rem 0 1rem;border:1px solid rgba(0,0,0,.1);overflow:hidden}.TextInput__label{font-weight:bold}.TextInput.success{border-color:rgba(25,135,84,.5)}.TextInput.success .FormInput__metaInput{color:#198754;background:rgba(25,135,84,.25)}.TextInput.success .FormInput__metaLabel{border-left:1px solid rgba(25,135,84,.5)}.TextInput.error{border-color:rgba(171,46,60,.5)}.TextInput.error .FormInput__metaInput{color:#ab2e3c;background:rgba(171,46,60,.25)}.TextInput.error .FormInput__metaLabel{border-left:1px solid rgba(171,46,60,.5)}.TextInput__wrapper{display:flex;align-items:stretch;justify-content:stretch;height:2.5rem}.TextInput__wrapper__metaInput{flex-grow:1;padding:0 1rem;border:none}.TextInput__wrapper__metaInput:focus{background:rgba(232,232,232,.15);border:none;outline:none}.TextInput__wrapper__metaLabel{display:flex;justify-content:center;align-items:center;padding:0 1rem;font-size:.85rem;border-left:1px solid rgba(232,232,232,.1);background:rgba(232,232,232,.25)}.TextInput__wrapper__metaLabel.right{justify-content:flex-end}',"",{version:3,sources:["webpack://./src/global-styles/index.scss","webpack://./src/components/TextInput/TextInput.scss"],names:[],mappings:"AAAA,EACI,qBAAA,CACA,SAAA,CACA,QAAA,CACA,oBAAA,CAiDJ,WACI,oBAAA,CACA,iBAAA,CACA,eAAA,CACA,8DAAA,CCvDJ,WACI,oBDkCoB,CCjCpB,mBAAA,CACA,+BDae,CCZf,eAAA,CAEA,kBACI,gBAAA,CAGJ,mBACI,+BAAA,CAEA,yCACI,aDYI,CCXJ,8BAAA,CAGJ,yCACI,wCAAA,CAIR,iBACI,+BAAA,CAEA,uCACI,aDHE,CCIF,8BAAA,CAGJ,uCACI,wCAAA,CAIR,oBACI,YAAA,CACA,mBAAA,CACA,uBAAA,CACA,aAAA,CAEA,+BACI,WAAA,CACA,cAAA,CACA,WAAA,CAEA,qCACI,gCAAA,CACA,WAAA,CACA,YAAA,CAIR,+BACI,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,cAAA,CACA,gBDxCM,CCyCN,0CAAA,CACA,gCAAA,CAEA,qCACI,wBAAA",sourcesContent:["* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-family: 'Roboto';\n}\n\n/*\ndark: 191C24\nprimary: AF1763\nBLUE: 0D6EFD\nGREEN: 198754\nLIGHTBLUE: 0DCAF0\nRED: AB2E3C\nYellow: FFC107\n*/\n\n$box-shadow-bottom: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);\n$area-edge-border: 1px solid rgba(0, 0, 0, 0.10);\n$font-color-primary: rgba(32, 50, 87, 0.90);\n\n$font-size-small: 0.85rem;\n$font-size-medium: 1rem;\n$font-size-large: 1.5rem;\n$font-color-default: #203257;\n\n$error-color: #AB2E3C;\n$warning-color: #FFC107;\n$success-color: #198754;\n$default-color: #D9E2F4;\n$primary-color: #568DFF;\n$default-color-dark: #b0b0b0;\n$default-color-light: #e8e8e8;\n$disabled-color: #c6c6c6;\n\n$primary-background-light: white;\n\n$border-radius-default: 0.25rem;\n\n$page-width-default: 800px;\n\n// @media only screen and (min-width: 40em) {...} cellphone (640px and up)\n$breakpoint-small: 40em;\n\n// @media only screen and (min-width: 48em) {...} tablet (768px and up)\n$breakpoint-medium: 48em;\n\n// @media only screen and (min-width: 64em) {...} desktop (1024px and up)\n$breakpoint-large: 64em;\n\n// @media only screen and (min-width: 80em) {...} desktop (1280px and up)\n$breakpoint-xlarge: 80em;\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 100;\n    src: url('../fonts/Roboto-Regular.ttf') format('truetype');\n}\n\n// // tablet\n// @media only screen and (min-width: $breakpoint-medium) {\n        \n// }\n\n// // desktop\n// @media only screen and (min-width: $breakpoint-large) {\n    \n//     flex-direction: row;\n// }","@use '../../global-styles/' as *;\n\n.TextInput {\n    border-radius: $border-radius-default;\n    margin: 0.5rem 0 1rem;\n    border: $area-edge-border;\n    overflow: hidden;\n\n    &__label {\n        font-weight: bold;\n    }\n\n    &.success {\n        border-color: rgba($success-color, 0.5);\n\n        .FormInput__metaInput {\n            color: $success-color;\n            background: rgba($success-color, 0.25);\n        }\n\n        .FormInput__metaLabel {\n            border-left: 1px solid rgba($success-color, 0.5);\n        }\n    }\n\n    &.error {\n        border-color: rgba($error-color, 0.5);\n\n        .FormInput__metaInput {\n            color: $error-color;\n            background: rgba($error-color, 0.25);\n        }\n\n        .FormInput__metaLabel {\n            border-left: 1px solid rgba($error-color, 0.5);\n        }\n    }\n\n    &__wrapper {\n        display: flex;\n        align-items: stretch;\n        justify-content: stretch;\n        height: 2.5rem;\n\n        &__metaInput {\n            flex-grow: 1;\n            padding: 0 1rem;\n            border: none;\n\n            &:focus {\n                background: rgba($default-color-light, 0.15);\n                border: none;\n                outline: none;\n            }\n        }\n\n        &__metaLabel {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            padding: 0 1rem;\n            font-size: $font-size-small;\n            border-left: 1px solid rgba($default-color-light, 0.1);\n            background: rgba($default-color-light, 0.25);\n\n            &.right {\n                justify-content: flex-end;\n            }\n        }\n    }\n}\n"],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);