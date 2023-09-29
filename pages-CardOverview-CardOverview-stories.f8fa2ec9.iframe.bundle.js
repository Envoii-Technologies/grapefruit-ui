"use strict";(self.webpackChunk_envoii_technologies_grapefruit_ui=self.webpackChunk_envoii_technologies_grapefruit_ui||[]).push([[7276],{"./src/pages/CardOverview/CardOverview.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return CardOverview_stories}});var react=__webpack_require__("./node_modules/react/index.js"),mockUser=__webpack_require__("./src/data/mockUser.js"),mockMenuItems=__webpack_require__("./src/data/mockMenuItems.js"),MockCards=[{title:"Montageanleitung Modul 365",description:"Dies ist eine Montageanleitung",released:!1,deleted:!1,version:"1.0",createdBy:"Frederik Reich",updatedBy:"Jan Treffon",createdAt:1695463049,updatedAt:1695981449},{title:"Bedienung Hydraulikpresse",description:"Wie bedient man die Hydraulikpresse?",released:!1,deleted:!1,version:"1.1",createdBy:"Frederik Reich",updatedBy:"Frederik Reich",createdAt:1695895049,updatedAt:1695895049},{title:"Verfahrensleitung",description:"",released:!1,deleted:!0,version:"1.0",createdBy:"Koray Uygun",updatedBy:"Jan Treffon",createdAt:1679997449,updatedAt:1687427849},{title:"Wartungsanleitung für CNC-Maschinen",description:"Tipps und Tricks zur Wartung von CNC-Maschinen",released:!0,deleted:!1,version:"1.3",createdBy:"Maria Schmidt",updatedBy:"Maria Schmidt",createdAt:1696306249,updatedAt:1696306249},{title:"Programmieranleitung für Roboterarme",description:"Schritte zur Programmierung von Roboterarmen",released:!0,deleted:!1,version:"1.2",createdBy:"Thomas Müller",updatedBy:"Thomas Müller",createdAt:1696261449,updatedAt:1696261449},{title:"Instandhaltung von Förderbändern",description:"Wartung und Instandhaltung von Förderbandanlagen",released:!0,deleted:!1,version:"1.4",createdBy:"Sophia Wagner",updatedBy:"Sophia Wagner",createdAt:1696257049,updatedAt:1696257049},{title:"Anleitung für Schweißroboter",description:"Bedienung und Programmierung von Schweißrobotern",released:!0,deleted:!1,version:"1.5",createdBy:"Markus Becker",updatedBy:"Markus Becker",createdAt:1696229449,updatedAt:1696229449},{title:"Bedienungshandbuch für 3D-Drucker",description:"Schritte zur Nutzung von 3D-Druckern",released:!0,deleted:!1,version:"1.1",createdBy:"Laura Schneider",updatedBy:"Jan Treffon",createdAt:1696211849,updatedAt:1695981449},{title:"Anleitung für CNC-Fräsmaschinen",description:"Programmierung und Betrieb von CNC-Fräsmaschinen",released:!0,deleted:!1,version:"1.3",createdBy:"Paul Fischer",updatedBy:"Paul Fischer",createdAt:1696187849,updatedAt:1696187849},{title:"Wartungshandbuch für Elektromotoren",description:"Wartung von Elektromotoren in Industrieanlagen",released:!0,deleted:!1,version:"1.2",createdBy:"Sophia Wagner",updatedBy:"Sophia Wagner",createdAt:1696163849,updatedAt:1696163849},{title:"Betriebsanleitung für CNC-Plasmaschneider",description:"Lernen Sie, wie Sie unseren CNC-Plasmaschneider verwenden, um präzise Schnitte in Metallmaterialien durchzuführen.",released:!0,deleted:!1,version:"1.1",createdBy:"Julia Schmitt",updatedBy:"Julia Schmitt",updatedAt:1696261449,updatedAt:1696261449}],src=__webpack_require__("./src/index.js"),index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),free_solid_svg_icons=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),CardOverview=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/pages/CardOverview/CardOverview.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CardOverview.Z,options),CardOverview.Z&&CardOverview.Z.locals&&CardOverview.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CardOverview_CardOverview_CardOverview=({userData:userData,userMenu:userMenu,cardsData:cardsData})=>{const[showFilterMenu,setShowFilterMenu]=(0,react.useState)(!1),[searchInput,setSearchInput]=(0,react.useState)(""),[searchTerm,setSearchTerm]=(0,react.useState)("");return(0,react.useEffect)((()=>{searchInput.length<2?setSearchTerm(""):setSearchTerm(searchInput)}),[searchInput]),(0,jsx_runtime.jsx)("div",{className:"Page",children:(0,jsx_runtime.jsxs)("div",{className:"Page__wrapper",children:[(0,jsx_runtime.jsx)(src.Ex,{userData:userData,menuData:userMenu,isMenuExpanded:!0,activeMenuItem:"/guides"}),(0,jsx_runtime.jsxs)("div",{className:"Page__wrapper__main",children:[(0,jsx_runtime.jsx)(src.mr,{isTransparent:!1,hasSearchBar:!0,onSearchBarInput:search=>setSearchInput(search),title:"Karten",onBack:()=>alert("[NOT IMPLEMENTED]"),options:[{label:"Neue Karte",type:"primary",action:()=>alert("[NOT IMPLEMENTED]")}]}),(0,jsx_runtime.jsx)(src.vs,{isFluid:!0,children:(0,jsx_runtime.jsx)(src.iA,{columns:[{id:"title",title:"Bezeichnung",sortable:!0},{id:"version",size:"50px",title:"Version",sortable:!0},{id:"updatedBy",size:"200px",title:"Bearbeitet von",sortable:!0},{id:"updatedAt",size:"200px",title:"Bearbeitet",sortable:!0}],data:cardsData,initialSortedColumn:"updatedAt",searchValue:searchTerm,pageSize:10,onFilterClick:()=>setShowFilterMenu(!showFilterMenu)})})]}),showFilterMenu&&(0,jsx_runtime.jsxs)("div",{className:"Page__wrapper__aside",children:[(0,jsx_runtime.jsxs)("div",{className:"Page__wrapper__aside__header",children:[(0,jsx_runtime.jsx)("h3",{children:"Filter"}),(0,jsx_runtime.jsx)("button",{onClick:()=>setShowFilterMenu(!1),children:(0,jsx_runtime.jsx)(index_es.G,{icon:free_solid_svg_icons.g82})})]}),(0,jsx_runtime.jsx)("div",{className:"Page__wrapper__aside__content",children:"asdf"})]})]})})};CardOverview_CardOverview_CardOverview.displayName="CardOverview",CardOverview_CardOverview_CardOverview.__docgenInfo={description:"",methods:[],displayName:"CardOverview"};var CardOverview_stories={title:"Pages/Cards/Overview",component:CardOverview_CardOverview_CardOverview,parameters:{layout:"fullscreen"}};const Template=args=>(0,jsx_runtime.jsx)(CardOverview_CardOverview_CardOverview,{userData:mockUser.Z.userData,userMenu:mockMenuItems.Z,cardsData:MockCards,...args});Template.displayName="Template";const Default=Template.bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <CardOverview userData={mockUser.userData} userMenu={mockMenu} cardsData={mockCards} {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/data/mockMenuItems.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js");var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");__webpack_exports__.Z={admin:[{title:"Dashboard",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.Iz$,path:"/"},{title:"Aufgaben",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.jMV,path:"/tasks"},{title:"Mitarbeiter",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.FVb,path:"/employees"},{title:"Einstellungen",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.cRF,path:"/settings"},{title:"Anleitungen",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.cnt,path:"/guides"}],manager:[{title:"Dashboard",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.Iz$,path:"/"},{title:"Aufgaben",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.jMV,path:"/tasks"},{title:"Mitarbeiter",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.FVb,path:"/employees"},{title:"Anleitungen",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.cnt,path:"/guides"}],editor:[{title:"Dashboard",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.Iz$,path:"/"},{title:"Aufgaben",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.jMV,path:"/tasks"},{title:"Mitarbeiter",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.FVb,path:"/employees"},{title:"Anleitungen",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.cnt,path:"/guides"}],user:[{title:"Dashboard",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.Iz$,path:"/"},{title:"Aufgaben",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.jMV,path:"/tasks"},{title:"Mitarbeiter",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.FVb,path:"/employees"},{title:"Anleitungen",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.cnt,path:"/guides"}]}},"./src/data/mockUser.js":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.Z={isAuthenticated:!0,tenant:"acme",userData:{id:"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",username:"max.mustermann",email:"max@acme.com",emailVerified:!1,attributes:{firstname:"Max",lastname:"Mustermann",personalId:"12345678",jobtitle:"test-user"},roles:["app_admin","app_user"]}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/pages/CardOverview/CardOverview.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("./src/fonts/Roboto-Regular.ttf"),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);___CSS_LOADER_EXPORT___.push([module.id,'*{box-sizing:border-box;padding:0;margin:0;font-family:"Roboto"}@font-face{font-family:"Roboto";font-style:normal;font-weight:100;src:url('+___CSS_LOADER_URL_REPLACEMENT_0___+') format("truetype")}*>a,.link{color:rgba(86,141,255,.75);text-decoration:none;cursor:pointer}*>a:hover,.link:hover{color:#568dff}.Page{width:100vw;height:100vh;display:flex;overflow:hidden}.Page__wrapper{flex-grow:1;display:flex;flex-direction:column}@media only screen and (min-width: 64em){.Page__wrapper{flex-direction:row}}.Page__wrapper__main{background:#e8e8e8;flex-grow:1;flex-basis:100px;display:flex;flex-direction:column}.Page__wrapper .PageHeader__wrapper__menu .TextInput__wrapper .TextInput{margin:inherit}.Page__wrapper__aside{border-left:1px solid rgba(0,0,0,.1);display:flex;flex-direction:column;width:100%}@media only screen and (min-width: 64em){.Page__wrapper__aside{width:16rem}}.Page__wrapper__aside__header{padding:1rem;border-bottom:1px solid rgba(0,0,0,.1);display:flex;flex-direction:row;justify-content:space-between}.Page__wrapper__aside__content{padding:1rem}',"",{version:3,sources:["webpack://./src/global-styles/index.scss","webpack://./src/pages/CardOverview/CardOverview.scss"],names:[],mappings:"AAAA,EACI,qBAAA,CACA,SAAA,CACA,QAAA,CACA,oBAAA,CAiDJ,WACI,oBAAA,CACA,iBAAA,CACA,eAAA,CACA,8DAAA,CAGJ,UAGI,0BAAA,CACA,oBAAA,CACA,cAAA,CAEA,sBAEI,aAAA,CCnER,MAEI,WAAA,CACA,YAAA,CACA,YAAA,CACA,eAAA,CAEA,eAEI,WAAA,CACA,YAAA,CACA,qBAAA,CAEA,yCANJ,eAOQ,kBAAA,CAAA,CAGJ,qBAEI,kBDWU,CCVV,WAAA,CACA,gBAAA,CACA,YAAA,CACA,qBAAA,CAQI,yEAEI,cAAA,CAKZ,sBAEI,oCDxBO,CCyBP,YAAA,CACA,qBAAA,CACA,UAAA,CAEA,yCAPJ,sBAQQ,WAAA,CAAA,CAGJ,8BAEI,YAAA,CACA,sCDpCG,CCqCH,YAAA,CACA,kBAAA,CACA,6BAAA,CAEJ,+BAEI,YAAA",sourcesContent:["* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-family: 'Roboto';\n}\n\n/*\ndark: 191C24\nprimary: AF1763\nBLUE: 0D6EFD\nGREEN: 198754\nLIGHTBLUE: 0DCAF0\nRED: AB2E3C\nYellow: FFC107\n*/\n\n$box-shadow-bottom: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);\n$area-edge-border: 1px solid rgba(0, 0, 0, 0.10);\n$font-color-primary: rgba(32, 50, 87, 0.90);\n\n$font-size-small: 0.85rem;\n$font-size-medium: 1rem;\n$font-size-large: 1.5rem;\n$font-color-default: #203257;\n\n$error-color: #AB2E3C;\n$warning-color: #FFC107;\n$success-color: #198754;\n$default-color: #D9E2F4;\n$primary-color: #568DFF;\n$default-color-dark: #b0b0b0;\n$default-color-light: #e8e8e8;\n$disabled-color: #c6c6c6;\n\n$primary-background-light: white;\n\n$border-radius-default: 0.25rem;\n\n$page-width-default: 800px;\n\n// @media only screen and (min-width: 40em) {...} cellphone (640px and up)\n$breakpoint-small: 40em;\n\n// @media only screen and (min-width: 48em) {...} tablet (768px and up)\n$breakpoint-medium: 48em;\n\n// @media only screen and (min-width: 64em) {...} desktop (1024px and up)\n$breakpoint-large: 64em;\n\n// @media only screen and (min-width: 80em) {...} desktop (1280px and up)\n$breakpoint-xlarge: 80em;\n\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 100;\n    src: url('../fonts/Roboto-Regular.ttf') format('truetype');\n}\n\n* > a,\n.link\n{\n    color: rgba($primary-color, 0.75);\n    text-decoration: none;\n    cursor: pointer;\n\n    &:hover\n    {\n        color: rgba($primary-color, 1);\n    }\n}\n\n// // tablet\n// @media only screen and (min-width: $breakpoint-medium) {\n        \n// }\n\n// // desktop\n// @media only screen and (min-width: $breakpoint-large) {\n    \n//     flex-direction: row;\n// }","@use '../../global-styles/' as *;\n\n.Page\n{\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    overflow: hidden;\n\n    &__wrapper\n    {\n        flex-grow: 1;\n        display: flex;\n        flex-direction: column;\n\n        @media only screen and (min-width: $breakpoint-large){\n            flex-direction: row;\n        }\n\n        &__main\n        {\n            background: $default-color-light;\n            flex-grow: 1;\n            flex-basis: 100px;\n            display: flex;\n            flex-direction: column;\n        }\n\n        .PageHeader__wrapper__menu\n        {   \n            .TextInput__wrapper\n            {\n\n                .TextInput\n                {\n                    margin: inherit;\n                }\n            }\n        }\n\n        &__aside\n        {\n            border-left: $area-edge-border;\n            display: flex;\n            flex-direction: column;\n            width: 100%;\n\n            @media only screen and (min-width: $breakpoint-large){\n                width: 16rem;\n            }\n\n            &__header\n            {\n                padding: 1rem;\n                border-bottom: $area-edge-border;\n                display: flex;\n                flex-direction: row;\n                justify-content: space-between;\n            }\n            &__content\n            {\n                padding: 1rem;\n            }\n        }\n    }\n}\n"],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___}}]);