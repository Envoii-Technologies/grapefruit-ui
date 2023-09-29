"use strict";(self.webpackChunk_envoii_technologies_grapefruit_ui=self.webpackChunk_envoii_technologies_grapefruit_ui||[]).push([[9060],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Xz:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/ContentCard/ContentCard.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{u:function(){return ContentCard}});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ContentCard=({className:className,children:children,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:`ContentCard ${void 0!==className?className:""}`,children:children});ContentCard.displayName="ContentCard",ContentCard.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,childen:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().element),prop_types__WEBPACK_IMPORTED_MODULE_2___default().element])},ContentCard.defaultProps={className:void 0,children:void 0},ContentCard.__docgenInfo={description:"",methods:[],displayName:"ContentCard",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"Custom class name of Component",type:{name:"string"},required:!1},children:{defaultValue:{value:"undefined",computed:!0},required:!1},childen:{description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"element"}},{name:"element"}]},required:!1}}}},"./src/components/ContentCard/ContentCardBody.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{u:function(){return ContentCardBody}});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/ContentCard/ContentCard.scss");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ContentCardBody=({className:className,children:children,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:`ContentCardBody ${void 0!==className?className:""}`,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"ContentCardBody__wrapper",children:children})});ContentCardBody.displayName="ContentCardBody",ContentCardBody.__docgenInfo={description:"",methods:[],displayName:"ContentCardBody"}},"./src/components/ContentCard/ContentCardFooter.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Q:function(){return ContentCardFooter}});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/ContentCard/ContentCard.scss");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ContentCardFooter=({className:className,children:children,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:`ContentCardFooter ${void 0!==className?className:""}`,children:children});ContentCardFooter.displayName="ContentCardFooter",ContentCardFooter.__docgenInfo={description:"",methods:[],displayName:"ContentCardFooter"}},"./src/components/ContentCard/ContentCardHeader.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{L:function(){return ContentCardHeader}});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/ContentCard/ContentCard.scss");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ContentCardHeader=({className:className,children:children,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:`ContentCardHeader ${void 0!==className?className:""}`,children:children});ContentCardHeader.displayName="ContentCardHeader",ContentCardHeader.__docgenInfo={description:"",methods:[],displayName:"ContentCardHeader"}},"./src/components/ContentCard/ContentCard.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TemplatOnlyBody:function(){return TemplatOnlyBody},Template:function(){return Template},TemplateNoFooter:function(){return TemplateNoFooter},TemplateNoHeader:function(){return TemplateNoHeader},TemplateWithButtonsInFooter:function(){return TemplateWithButtonsInFooter},customContent:function(){return customContent},defaultStory:function(){return defaultStory},example:function(){return example},onlyBody:function(){return onlyBody},withoutFooter:function(){return withoutFooter},withoutHeader:function(){return withoutHeader}});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_ContentCard__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ContentCard/ContentCard.jsx"),_ContentCardHeader__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ContentCard/ContentCardHeader.jsx"),_ContentCardBody__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/ContentCard/ContentCardBody.jsx"),_ContentCardFooter__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/ContentCard/ContentCardFooter.jsx"),_Button_Button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Button/Button.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>{const _components=Object.assign({div:"div"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_8__.ah)());return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.div,{style:{width:"500px",height:"300px",display:"flex"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_ContentCard__WEBPACK_IMPORTED_MODULE_2__.u,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ContentCardHeader__WEBPACK_IMPORTED_MODULE_3__.L,{children:"Content Header"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ContentCardBody__WEBPACK_IMPORTED_MODULE_4__.u,{children:"Content Card"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ContentCardFooter__WEBPACK_IMPORTED_MODULE_5__.Q,{children:"Content Footer"})]})})},TemplateNoHeader=args=>{const _components=Object.assign({div:"div"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_8__.ah)());return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.div,{style:{width:"500px",height:"300px",display:"flex"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_ContentCard__WEBPACK_IMPORTED_MODULE_2__.u,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ContentCardBody__WEBPACK_IMPORTED_MODULE_4__.u,{children:"Content Card"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ContentCardFooter__WEBPACK_IMPORTED_MODULE_5__.Q,{children:"Content Footer"})]})})},TemplateNoFooter=args=>{const _components=Object.assign({div:"div"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_8__.ah)());return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.div,{style:{width:"500px",height:"300px",display:"flex"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_ContentCard__WEBPACK_IMPORTED_MODULE_2__.u,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ContentCardHeader__WEBPACK_IMPORTED_MODULE_3__.L,{children:"Content Header"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ContentCardBody__WEBPACK_IMPORTED_MODULE_4__.u,{children:"Content Card"})]})})},TemplatOnlyBody=args=>{const _components=Object.assign({div:"div"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_8__.ah)());return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.div,{style:{width:"500px",height:"300px",display:"flex"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ContentCard__WEBPACK_IMPORTED_MODULE_2__.u,{...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ContentCardBody__WEBPACK_IMPORTED_MODULE_4__.u,{children:"Content Card"})})})},TemplateWithButtonsInFooter=args=>{const _components=Object.assign({div:"div"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_8__.ah)());return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.div,{style:{width:"500px",height:"300px",display:"flex"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_ContentCard__WEBPACK_IMPORTED_MODULE_2__.u,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ContentCardHeader__WEBPACK_IMPORTED_MODULE_3__.L,{children:"Content Header"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ContentCardBody__WEBPACK_IMPORTED_MODULE_4__.u,{children:"Content Card"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_ContentCardFooter__WEBPACK_IMPORTED_MODULE_5__.Q,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_6__.zx,{label:"Prev",type:"primary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_6__.zx,{label:"Next",type:"primary"})]})]})})};function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_8__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Components/ContentCard",component:_ContentCard__WEBPACK_IMPORTED_MODULE_2__.u}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.h1,{id:"contentcard",children:"ContentCard"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.p,{children:"The ContentCard component provides a flexible content container, for various possible use cases."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Example",args:{},children:Template.bind({})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.p,{children:"..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default",args:{},children:TemplateNoFooter.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.p,{children:"The ContentCard component contains different subComponents for the header, body and footer areas,\nit is entirely possible to create a card without either of these, as shown below:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.h3,{id:"without-header",children:"Without Header"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Without Header",args:{},children:TemplateNoHeader.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.h3,{id:"without-footer",children:"Without Footer"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Without Footer",args:{},children:TemplateNoHeader.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.h3,{id:"only-body",children:"Only Body"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Only Body",args:{},children:TemplatOnlyBody.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.p,{children:"Either subcomponent can take any child content, for example the footer could contain a set of buttons:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Custom Content",args:{},children:TemplateWithButtonsInFooter.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_ContentCard__WEBPACK_IMPORTED_MODULE_2__.u})]})}const example=Template.bind({});example.storyName="Example",example.args={},example.parameters={storySource:{source:'args => <div style={{\n  width: "500px",\n  height: "300px",\n  display: "flex"\n}}>\n        <ContentCard {...args}>\n            <ContentCardHeader>Content Header</ContentCardHeader>\n            <ContentCardBody>Content Card</ContentCardBody>\n            <ContentCardFooter>Content Footer</ContentCardFooter>\n        </ContentCard>\n    </div>'}};const defaultStory=TemplateNoFooter.bind({});defaultStory.storyName="Default",defaultStory.args={},defaultStory.parameters={storySource:{source:'args => <div style={{\n  width: "500px",\n  height: "300px",\n  display: "flex"\n}}>\n        <ContentCard {...args}>\n            <ContentCardHeader>Content Header</ContentCardHeader>\n            <ContentCardBody>Content Card</ContentCardBody>\n        </ContentCard>\n    </div>'}};const withoutHeader=TemplateNoHeader.bind({});withoutHeader.storyName="Without Header",withoutHeader.args={},withoutHeader.parameters={storySource:{source:'args => <div style={{\n  width: "500px",\n  height: "300px",\n  display: "flex"\n}}>\n        <ContentCard {...args}>\n            <ContentCardBody>Content Card</ContentCardBody>\n            <ContentCardFooter>Content Footer</ContentCardFooter>\n        </ContentCard>\n    </div>'}};const withoutFooter=TemplateNoHeader.bind({});withoutFooter.storyName="Without Footer",withoutFooter.args={},withoutFooter.parameters={storySource:{source:'args => <div style={{\n  width: "500px",\n  height: "300px",\n  display: "flex"\n}}>\n        <ContentCard {...args}>\n            <ContentCardBody>Content Card</ContentCardBody>\n            <ContentCardFooter>Content Footer</ContentCardFooter>\n        </ContentCard>\n    </div>'}};const onlyBody=TemplatOnlyBody.bind({});onlyBody.storyName="Only Body",onlyBody.args={},onlyBody.parameters={storySource:{source:'args => <div style={{\n  width: "500px",\n  height: "300px",\n  display: "flex"\n}}>\n        <ContentCard {...args}>\n            <ContentCardBody>Content Card</ContentCardBody>\n        </ContentCard>\n    </div>'}};const customContent=TemplateWithButtonsInFooter.bind({});customContent.storyName="Custom Content",customContent.args={},customContent.parameters={storySource:{source:'args => <div style={{\n  width: "500px",\n  height: "300px",\n  display: "flex"\n}}>\n        <ContentCard {...args}>\n            <ContentCardHeader>Content Header</ContentCardHeader>\n            <ContentCardBody>Content Card</ContentCardBody>\n            <ContentCardFooter>\n\t\t\t\t<Button label="Prev" type="primary" />\n\t\t\t\t<Button label="Next" type="primary" />\n\t\t\t</ContentCardFooter>\n        </ContentCard>\n    </div>'}};const componentMeta={title:"Components/ContentCard",component:_ContentCard__WEBPACK_IMPORTED_MODULE_2__.u,tags:["stories-mdx"],includeStories:["example","defaultStory","withoutHeader","withoutFooter","onlyBody","customContent"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_8__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},__webpack_exports__.default=componentMeta},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/ContentCard/ContentCard.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("./src/fonts/Roboto-Regular.ttf"),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);___CSS_LOADER_EXPORT___.push([module.id,'*{box-sizing:border-box;padding:0;margin:0;font-family:"Roboto"}@font-face{font-family:"Roboto";font-style:normal;font-weight:100;src:url('+___CSS_LOADER_URL_REPLACEMENT_0___+') format("truetype")}*>a,.link{color:rgba(86,141,255,.75);text-decoration:none;cursor:pointer}*>a:hover,.link:hover{color:#568dff}.ContentCard{border-radius:.25rem;background:#fff;box-shadow:0px 4px 4px 0px rgba(0,0,0,.1);display:flex;flex-direction:column;flex-grow:1}.ContentCardHeader{height:4rem;padding:.5rem;flex-shrink:0;display:flex;align-items:center;border-bottom:1px solid rgba(0,0,0,.1)}.ContentCardBody{flex-grow:1;padding:.5rem;min-height:10rem;max-height:100%;overflow-y:scroll}.ContentCardBody__wrapper{justify-content:stretch;display:flex;align-items:flex-start}.ContentCardFooter{border-top:1px solid rgba(0,0,0,.1);height:3rem;padding:.5rem;flex-shrink:0;display:flex;align-items:center;gap:.5rem;justify-content:center}',"",{version:3,sources:["webpack://./src/global-styles/index.scss","webpack://./src/components/ContentCard/ContentCard.scss"],names:[],mappings:"AAAA,EACI,qBAAA,CACA,SAAA,CACA,QAAA,CACA,oBAAA,CAiDJ,WACI,oBAAA,CACA,iBAAA,CACA,eAAA,CACA,8DAAA,CAGJ,UAGI,0BAAA,CACA,oBAAA,CACA,cAAA,CAEA,sBAEI,aAAA,CCnER,aACI,oBDkCoB,CCjCpB,eD+BuB,CC9BvB,yCDYgB,CCXhB,YAAA,CACA,qBAAA,CACA,WAAA,CAGJ,mBACI,WAAA,CACA,aAAA,CACA,aAAA,CACA,YAAA,CACA,kBAAA,CACA,sCDCe,CCEnB,iBACI,WAAA,CACA,aAAA,CACA,gBAAA,CAEA,eAAA,CACA,iBAAA,CACA,0BACI,uBAAA,CACA,YAAA,CACA,sBAAA,CAIR,mBACI,mCDjBe,CCkBf,WAAA,CACA,aAAA,CACA,aAAA,CACA,YAAA,CACA,kBAAA,CACA,SAAA,CACA,sBAAA",sourcesContent:["* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-family: 'Roboto';\n}\n\n/*\ndark: 191C24\nprimary: AF1763\nBLUE: 0D6EFD\nGREEN: 198754\nLIGHTBLUE: 0DCAF0\nRED: AB2E3C\nYellow: FFC107\n*/\n\n$box-shadow-bottom: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);\n$area-edge-border: 1px solid rgba(0, 0, 0, 0.10);\n$font-color-primary: rgba(32, 50, 87, 0.90);\n\n$font-size-small: 0.85rem;\n$font-size-medium: 1rem;\n$font-size-large: 1.5rem;\n$font-color-default: #203257;\n\n$error-color: #AB2E3C;\n$warning-color: #FFC107;\n$success-color: #198754;\n$default-color: #D9E2F4;\n$primary-color: #568DFF;\n$default-color-dark: #b0b0b0;\n$default-color-light: #e8e8e8;\n$disabled-color: #c6c6c6;\n\n$primary-background-light: white;\n\n$border-radius-default: 0.25rem;\n\n$page-width-default: 800px;\n\n// @media only screen and (min-width: 40em) {...} cellphone (640px and up)\n$breakpoint-small: 40em;\n\n// @media only screen and (min-width: 48em) {...} tablet (768px and up)\n$breakpoint-medium: 48em;\n\n// @media only screen and (min-width: 64em) {...} desktop (1024px and up)\n$breakpoint-large: 64em;\n\n// @media only screen and (min-width: 80em) {...} desktop (1280px and up)\n$breakpoint-xlarge: 80em;\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 100;\n    src: url('../fonts/Roboto-Regular.ttf') format('truetype');\n}\n\n* > a,\n.link\n{\n    color: rgba($primary-color, 0.75);\n    text-decoration: none;\n    cursor: pointer;\n\n    &:hover\n    {\n        color: rgba($primary-color, 1);\n    }\n}\n\n// // tablet\n// @media only screen and (min-width: $breakpoint-medium) {\n        \n// }\n\n// // desktop\n// @media only screen and (min-width: $breakpoint-large) {\n    \n//     flex-direction: row;\n// }","@use '../../global-styles/' as *;\n\n.ContentCard {\n    border-radius: $border-radius-default;\n    background: $primary-background-light;\n    box-shadow: $box-shadow-bottom;\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n}\n\n.ContentCardHeader {\n    height: 4rem;\n    padding: 0.5rem;\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    border-bottom: $area-edge-border;\n}\n\n.ContentCardBody {\n    flex-grow: 1;\n    padding: 0.5rem;\n    min-height: 10rem;\n    // max-height: calc(100vh - 16rem);\n    max-height: 100%;\n    overflow-y: scroll;\n    &__wrapper {\n        justify-content: stretch;\n        display: flex;\n        align-items: flex-start;\n    }\n}\n\n.ContentCardFooter {\n    border-top: $area-edge-border;\n    height: 3rem;\n    padding: 0.5rem;\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    justify-content: center;\n}\n"],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"./src/components/ContentCard/ContentCard.scss":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_ContentCard_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/ContentCard/ContentCard.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_ContentCard_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_ContentCard_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_ContentCard_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_ContentCard_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals}}]);