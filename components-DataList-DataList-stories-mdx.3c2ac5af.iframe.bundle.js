/*! For license information please see components-DataList-DataList-stories-mdx.3c2ac5af.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_envoii_technologies_grapefruit_ui=self.webpackChunk_envoii_technologies_grapefruit_ui||[]).push([[999],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Xz:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/DataList/DataList.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:function(){return Template},default:function(){return DataList_stories},defaultStory:function(){return defaultStory}});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),DataCard=__webpack_require__("./src/components/DataCard/DataCard.jsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),DataList=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/DataList/DataList.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(DataList.Z,options),DataList.Z&&DataList.Z.locals&&DataList.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DataList_DataList_DataList=({className:className,...props})=>(0,jsx_runtime.jsx)("div",{className:`DataList ${void 0!==className?className:""}`,children:[0,1,2].map(((item,i)=>(0,jsx_runtime.jsx)(DataCard.I,{isFluid:!0})))});DataList_DataList_DataList.displayName="DataList",DataList_DataList_DataList.propTypes={className:prop_types_default().string},DataList_DataList_DataList.defaultProps={className:void 0},DataList_DataList_DataList.__docgenInfo={description:"",methods:[],displayName:"DataList",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"Custom class name of Component",type:{name:"string"},required:!1}}};const Template=args=>(0,jsx_runtime.jsx)(DataList_DataList_DataList,{...args});function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Lists/DataList",component:DataList_DataList_DataList}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"datalist",children:"DataList"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"..."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"..."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",args:{},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:DataList_DataList_DataList})]})}const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.args={},defaultStory.parameters={storySource:{source:"args => <DataList {...args} />"}};const componentMeta={title:"Components/Lists/DataList",component:DataList_DataList_DataList,tags:["stories-mdx"],includeStories:["defaultStory"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};var DataList_stories=componentMeta},"./src/components/DataCard/DataCard.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{I:function(){return DataCard_DataCard_DataCard}});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),DataCard=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/DataCard/DataCard.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(DataCard.Z,options),DataCard.Z&&DataCard.Z.locals&&DataCard.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DataCard_DataCard_DataCard=({className:className,...props})=>(0,jsx_runtime.jsx)("div",{className:`DataCard ${void 0!==className?className:""}`,children:"DataCard Initiated!"});DataCard_DataCard_DataCard.displayName="DataCard",DataCard_DataCard_DataCard.propTypes={className:prop_types_default().string},DataCard_DataCard_DataCard.defaultProps={className:void 0},DataCard_DataCard_DataCard.__docgenInfo={description:"",methods:[],displayName:"DataCard",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"Custom class name of Component",type:{name:"string"},required:!1}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/DataCard/DataCard.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"*{box-sizing:border-box;padding:0;margin:0}","",{version:3,sources:["webpack://./src/global-styles/index.scss"],names:[],mappings:"AAAA,EACI,qBAAA,CACA,SAAA,CACA,QAAA",sourcesContent:["* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n@mixin hover-animation {\n    transition-property: transform;\n    transition-timing-function: ease;\n    transition-duration: 0.3s;\n    transition-delay: 0s;\n}\n\n@mixin hover-scale {\n    transform: scale(1.05);\n}\n\n$font-color: rgb(22, 22, 22);\n$font-size: 1em;\n$font-family: Arial, Helvetica, sans-serif;\n\n$page-background: rgb(250, 250, 250);\n\n$card-shadow-light: rgba(0, 0, 0, 0.05) 0px 0px 40px 0px;\n$card-shadow-medium: rgba(0, 0, 0, 0.10) 0px 0px 40px 0px;\n$card-shadow-hard: rgba(0, 0, 0, 0.15) 0px 0px 40px 0px;\n$card-background: rgb(255, 255, 255);\n$card-border-radius: 0.5em;\n"],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/DataList/DataList.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"*{box-sizing:border-box;padding:0;margin:0}.DataList{display:flex;flex-direction:column;gap:4px}","",{version:3,sources:["webpack://./src/global-styles/index.scss","webpack://./src/components/DataList/DataList.scss"],names:[],mappings:"AAAA,EACI,qBAAA,CACA,SAAA,CACA,QAAA,CCDJ,UAEI,YAAA,CACA,qBAAA,CACA,OAAA",sourcesContent:["* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n@mixin hover-animation {\n    transition-property: transform;\n    transition-timing-function: ease;\n    transition-duration: 0.3s;\n    transition-delay: 0s;\n}\n\n@mixin hover-scale {\n    transform: scale(1.05);\n}\n\n$font-color: rgb(22, 22, 22);\n$font-size: 1em;\n$font-family: Arial, Helvetica, sans-serif;\n\n$page-background: rgb(250, 250, 250);\n\n$card-shadow-light: rgba(0, 0, 0, 0.05) 0px 0px 40px 0px;\n$card-shadow-medium: rgba(0, 0, 0, 0.10) 0px 0px 40px 0px;\n$card-shadow-hard: rgba(0, 0, 0, 0.15) 0px 0px 40px 0px;\n$card-background: rgb(255, 255, 255);\n$card-border-radius: 0.5em;\n","@use '../../global-styles/' as *;\n\n.DataList\n{\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n"],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);