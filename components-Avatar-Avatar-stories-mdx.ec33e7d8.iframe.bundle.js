/*! For license information please see components-Avatar-Avatar-stories-mdx.ec33e7d8.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_envoii_technologies_grapefruit_ui=self.webpackChunk_envoii_technologies_grapefruit_ui||[]).push([[836],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Xz:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/Avatar/Avatar.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{q:function(){return Avatar_Avatar_Avatar}});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Avatar=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/Avatar/Avatar.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Avatar.Z,options),Avatar.Z&&Avatar.Z.locals&&Avatar.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AvatarSizes={small:"small",medium:"medium",large:"large"},Avatar_Avatar_Avatar=({className:className,name:name,image:image,size:size,...props})=>{return(0,jsx_runtime.jsx)("div",{className:`\n\t\t\tAvatar ${void 0!==className?className:""}\n\t\t\t${size===AvatarSizes.small?"small":size===AvatarSizes.medium?"medium":"large"}\n\t\t\t${void 0!==image?"with-image":""}\n\t\t\t`,...props,children:image?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("img",{className:"Avatar__image",src:image,alt:"user-image",style:{display:"flex"}})}):(0,jsx_runtime.jsx)("h1",{className:"Avatar__name",children:(str=name,str.split(" ").map((word=>word[0])).join("").toUpperCase())})});var str};Avatar_Avatar_Avatar.displayName="Avatar",Avatar_Avatar_Avatar.propTypes={className:prop_types_default().string,size:prop_types_default().oneOf(Object.keys(AvatarSizes)),name:prop_types_default().string,image:prop_types_default().string},Avatar_Avatar_Avatar.defaultProps={className:void 0,size:AvatarSizes.medium,name:"Jane Doe",image:void 0},Avatar_Avatar_Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"Custom class name of Component",type:{name:"string"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Size of avatar image",type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]},required:!1},name:{defaultValue:{value:"'Jane Doe'",computed:!1},description:"Initials shown in Avatar",type:{name:"string"},required:!1},image:{defaultValue:{value:"undefined",computed:!0},description:"Path to image file",type:{name:"string"},required:!1}}}},"./src/components/Avatar/Avatar.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:function(){return Template},customImage:function(){return customImage},customName:function(){return customName},default:function(){return Avatar_stories},defaultStory:function(){return defaultStory},example:function(){return example},largeImageSize:function(){return largeImageSize},letterFallback:function(){return letterFallback},mediumImageSize:function(){return mediumImageSize},smallImageSize:function(){return smallImageSize}});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),Avatar=__webpack_require__("./src/components/Avatar/Avatar.jsx"),testuser_namespaceObject=__webpack_require__.p+"static/media/testuser.b5a7ffcd.png",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,jsx_runtime.jsx)(Avatar.q,{...args});function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code",em:"em",blockquote:"blockquote",strong:"strong"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Avatar",component:Avatar.q}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"avatar",children:"Avatar"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A component representing a user, by showing the first letter his first and last name, or an image."}),"\n",(0,jsx_runtime.jsx)(dist.oG,{name:"Example",args:{name:"Koray Uygun",image:testuser_namespaceObject,size:"large"},children:Template.bind({})}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"As default, the avatar components name property is set to Jane Doe, resulting in the shown letters J (fistname) and D (lastname)."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",args:{},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-name",children:"Custom Name"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"name"})," property can be set to a given name (a ",(0,jsx_runtime.jsx)(_components.code,{children:"string"})," with 1, 2 or more words), resulting in the first letters of the first and last name being shown in the component."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.em,{children:["In this example, the ",(0,jsx_runtime.jsx)(_components.code,{children:"name"})," prop is set to ",(0,jsx_runtime.jsx)(_components.code,{children:"Max Mustermann"}),"."]})}),"\n",(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"TIPP:"})," Said string should not contain more than two words, as the font will become smaller, to fit into the component shape, and at some point might have unwanted side-effects."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Custom Name",args:{name:"Max Mustermann"},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"letter-fallback",children:"Letter fallback"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["If the ",(0,jsx_runtime.jsx)(_components.code,{children:"name"})," property only contains a ",(0,jsx_runtime.jsx)(_components.code,{children:"string"})," with one word, only one letter is shown in the component."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.em,{children:["In this example, the ",(0,jsx_runtime.jsx)(_components.code,{children:"name"})," prop is set to ",(0,jsx_runtime.jsx)(_components.code,{children:"Richard"}),"."]})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Letter fallback",args:{name:"Richard"},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"image",children:"Image"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["If the ",(0,jsx_runtime.jsx)(_components.code,{children:"image"})," property contains a ",(0,jsx_runtime.jsx)(_components.code,{children:"string"})," containing the path to a user image, said imagewill be shown, instead of the above letter examples."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Custom Image",args:{name:"Koray Uygun",image:testuser_namespaceObject},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The size of the Avatar Component can be changed by passing ",(0,jsx_runtime.jsx)(_components.code,{children:"small"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"medium"})," or ",(0,jsx_runtime.jsx)(_components.code,{children:"large"})," as ",(0,jsx_runtime.jsx)(_components.code,{children:"string"})," to the ",(0,jsx_runtime.jsx)(_components.code,{children:"size"})," property, changing the size of the image to 40x40px, 80x80px and 109x109px respectively."]}),"\n",(0,jsx_runtime.jsxs)(dist.Xz,{children:[(0,jsx_runtime.jsx)(dist.oG,{name:"Small Image Size",args:{name:"Koray Uygun",image:testuser_namespaceObject,size:"small"},children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Medium Image Size",args:{name:"Koray Uygun",image:testuser_namespaceObject,size:"medium"},children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Large Image Size",args:{name:"Koray Uygun",image:testuser_namespaceObject,size:"large"},children:Template.bind({})})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:Avatar.q}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Note:"})," This component supplies a className property, to call the component with a custom class name, if it needs to be specifically adressed."]})]})}const example=Template.bind({});example.storyName="Example",example.args={name:"Koray Uygun",image:testuser_namespaceObject,size:"large"},example.parameters={storySource:{source:"args => <Avatar {...args} />"}};const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.args={},defaultStory.parameters={storySource:{source:"args => <Avatar {...args} />"}};const customName=Template.bind({});customName.storyName="Custom Name",customName.args={name:"Max Mustermann"},customName.parameters={storySource:{source:"args => <Avatar {...args} />"}};const letterFallback=Template.bind({});letterFallback.storyName="Letter fallback",letterFallback.args={name:"Richard"},letterFallback.parameters={storySource:{source:"args => <Avatar {...args} />"}};const customImage=Template.bind({});customImage.storyName="Custom Image",customImage.args={name:"Koray Uygun",image:testuser_namespaceObject},customImage.parameters={storySource:{source:"args => <Avatar {...args} />"}};const smallImageSize=Template.bind({});smallImageSize.storyName="Small Image Size",smallImageSize.args={name:"Koray Uygun",image:testuser_namespaceObject,size:"small"},smallImageSize.parameters={storySource:{source:"args => <Avatar {...args} />"}};const mediumImageSize=Template.bind({});mediumImageSize.storyName="Medium Image Size",mediumImageSize.args={name:"Koray Uygun",image:testuser_namespaceObject,size:"medium"},mediumImageSize.parameters={storySource:{source:"args => <Avatar {...args} />"}};const largeImageSize=Template.bind({});largeImageSize.storyName="Large Image Size",largeImageSize.args={name:"Koray Uygun",image:testuser_namespaceObject,size:"large"},largeImageSize.parameters={storySource:{source:"args => <Avatar {...args} />"}};const componentMeta={title:"Components/Avatar",component:Avatar.q,tags:["stories-mdx"],includeStories:["example","defaultStory","customName","letterFallback","customImage","smallImageSize","mediumImageSize","largeImageSize"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};var Avatar_stories=componentMeta},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/Avatar/Avatar.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("./src/fonts/Roboto-Regular.ttf"),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);___CSS_LOADER_EXPORT___.push([module.id,'*{box-sizing:border-box;padding:0;margin:0;font-family:"Roboto"}@font-face{font-family:"Roboto";font-style:normal;font-weight:100;src:url('+___CSS_LOADER_URL_REPLACEMENT_0___+') format("truetype")}.Avatar{background:#bcbcbc;aspect-ratio:1/1;display:flex;justify-content:center;align-items:center;overflow:hidden}.Avatar.with-image{align-items:flex-start}.Avatar__name{color:#fff}.Avatar__image{width:100%}.Avatar.small{font-size:.5em;border-radius:8px;width:2rem;height:2rem}.Avatar.medium{font-size:1em;border-radius:4px;width:80px;height:80px}.Avatar.large{font-size:1.25em;border-radius:8px;width:109px;height:109px}',"",{version:3,sources:["webpack://./src/global-styles/index.scss","webpack://./src/components/Avatar/Avatar.scss"],names:[],mappings:"AAAA,EACI,qBAAA,CACA,SAAA,CACA,QAAA,CACA,oBAAA,CAiDJ,WACI,oBAAA,CACA,iBAAA,CACA,eAAA,CACA,8DAAA,CCvDJ,QACI,kBAAA,CACA,gBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,eAAA,CAEA,mBACI,sBAAA,CAGJ,cACI,UAAA,CAIJ,eACI,UAAA,CAGJ,cACI,cAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CAGJ,eACI,aAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CAGJ,cACI,gBAAA,CACA,iBAAA,CACA,WAAA,CACA,YAAA",sourcesContent:["* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-family: 'Roboto';\n}\n\n/*\ndark: 191C24\nprimary: AF1763\nBLUE: 0D6EFD\nGREEN: 198754\nLIGHTBLUE: 0DCAF0\nRED: AB2E3C\nYellow: FFC107\n*/\n\n$box-shadow-bottom: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);\n$area-edge-border: 1px solid rgba(0, 0, 0, 0.10);\n$font-color-primary: rgba(32, 50, 87, 0.90);\n\n$font-size-small: 0.85rem;\n$font-size-medium: 1rem;\n$font-size-large: 1.5rem;\n$font-color-default: #203257;\n\n$error-color: #AB2E3C;\n$warning-color: #FFC107;\n$success-color: #198754;\n$default-color: #D9E2F4;\n$primary-color: #568DFF;\n$default-color-dark: #b0b0b0;\n$default-color-light: #e8e8e8;\n$disabled-color: #c6c6c6;\n\n$primary-background-light: white;\n\n$border-radius-default: 0.25rem;\n\n$page-width-default: 800px;\n\n// @media only screen and (min-width: 40em) {...} cellphone (640px and up)\n$breakpoint-small: 40em;\n\n// @media only screen and (min-width: 48em) {...} tablet (768px and up)\n$breakpoint-medium: 48em;\n\n// @media only screen and (min-width: 64em) {...} desktop (1024px and up)\n$breakpoint-large: 64em;\n\n// @media only screen and (min-width: 80em) {...} desktop (1280px and up)\n$breakpoint-xlarge: 80em;\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 100;\n    src: url('../fonts/Roboto-Regular.ttf') format('truetype');\n}\n\n// // tablet\n// @media only screen and (min-width: $breakpoint-medium) {\n        \n// }\n\n// // desktop\n// @media only screen and (min-width: $breakpoint-large) {\n    \n//     flex-direction: row;\n// }","@use '../../global-styles/' as *;\n\n.Avatar {\n    background: #bcbcbc;\n    aspect-ratio: 1/1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n\n    &.with-image {\n        align-items: flex-start;\n    }\n\n    &__name {\n        color: white;\n        // font-family: $font-family;\n    }\n\n    &__image {\n        width: 100%;\n    }\n\n    &.small {\n        font-size: 0.5em;\n        border-radius: 8px;\n        width: 2rem;\n        height: 2rem;\n    }\n\n    &.medium {\n        font-size: 1em;\n        border-radius: 4px;\n        width: 80px;\n        height: 80px;\n    }\n\n    &.large {\n        font-size: 1.25em;\n        border-radius: 8px;\n        width: 109px;\n        height: 109px;\n    }\n}"],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);