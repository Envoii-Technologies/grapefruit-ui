"use strict";(self.webpackChunk_envoii_technologies_grapefruit_ui=self.webpackChunk_envoii_technologies_grapefruit_ui||[]).push([[4590],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Xz:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/Button/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{zx:function(){return _Button__WEBPACK_IMPORTED_MODULE_0__.zx}});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Button/Button.jsx")},"./src/components/PopOver/PopOver.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{v:function(){return PopOver_PopOver_PopOver}});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Button=__webpack_require__("./src/components/Button/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),PopOver=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/PopOver/PopOver.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(PopOver.Z,options),PopOver.Z&&PopOver.Z.locals&&PopOver.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PopOverPosition={top:"top",bottom:"bottom",left:"left",right:"right"},PopOver_PopOver_PopOver=({className:className,children:children,position:position,options:options,text:text,...props})=>{const[isOpen,setIsOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)("div",{className:`PopOver ${void 0!==className?className:""}`,children:[(0,jsx_runtime.jsx)("span",{className:"PopOver__trigger",onClick:()=>setIsOpen(!isOpen),children:children}),(0,jsx_runtime.jsx)("div",{className:`PopOver__content ${isOpen?"open":"closed"} ${position}`,children:options?options.map(((option,i)=>(0,jsx_runtime.jsx)(Button.zx,{disabled:option.disabled||!1,type:option.type||"primary",label:option.label,onClick:e=>((action,e)=>{setIsOpen(!1),action(e)})(option.action,e)},i))):text})]})};PopOver_PopOver_PopOver.displayName="PopOver",PopOver_PopOver_PopOver.propTypes={className:prop_types_default().string,children:prop_types_default().oneOfType([prop_types_default().arrayOf(prop_types_default().element),prop_types_default().element]),position:prop_types_default().oneOf(Object.keys(PopOverPosition)),options:prop_types_default().array,text:prop_types_default().string},PopOver_PopOver_PopOver.defaultProps={className:void 0,children:null,position:PopOverPosition.bottom,options:void 0,text:"Hello World"},PopOver_PopOver_PopOver.__docgenInfo={description:"",methods:[],displayName:"PopOver",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"Custom class name of Component",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"element"}},{name:"element"}]},required:!1},position:{defaultValue:{value:"'bottom'",computed:!1},description:"",type:{name:"enum",value:[{value:'"top"',computed:!1},{value:'"bottom"',computed:!1},{value:'"left"',computed:!1},{value:'"right"',computed:!1}]},required:!1},options:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"array"},required:!1},text:{defaultValue:{value:"'Hello World'",computed:!1},description:"",type:{name:"string"},required:!1}}}},"./src/components/PopOver/PopOver.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:function(){return Template},customOptions:function(){return customOptions},defaultStory:function(){return defaultStory},example:function(){return example},positionBottom:function(){return positionBottom},positionLeft:function(){return positionLeft},positionRight:function(){return positionRight},positionTop:function(){return positionTop}});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_PopOver__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/PopOver/PopOver.jsx"),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Button/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_PopOver__WEBPACK_IMPORTED_MODULE_2__.v,{...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.zx,{label:"Click Me!"})});function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Components/PopOver",component:_PopOver__WEBPACK_IMPORTED_MODULE_2__.v}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h1,{id:"popover",children:"PopOver"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Example",args:{text:"This is a PopOver"},children:Template.bind({})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default",args:{},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"position",children:"Position"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Position Top",args:{position:"to"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Position Right",args:{position:"right"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Position Bottom",args:{position:"bottom"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Position Left",args:{position:"left"},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"options",children:"Options"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Custom Options",args:{position:"bottom",options:[{label:"Edit",type:"secondary",action:()=>console.log("test")},{label:"Delete",type:"error",action:()=>console.log("test2")}]},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_PopOver__WEBPACK_IMPORTED_MODULE_2__.v})]})}const example=Template.bind({});example.storyName="Example",example.args={text:"This is a PopOver"},example.parameters={storySource:{source:'args => <PopOver {...args}><Button label="Click Me!" /></PopOver>'}};const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.args={},defaultStory.parameters={storySource:{source:'args => <PopOver {...args}><Button label="Click Me!" /></PopOver>'}};const positionTop=Template.bind({});positionTop.storyName="Position Top",positionTop.args={position:"to"},positionTop.parameters={storySource:{source:'args => <PopOver {...args}><Button label="Click Me!" /></PopOver>'}};const positionRight=Template.bind({});positionRight.storyName="Position Right",positionRight.args={position:"right"},positionRight.parameters={storySource:{source:'args => <PopOver {...args}><Button label="Click Me!" /></PopOver>'}};const positionBottom=Template.bind({});positionBottom.storyName="Position Bottom",positionBottom.args={position:"bottom"},positionBottom.parameters={storySource:{source:'args => <PopOver {...args}><Button label="Click Me!" /></PopOver>'}};const positionLeft=Template.bind({});positionLeft.storyName="Position Left",positionLeft.args={position:"left"},positionLeft.parameters={storySource:{source:'args => <PopOver {...args}><Button label="Click Me!" /></PopOver>'}};const customOptions=Template.bind({});customOptions.storyName="Custom Options",customOptions.args={position:"bottom",options:[{label:"Edit",type:"secondary",action:()=>console.log("test")},{label:"Delete",type:"error",action:()=>console.log("test2")}]},customOptions.parameters={storySource:{source:'args => <PopOver {...args}><Button label="Click Me!" /></PopOver>'}};const componentMeta={title:"Components/PopOver",component:_PopOver__WEBPACK_IMPORTED_MODULE_2__.v,tags:["stories-mdx"],includeStories:["example","defaultStory","positionTop","positionRight","positionBottom","positionLeft","customOptions"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},__webpack_exports__.default=componentMeta},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/PopOver/PopOver.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("./src/fonts/Roboto-Regular.ttf"),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);___CSS_LOADER_EXPORT___.push([module.id,'*{box-sizing:border-box;padding:0;margin:0;font-family:"Roboto"}@font-face{font-family:"Roboto";font-style:normal;font-weight:100;src:url('+___CSS_LOADER_URL_REPLACEMENT_0___+') format("truetype")}*>a,.link{color:rgba(86,141,255,.75);text-decoration:none;cursor:pointer}*>a:hover,.link:hover{color:#568dff}.PopOver{display:inline-block;position:relative;user-select:none;cursor:pointer;position:relative}.PopOver__trigger{display:flex}.PopOver__content{z-index:10000;background:#b0b0b0;min-width:10rem;position:absolute;padding:.5rem}.PopOver__content::before{content:"";display:block;width:0;height:0;position:absolute;z-index:2000}.PopOver__content.open{display:flex;flex-direction:column;gap:.5rem}.PopOver__content.closed{display:none;height:0;width:0}.PopOver__content.top{right:-0.5rem;bottom:3rem}.PopOver__content.top::before{bottom:-2rem;left:calc(50% - 1rem);border:1rem solid rgba(0,0,0,0);border-top:1rem solid #b0b0b0}.PopOver__content.bottom{right:-0.5rem;top:3rem}.PopOver__content.bottom::before{top:-2rem;left:calc(50% - 1rem);border:1rem solid rgba(0,0,0,0);border-bottom:1rem solid #b0b0b0}.PopOver__content.left{top:-0.5rem;left:-11rem}.PopOver__content.left::before{top:.5rem;right:-2rem;border:1rem solid rgba(0,0,0,0);border-left:1rem solid #b0b0b0}.PopOver__content.right{top:-0.5rem;right:-11rem}.PopOver__content.right::before{top:.5rem;left:-2rem;border:1rem solid rgba(0,0,0,0);border-right:1rem solid #b0b0b0}',"",{version:3,sources:["webpack://./src/global-styles/index.scss","webpack://./src/components/PopOver/PopOver.scss"],names:[],mappings:"AAAA,EACI,qBAAA,CACA,SAAA,CACA,QAAA,CACA,oBAAA,CAiDJ,WACI,oBAAA,CACA,iBAAA,CACA,eAAA,CACA,8DAAA,CAGJ,UAGI,0BAAA,CACA,oBAAA,CACA,cAAA,CAEA,sBAEI,aAAA,CCnER,SACI,oBAAA,CACA,iBAAA,CACA,gBAAA,CACA,cAAA,CACA,iBAAA,CAEA,kBACI,YAAA,CAGJ,kBACI,aAAA,CACA,kBDgBa,CCdb,eAAA,CACA,iBAAA,CACA,aAAA,CAEA,0BACI,UAAA,CACA,aAAA,CACA,OAAA,CACA,QAAA,CACA,iBAAA,CACA,YAAA,CAGJ,uBACI,YAAA,CACA,qBAAA,CACA,SAAA,CAGJ,yBACI,YAAA,CACA,QAAA,CACA,OAAA,CAGJ,sBACI,aAAA,CACA,WAAA,CAEA,8BACI,YAAA,CACA,qBAAA,CACA,+BAAA,CACA,6BAAA,CAIR,yBACI,aAAA,CACA,QAAA,CAEA,iCACI,SAAA,CACA,qBAAA,CACA,+BAAA,CACA,gCAAA,CAIR,uBACI,WAAA,CACA,WAAA,CAEA,+BACI,SAAA,CACA,WAAA,CACA,+BAAA,CACA,8BAAA,CAIR,wBACI,WAAA,CACA,YAAA,CAEA,gCACI,SAAA,CACA,UAAA,CACA,+BAAA,CACA,+BAAA",sourcesContent:["* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-family: 'Roboto';\n}\n\n/*\ndark: 191C24\nprimary: AF1763\nBLUE: 0D6EFD\nGREEN: 198754\nLIGHTBLUE: 0DCAF0\nRED: AB2E3C\nYellow: FFC107\n*/\n\n$box-shadow-bottom: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);\n$area-edge-border: 1px solid rgba(0, 0, 0, 0.10);\n$font-color-primary: rgba(32, 50, 87, 0.90);\n\n$font-size-small: 0.85rem;\n$font-size-medium: 1rem;\n$font-size-large: 1.5rem;\n$font-color-default: #203257;\n\n$error-color: #AB2E3C;\n$warning-color: #FFC107;\n$success-color: #198754;\n$default-color: #D9E2F4;\n$primary-color: #568DFF;\n$default-color-dark: #b0b0b0;\n$default-color-light: #e8e8e8;\n$disabled-color: #c6c6c6;\n\n$primary-background-light: white;\n\n$border-radius-default: 0.25rem;\n\n$page-width-default: 800px;\n\n// @media only screen and (min-width: 40em) {...} cellphone (640px and up)\n$breakpoint-small: 40em;\n\n// @media only screen and (min-width: 48em) {...} tablet (768px and up)\n$breakpoint-medium: 48em;\n\n// @media only screen and (min-width: 64em) {...} desktop (1024px and up)\n$breakpoint-large: 64em;\n\n// @media only screen and (min-width: 80em) {...} desktop (1280px and up)\n$breakpoint-xlarge: 80em;\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 100;\n    src: url('../fonts/Roboto-Regular.ttf') format('truetype');\n}\n\n* > a,\n.link\n{\n    color: rgba($primary-color, 0.75);\n    text-decoration: none;\n    cursor: pointer;\n\n    &:hover\n    {\n        color: rgba($primary-color, 1);\n    }\n}\n\n// // tablet\n// @media only screen and (min-width: $breakpoint-medium) {\n        \n// }\n\n// // desktop\n// @media only screen and (min-width: $breakpoint-large) {\n    \n//     flex-direction: row;\n// }","@use '../../global-styles/' as *;\n\n.PopOver {\n    display: inline-block;\n    position: relative;\n    user-select: none;\n    cursor: pointer;\n    position: relative;\n\n    &__trigger {\n        display: flex;\n    }\n\n    &__content {\n        z-index: 10000;\n        background: $default-color-dark;\n\n        min-width: 10rem;\n        position: absolute;\n        padding: 0.5rem;\n\n        &::before {\n            content: '';\n            display: block;\n            width: 0;\n            height: 0;\n            position: absolute;\n            z-index: 2000;\n        }\n\n        &.open {\n            display: flex;\n            flex-direction: column;\n            gap: 0.5rem;\n        }\n\n        &.closed {\n            display: none;\n            height: 0;\n            width: 0;\n        }\n\n        &.top {\n            right: -0.5rem;\n            bottom: 3rem;\n\n            &::before {\n                bottom: -2rem;\n                left: calc(50% - 1rem);\n                border: 1rem solid transparent;\n                border-top: 1rem solid $default-color-dark;\n            }\n        }\n\n        &.bottom {\n            right: -0.5rem;\n            top: 3rem;\n\n            &::before {\n                top: -2rem;\n                left: calc(50% - 1rem);\n                border: 1rem solid transparent;\n                border-bottom: 1rem solid $default-color-dark;\n            }\n        }\n\n        &.left {\n            top: -0.5rem;\n            left: -11rem;\n\n            &::before {\n                top: 0.5rem;\n                right: -2rem;\n                border: 1rem solid transparent;\n                border-left: 1rem solid $default-color-dark;\n            }\n        }\n\n        &.right {\n            top: -0.5rem;\n            right: -11rem;\n\n            &::before {\n                top: 0.5rem;\n                left: -2rem;\n                border: 1rem solid transparent;\n                border-right: 1rem solid $default-color-dark;\n            }\n        }\n    }\n}\n"],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___}}]);