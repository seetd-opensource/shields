(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{152:function(e,t,a){"use strict";a.d(t,"j",function(){return d}),a.d(t,"d",function(){return h}),a.d(t,"b",function(){return f}),a.d(t,"e",function(){return g}),a.d(t,"f",function(){return y}),a.d(t,"a",function(){return v}),a.d(t,"h",function(){return C}),a.d(t,"g",function(){return k}),a.d(t,"c",function(){return E}),a.d(t,"i",function(){return w});a(25);var n=a(86),r=a.n(n),i=a(202),o=a.n(i),l=(a(203),a(0)),s=a.n(l),c=a(1),u=a.n(c),p=a(151);function m(){var e=o()(["\n  * {\n    box-sizing: border-box;\n  }\n"]);return m=function(){return e},e}var d=Object.freeze({autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false"}),h=Object(p.a)(m()),f=p.c.div.withConfig({displayName:"common__BaseFont",componentId:"sc-16zh6vt-0"})(["font-family:Lekton,sans-serif;color:#534;"]),g=p.c.h2.withConfig({displayName:"common__H2",componentId:"sc-16zh6vt-1"})(["font-style:italic;margin-top:12mm;font-variant:small-caps;::before{content:'☙ ';}::after{content:' ❧';}"]),y=p.c.h3.withConfig({displayName:"common__H3",componentId:"sc-16zh6vt-2"})(["font-style:italic;"]),b=p.c.span.withConfig({displayName:"common__BadgeWrapper",componentId:"sc-16zh6vt-3"})(["padding:2px;height:",";vertical-align:middle;display:",";",";"],function(e){return e.height},function(e){return e.display},function(e){return e.clickable&&Object(p.b)(["cursor:pointer;"])}),v=function(e){var t=e.src,a=e.alt,n=void 0===a?"":a,i=e.display,o=void 0===i?"inline":i,l=e.height,c=void 0===l?"20px":l,u=e.clickable,p=void 0!==u&&u,m=r()(e,["src","alt","display","height","clickable"]);return s.a.createElement(b,{clickable:p,display:o,height:c},t?s.a.createElement("img",Object.assign({alt:n,src:t},m)):" ")};v.propTypes={src:u.a.string.isRequired,alt:u.a.string,display:u.a.oneOf(["inline","block","inline-block"]),height:u.a.string,clickable:u.a.bool};var C=p.c.input.withConfig({displayName:"common__StyledInput",componentId:"sc-16zh6vt-4"})(["height:15px;border:solid #b9a;border-width:0 0 1px 0;padding:0;text-align:center;color:#534;:focus{outline:0;}"]),k=Object(p.c)(C).withConfig({displayName:"common__InlineInput",componentId:"sc-16zh6vt-5"})(["width:70px;margin-left:5px;margin-right:5px;"]),E=Object(p.c)(C).withConfig({displayName:"common__BlockInput",componentId:"sc-16zh6vt-6"})(["width:40%;background-color:transparent;"]),w=p.c.hr.withConfig({displayName:"common__VerticalSpace",componentId:"sc-16zh6vt-7"})(["border:0;display:block;height:3mm;"])},153:function(e,t,a){"use strict";a(36),a(25);var n=a(173),r=a(174);function i(e){var t=e.baseUrl,a=void 0===t?"":t,r=e.path,i=e.queryParams,o=e.style,l=e.format,s=void 0===l?"svg":l,c=e.longCache,u=void 0!==c&&c,p=s.length?"."+s:"",m=n.stringify(Object.assign({cacheSeconds:u?"2592000":void 0,style:o},i));return""+a+r+p+(m?"?"+m:"")}function o(e){return encodeURIComponent(e.replace(/-/g,"--").replace(/_/g,"__"))}e.exports={badgeUrlFromPath:i,badgeUrlFromPattern:function(e){var t=e.baseUrl,a=void 0===t?"":t,n=e.pattern,o=e.namedParams,l=e.queryParams,s=e.style,c=e.format,u=void 0===c?"svg":c,p=e.longCache,m=void 0!==p&&p;return i({baseUrl:a,path:r.compile(n,{strict:!0,sensitive:!0})(o),queryParams:l,style:s,format:u,longCache:m})},encodeField:o,staticBadgeUrl:function(e){var t=e.baseUrl,a=void 0===t?"":t,r=e.label,i=e.message,l=e.color,s=void 0===l?"lightgray":l,c=e.style,u=e.namedLogo,p=e.format,m=void 0===p?"svg":p,d=[r,i,s].map(o).join("-"),h=n.stringify({style:c,logo:u});return a+"/badge/"+d+"."+m+(h?"?"+h:"")},queryStringStaticBadgeUrl:function(e){var t=e.baseUrl,a=void 0===t?"":t,r=e.label,i=e.message,o=e.color,l=e.labelColor,s=e.style,c=e.namedLogo,u=e.logoColor,p=e.logoWidth,m=e.logoPosition,d=e.format;return a+"/static/v1."+(void 0===d?"svg":d)+"?"+n.stringify({label:r,message:i,color:o,labelColor:l,style:s,logo:c,logoColor:u,logoWidth:p,logoPosition:m})},dynamicBadgeUrl:function(e){var t=e.baseUrl,a=e.datatype,r=e.label,i=e.dataUrl,o=e.query,l=e.prefix,s=e.suffix,c=e.color,u=e.style,p=e.format,m=void 0===p?"svg":p,d={label:r,url:i,query:o,style:u};return c&&(d.color=c),l&&(d.prefix=l),s&&(d.suffix=s),t+"/badge/dynamic/"+a+"."+m+"?"+n.stringify(d)}}},154:function(e,t,a){"use strict";a.d(t,"b",function(){return o}),a.d(t,"a",function(){return l}),a.d(t,"c",function(){return s});var n=a(1),r=a.n(n),i=r.a.arrayOf(r.a.string.isRequired).isRequired,o=r.a.objectOf(r.a.string).isRequired,l=r.a.exact({title:r.a.string.isRequired,example:r.a.exact({pattern:r.a.string.isRequired,namedParams:o,queryParams:o}).isRequired,preview:r.a.exact({label:r.a.string,message:r.a.string.isRequired,color:r.a.string.isRequired,style:r.a.string,namedLogo:r.a.string}).isRequired,keywords:i,documentation:r.a.exact({__html:r.a.string.isRequired})}),s=r.a.exact({category:r.a.string.isRequired,name:r.a.string.isRequired,isDeprecated:r.a.bool.isRequired,route:r.a.oneOfType([r.a.exact({pattern:r.a.string.isRequired,queryParams:i}),r.a.exact({format:r.a.string.isRequired,queryParams:i})]),examples:r.a.arrayOf(l).isRequired}).isRequired},162:function(e,t,a){"use strict";a.d(t,"a",function(){return m}),a.d(t,"b",function(){return p});var n=a(0),r=a.n(n),i=a(1),o=a.n(i),l=a(217),s=a.n(l),c=a(151),u=c.c.span.withConfig({displayName:"snippet__CodeContainer",componentId:"sc-1wzkqq5-0"})(["position:relative;vertical-align:middle;display:inline-block;",";"],function(e){return e.truncate&&Object(c.b)(["max-width:40%;overflow:hidden;text-overflow:ellipsis;"])}),p=c.c.code.withConfig({displayName:"snippet__StyledCode",componentId:"sc-1wzkqq5-1"})(["line-height:1.2em;padding:0.1em 0.3em;border-radius:4px;background:#eef;font-family:Lekton;font-size:",";white-space:nowrap;"],function(e){return e.fontSize}),m=function(e){var t=e.snippet,a=e.truncate,n=void 0!==a&&a,i=e.fontSize;return r.a.createElement(u,{truncate:n},r.a.createElement(s.a,null,r.a.createElement(p,{fontSize:i},t)))};m.propTypes={snippet:o.a.string.isRequired,truncate:o.a.bool,fontSize:o.a.string}},165:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n="https://img.shields.io"},166:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(194),o=a(201),l=a.n(o);t.a=function(){return r.a.createElement(i.Helmet,null,r.a.createElement("title",null,"Shields.io: Quality metadata badges for open source projects"),r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{content:"width=device-width,initial-scale=1",name:"viewport"}),r.a.createElement("meta",{content:"We serve fast and scalable informational images as badges\nfor GitHub, Travis CI, Jenkins, WordPress and many more services. Use them to\ntrack the state of your projects, or for promotional purposes.",name:"description"}),r.a.createElement("link",{href:l.a,rel:"icon",type:"image/png"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Lato|Lekton",rel:"stylesheet"}))}},169:function(e,t,a){"use strict";var n=a(54),r=a(0),i=a.n(r),o=a(151),l=a(152),s=function(e){return i.a.createElement("svg",e,i.a.createElement("rect",{rx:"8",x:"140",width:"55",height:"58"}),i.a.createElement("g",{stroke:"#000",strokeWidth:"8"},i.a.createElement("path",{d:"M135.5 54a8 8 0 0 0 8.5 -8.5"}),i.a.createElement("rect",{x:"4",y:"4",rx:"8",width:"190",height:"50",fill:"none"})),i.a.createElement("path",{d:"m23.906 33.641c.953-.083 1.906-.167 2.859-.25.108 2.099 1.511 4.139 3.578 4.722 2.438.895 5.357.799 7.559-.658 1.49-1.129 1.861-3.674.324-4.925-1.557-1.322-3.685-1.504-5.576-2.057-2.343-.565-4.912-1.133-6.611-2.979-1.805-2.088-1.627-5.485.292-7.443 2.041-2.113 5.222-2.55 8.02-2.274 2.46.244 5.058 1.343 6.252 3.635.426.908 1.095 2.241.656 3.108-.888.173-1.81.148-2.715.245-.077-2.084-1.727-4.073-3.863-4.234-1.902-.317-4.02-.252-5.691.802-1.398.989-1.849 3.363-.381 4.494 1.281 1.01 2.962 1.199 4.482 1.642 2.66.627 5.602 1.118 7.596 3.158 2 2.188 1.893 5.84-.088 8.01-2.01 2.32-5.304 2.972-8.237 2.713-2.585-.147-5.319-1.024-6.916-3.184-.987-1.288-1.517-2.905-1.542-4.523"}),i.a.createElement("path",{d:"m45.953 41c0-7.635 0-15.271 0-22.906.938 0 1.875 0 2.813 0 0 2.74 0 5.479 0 8.219 1.391-1.721 3.69-2.523 5.86-2.236 1.975.154 4.03 1.371 4.513 3.402.504 1.973.278 4.02.33 6.04 0 2.495 0 4.989 0 7.484-.938 0-1.875 0-2.813 0-.009-3.675.018-7.351-.014-11.03-.026-1.342-.627-2.835-2-3.282-2.187-.802-5.077.393-5.609 2.773-.417 1.764-.216 3.586-.264 5.381 0 2.051 0 4.102 0 6.153-.938 0-1.875 0-2.813 0"}),i.a.createElement("path",{d:"m63.781 21.328v-3.234h2.813v3.234zm0 19.672v-16.594h2.813v16.594z"}),i.a.createElement("path",{d:"m82.25 35.656c.969.12 1.938.24 2.906.359-.702 3.464-4.348 5.767-7.781 5.386-3.235-.066-6.43-2.328-7.06-5.598-.843-3.307-.404-7.285 2.101-9.784 3.082-3 8.699-2.618 11.235.892 1.374 1.85 1.676 4.267 1.578 6.51-4.125 0-8.25 0-12.375 0-.142 2.889 2.267 6 5.346 5.658 1.881-.162 3.613-1.566 4.045-3.423m-9.234-4.547c3.089 0 6.177 0 9.266 0 .129-2.774-2.616-5.422-5.419-4.713-2.174.427-3.912 2.474-3.846 4.713"}),i.a.createElement("path",{d:"m88.64 41v-22.906h2.813v22.906z"}),i.a.createElement("path",{d:"m106.59 41c0-.698 0-1.396 0-2.094-1.412 2.442-4.776 3.067-7.233 1.949-2.378-1.02-3.971-3.403-4.345-5.924-.507-2.761-.123-5.768 1.389-8.167 1.863-2.705 5.968-3.642 8.711-1.741.422.228 1.028 1.144 1.294 1.018-.006-2.649-.0001-5.298-.003-7.948.932 0 1.865 0 2.797 0 0 7.635 0 15.271 0 22.906-.87 0-1.74 0-2.61 0m-8.89-8.281c-.075 2.246.637 4.861 2.79 5.952 2 1.023 4.682-.047 5.488-2.134.897-1.996.746-4.278.388-6.382-.425-1.95-2.046-3.804-4.158-3.805-1.903-.065-3.633 1.363-4.099 3.181-.327 1.028-.394 2.116-.408 3.188"}),i.a.createElement("path",{d:"m112.52 36.05c.927-.146 1.854-.292 2.781-.438.126 1.69 1.513 3.244 3.239 3.365 1.398.212 3.01.12 4.12-.851.807-.749 1.1-2.243.159-3.01-.908-.723-2.115-.812-3.182-1.172-1.797-.485-3.713-.848-5.243-1.97-1.83-1.551-1.868-4.679-.099-6.293 1.577-1.507 3.918-1.784 6-1.594 1.685.176 3.54.749 4.535 2.217.464.715.708 1.549.844 2.384-.917.125-1.833.25-2.75.375-.121-1.569-1.653-2.762-3.19-2.695-1.246-.082-2.702.012-3.608.982-.624.724-.543 1.971.314 2.481.998.706 2.269.757 3.389 1.173 1.754.512 3.647.848 5.141 1.965 1.686 1.476 1.728 4.244.396 5.966-1.298 1.788-3.597 2.417-5.709 2.448-1.466-.007-2.984-.214-4.299-.893-1.599-.909-2.585-2.655-2.84-4.444"}),i.a.createElement("g",{fill:"#fff"},i.a.createElement("path",{d:"m151.11 41v-22.906h3.03v22.906z"}),i.a.createElement("path",{d:"m158.55 29.844c-.277-4.765 2.335-9.977 7.05-11.551 4.902-1.757 11.226.197 13.477 5.098 2.266 4.706 1.89 10.92-1.767 14.833-4.554 4.948-13.81 3.976-17.08-1.954-1.111-1.946-1.679-4.188-1.68-6.426m3.125.047c-.377 4.273 2.892 8.844 7.375 8.951 3.791.221 7.557-2.653 7.997-6.497.794-3.731.139-8.292-3.107-10.696-3.788-2.814-10.05-1.104-11.591 3.444-.54 1.539-.642 3.181-.675 4.798"})))};s.defaultProps={xmlns:"http://www.w3.org/2000/svg",width:"198",height:"58"};var c=o.c.p.withConfig({displayName:"header__Highlights",componentId:"sc-1l0ubx-0"})(["font-style:italic;"]);t.a=function(){return i.a.createElement("section",null,i.a.createElement(n.Link,{to:"/"},i.a.createElement(s,null)),i.a.createElement(l.i,null),i.a.createElement(c,null,"Pixel-perfect   Retina-ready   Fast   Consistent   Hackable   No tracking"))}},180:function(e){e.exports={b:["bitcoin","dependabot","discord","gitlab","npm","paypal","serverfault","stackexchange","superuser","telegram","travis"],a:["plastic","flat","flat-square","for-the-badge","popout","popout-square","social"]}},184:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),o=a.n(i),l=a(151),s=a(153),c=a(152),u=l.c.a.withConfig({displayName:"footer__SpacedA",componentId:"sc-10wqpng-0"})(["margin-left:10px;margin-right:10px;"]),p=function(e){var t=e.baseUrl;return r.a.createElement("section",null,r.a.createElement(c.e,{id:"like-this"},"Like This?"),r.a.createElement("p",null,r.a.createElement("object",{alt:"Follow @shields_io",data:Object(s.badgeUrlFromPath)({baseUrl:t,path:"/twitter/follow/shields_io",queryParams:{label:"Follow"},style:"social"})})," ",r.a.createElement("object",{alt:"Donate to us!",data:Object(s.badgeUrlFromPath)({baseUrl:t,path:"/opencollective/backers/shields",queryParams:{link:"https://opencollective.com/shields"},style:"social"})})," ",r.a.createElement("object",{alt:"Donate to us!",data:Object(s.badgeUrlFromPath)({baseUrl:t,path:"/opencollective/sponsors/shields",queryParams:{link:"https://opencollective.com/shields"},style:"social"})})," ",r.a.createElement("object",{alt:"Fork on GitHub",data:Object(s.badgeUrlFromPath)({baseUrl:t,path:"/github/forks/badges/shields",queryParams:{label:"Fork"},style:"social"})})," ",r.a.createElement("object",{alt:"chat on Discord",data:Object(s.badgeUrlFromPath)({baseUrl:t,path:"/discord/308323056592486420",queryParams:{label:"Chat",link:"https://discord.gg/HjJCwm5"},style:"social"})})),r.a.createElement("p",null,"What is your favorite badge service to use?",r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/badges/shields/blob/master/CONTRIBUTING.md"},"Tell us")," ","and we might bring it to you!"),r.a.createElement("p",null,r.a.createElement(u,{href:"https://status.shields.io/"},"Status"),r.a.createElement(u,{href:"https://github.com/badges/shields"},"GitHub")))};t.a=p,p.propTypes={baseUrl:o.a.string.isRequired}},185:function(e,t,a){"use strict";var n=a(160),r=a.n(n),i=(a(159),a(157),a(161)),o=a.n(i),l=a(175),s=a.n(l),c=a(7),u=a.n(c),p=a(0),m=a.n(p),d=a(1),h=a.n(d),f=a(225),g=a.n(f),y=a(153);a(158),a(76),a(55),a(178),a(87),a(88),a(36);function b(e,t,a){return void 0===a&&(a=""),e}function v(e,t,a){var n="<img"+(a?' alt="'+a+'"':"")+' src="'+e+'">';return t?'<a href="'+t+'">'+n+"</a>":n}function C(e,t,a){var n="!["+(a||"")+"]("+e+")";return t?"["+n+"]("+t+")":n}function k(e,t,a){var n=".. image:: "+e;return a&&(n+="   :alt: "+a),t&&(n+="   :target: "+t),n}function E(e){return null==e?"None":'"'+e.replace(/"/g,'\\"')+'"'}function w(e,t,a){return"image:"+e+function(e,t){(e.some(function(e){return e&&e.includes(",")})||Object.keys(t).length>0)&&(e=e.map(function(e){return E(e)}),t=function(e,t){var a={};for(var n in e)a[n]=t(e[n]);return a}(t,function(e){return E(e)}));var a=e.concat(Object.entries(t).map(function(e){return e[0]+"="+e[1]}));return a.length?"["+a.join(",")+"]":"[]"}(a?[a]:[],t?{link:t}:{})}function P(e){var t=e.badgeUrl,a=e.link,n=e.title;return(0,{markdown:C,rst:k,asciidoc:w,link:b,html:v}[e.markupFormat])(t,a,n)}var x=a(154),q=a(152),O=(a(25),a(155),a(151)),_=a(174),S=a.n(_),j=a(179),I=a.n(j),A=a(227),R=O.c.div.withConfig({displayName:"builder-common__BuilderOuterContainer",componentId:"sc-1qmnput-0"})(["margin-top:10px;margin-bottom:10px;"]),N=O.c.div.withConfig({displayName:"builder-common__BuilderInnerContainer",componentId:"sc-1qmnput-1"})(["display:inline-block;padding:1px 14px 10px;border-radius:4px;background:#eef;"]),U=function(e){var t=e.children;return m.a.createElement(R,null,m.a.createElement(N,null,t))};U.propTypes={children:h.a.oneOfType([h.a.arrayOf(h.a.node),h.a.node])};var B="\n  font-family: system-ui;\n  font-size: 11px;\n",z=O.c.label.withConfig({displayName:"builder-common__BuilderLabel",componentId:"sc-1qmnput-2"})([""," text-transform:lowercase;"],B),L=O.c.span.withConfig({displayName:"builder-common__BuilderCaption",componentId:"sc-1qmnput-3"})([""," color:#999;"],B),M=O.c.span.withConfig({displayName:"path-builder__PathBuilderColumn",componentId:"sc-55c99y-0"})(["height:78px;float:left;display:flex;flex-direction:column;margin:0;",";"],function(e){return e.withHorizPadding&&Object(O.b)(["padding:0 8px;"])}),Q=O.c.div.withConfig({displayName:"path-builder__PathLiteral",componentId:"sc-55c99y-1"})(["margin-top:39px;",";"],function(e){return e.isFirstToken&&Object(O.b)(["margin-left:3px;"])}),T=O.c.span.withConfig({displayName:"path-builder__NamedParamLabelContainer",componentId:"sc-55c99y-2"})(["display:flex;flex-direction:column;height:37px;width:100%;justify-content:center;"]),F="\n  width: 100%;\n  text-align: center;\n",D=Object(O.c)(q.h).withConfig({displayName:"path-builder__NamedParamInput",componentId:"sc-55c99y-3"})([""," margin-top:2px;margin-bottom:10px;"],F),H=O.c.select.withConfig({displayName:"path-builder__NamedParamSelect",componentId:"sc-55c99y-4"})([""," margin-bottom:9px;font-size:10px;"],F),G=Object(O.c)(L).withConfig({displayName:"path-builder__NamedParamCaption",componentId:"sc-55c99y-5"})(["width:100%;text-align:center;"]),W=function(e){function t(t){var a;(a=e.call(this,t)||this).handleTokenChange=function(e){var t,n=e.target,r=n.name,i=n.value,o=a.state,l=o.tokens,s=o.namedParams,c=Object.assign({},s,((t={})[r]=i,t));a.setState({namedParams:c}),a.notePathChanged({tokens:l,namedParams:c})};var n=t.pattern,r=S.a.parse(n),i={};return r.filter(function(e){return"string"!=typeof e}).forEach(function(e){var t=e.name;i[t]=""}),a.state={tokens:r,namedParams:i},a}u()(t,e),t.constructPath=function(e){var t=e.tokens,a=e.namedParams,n=!0;return{path:t.map(function(e){if("string"==typeof e)return e;var t=e.delimiter,r=e.name,i=e.optional,o=a[r];return o?""+t+o:i?"":(n=!1,t+":"+r)}).join(""),isComplete:n}};var a=t.prototype;return a.notePathChanged=function(e){var t=e.tokens,a=e.namedParams,n=this.props.onChange;if(n){var r=this.constructor.constructPath({tokens:t,namedParams:a});n({path:r.path,isComplete:r.isComplete})}},a.componentDidMount=function(){var e=this.state,t=e.tokens,a=e.namedParams;this.notePathChanged({tokens:t,namedParams:a})},a.renderLiteral=function(e,t){return m.a.createElement(M,{key:t+"-"+e},m.a.createElement(Q,{isFirstToken:0===t},e))},a.renderNamedParamInput=function(e){var t=e.name,a=e.pattern,n=Object(A.patternToOptions)(a),r=this.state.namedParams[t];return n?m.a.createElement(H,{name:t,onChange:this.handleTokenChange,value:r},m.a.createElement("option",{key:"empty",value:""}," "),n.map(function(e){return m.a.createElement("option",{key:e,value:e},e)})):m.a.createElement(D,Object.assign({name:t,onChange:this.handleTokenChange,type:"text",value:r},q.j))},a.renderNamedParam=function(e,t,a){var n=e.delimiter,r=e.name,i=e.optional,o=this.props.exampleParams[r]||"(not set)";return m.a.createElement(m.a.Fragment,{key:e.name},this.renderLiteral(n,t),m.a.createElement(M,{withHorizPadding:!0},m.a.createElement(T,null,m.a.createElement(z,{htmlFor:r},I()(r)),i?m.a.createElement(z,null,"(optional)"):null),this.renderNamedParamInput(e),m.a.createElement(G,null,0===a?"e.g. "+o:o)))},a.render=function(){var e=this,t=this.state.tokens,a=0;return m.a.createElement(U,null,t.map(function(t,n){return"string"==typeof t?e.renderLiteral(t,n):e.renderNamedParam(t,n,a++)}))},t}(m.a.Component);W.propTypes={pattern:h.a.string.isRequired,exampleParams:x.b,onChange:h.a.func};a(78);var J=a(173),V=a(180),K=Object(O.c)(z).withConfig({displayName:"query-string-builder__QueryParamLabel",componentId:"dh0rqv-0"})(["margin:5px;"]),Y=Object(O.c)(q.h).withConfig({displayName:"query-string-builder__QueryParamInput",componentId:"dh0rqv-1"})(["margin:5px 10px;"]),Z=Object(O.c)(L).withConfig({displayName:"query-string-builder__QueryParamCaption",componentId:"dh0rqv-2"})(["margin:5px;"]),X=[{name:"style",shieldsDefaultValue:"flat"},{name:"label",label:"override label"},{name:"color",label:"override color"},{name:"logo",label:"named logo"},{name:"logoColor",label:"override logo color"}];function $(e){return X.find(function(t){return t.name===e})}var ee=function(e){function t(t){var a;(a=e.call(this,t)||this).handleServiceQueryParamChange=function(e){var t,n=e.target,r=n.name,i="checkbox"===n.type?e.target.checked:e.target.value,o=a.state,l=o.queryParams,s=o.badgeOptions,c=Object.assign({},l,((t={})[r]=i,t));a.setState({queryParams:c}),a.noteQueryStringChanged({queryParams:c,badgeOptions:s})},a.handleBadgeOptionChange=function(e){var t,n=e.target,r=n.name,i=n.value,o=a.state,l=o.badgeOptions,s=o.queryParams,c=Object.assign({},l,((t={})[r]=i,t));a.setState({badgeOptions:c}),a.noteQueryStringChanged({queryParams:s,badgeOptions:c})};var n=t.exampleParams,r=t.initialStyle,i={};Object.entries(n).forEach(function(e){var t=e[0],a="string"==typeof e[1];i[t]=!a||""});var o={};return X.forEach(function(e){var t=e.name;o[t]="style"===t?r:""}),a.state={queryParams:i,badgeOptions:o},a}u()(t,e),t.getQueryString=function(e){var t=e.queryParams,a=e.badgeOptions,n={},r=!0;return Object.entries(t).forEach(function(e){var t=e[0],a=e[1];"string"==typeof a?a?n[t]=a:r=!1:a&&(n[t]=null)}),Object.entries(a).forEach(function(e){var t=e[0],a=e[1],r=$(t).shieldsDefaultValue;a&&a!==r&&(n[t]=a)}),{queryString:Object(J.stringify)(n),isComplete:r}};var a=t.prototype;return a.noteQueryStringChanged=function(e){var t=e.queryParams,a=e.badgeOptions,n=this.props.onChange;if(n){var r=this.constructor.getQueryString({queryParams:t,badgeOptions:a});n({queryString:r.queryString,isComplete:r.isComplete})}},a.componentDidMount=function(){var e=this.state,t=e.queryParams,a=e.badgeOptions;this.noteQueryStringChanged({queryParams:t,badgeOptions:a})},a.renderServiceQueryParam=function(e){var t=e.name,a=e.value,n=e.isStringParam,r=e.stringParamCount,i=this.props.exampleParams[t];return m.a.createElement("tr",{key:t},m.a.createElement("td",null,m.a.createElement(K,{htmlFor:t},I()(t).toLowerCase())),m.a.createElement("td",null,n&&m.a.createElement(Z,null,0===r?"e.g. "+i:i)),m.a.createElement("td",null,n?m.a.createElement(Y,Object.assign({checked:a,name:t,onChange:this.handleServiceQueryParamChange,type:"text"},q.j)):m.a.createElement("input",{checked:a,name:t,onChange:this.handleServiceQueryParamChange,type:"checkbox"})))},a.renderBadgeOptionInput=function(e,t){return"style"===e?m.a.createElement("select",{name:"style",onChange:this.handleBadgeOptionChange,value:t},V.a.map(function(e){return m.a.createElement("option",{key:e,value:e},e)})):m.a.createElement(Y,Object.assign({checked:t,name:e,onChange:this.handleBadgeOptionChange,type:"text"},q.j))},a.renderBadgeOption=function(e,t){var a=$(e),n=a.label,r=void 0===n?I()(e):n,i=a.shieldsDefaultValue;return m.a.createElement("tr",{key:e},m.a.createElement("td",null,m.a.createElement(K,{htmlFor:e},r)),m.a.createElement("td",null,!i&&m.a.createElement(Z,null,"optional")),m.a.createElement("td",null,this.renderBadgeOptionInput(e,t)))},a.render=function(){var e=this,t=this.state,a=t.queryParams,n=t.badgeOptions,r=Boolean(Object.keys(a).length),i=0;return m.a.createElement(m.a.Fragment,null,r&&m.a.createElement(U,null,m.a.createElement("table",null,m.a.createElement("tbody",null,Object.entries(a).map(function(t){var a=t[0],n=t[1],r="string"==typeof n;return e.renderServiceQueryParam({name:a,value:n,isStringParam:r,stringParamCount:r?i++:void 0})})))),m.a.createElement(U,null,m.a.createElement("table",null,m.a.createElement("tbody",null,Object.entries(n).map(function(t){var a=t[0],n=t[1];return e.renderBadgeOption(a,n)})))))},t}(m.a.Component);ee.propTypes={exampleParams:x.b,initialStyle:h.a.string,onChange:h.a.func},ee.defaultProps={initialStyle:"flat"};var te=a(39),ae=a.n(te),ne=a(242),re=function(e){return m.a.createElement(ne.a.Control,Object.assign({},e,{innerProps:{onMouseDown:e.selectProps.onControlMouseDown}}))};re.propTypes={selectProps:h.a.object.isRequired};var ie=Object(O.c)(ne.b).withConfig({displayName:"request-markup-button__MarkupFormatSelect",componentId:"gjwzgu-0"})(["width:200px;margin-left:auto;margin-right:auto;font-family:'Lato',sans-serif;font-size:12px;.markup-format__control{background-image:linear-gradient(-180deg,#00aeff 0%,#0076ff 100%);border:1px solid rgba(238,239,241,0.8);border-width:0;box-shadow:unset;cursor:copy;}.markup-format__control--is-disabled{background:rgba(0,118,255,0.3);cursor:none;}.markup-format__placeholder{color:#eeeff1;}.markup-format__indicator{color:rgba(238,239,241,0.81);cursor:pointer;}.markup-format__indicator:hover{color:#eeeff1;}.markup-format__control--is-focused .markup-format__indicator,.markup-format__control--is-focused .markup-format__indicator:hover{color:#ffffff;}.markup-format__option{text-align:left;cursor:copy;}"]),oe=[{value:"markdown",label:"Copy Markdown"},{value:"rst",label:"Copy reStructuredText"},{value:"asciidoc",label:"Copy AsciiDoc"},{value:"html",label:"Copy HTML"}],le=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).selectRef=m.a.createRef(),t.onControlMouseDown=function(){var e=o()(r.a.mark(function e(a){var n,i,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=ae()(ae()(t)),i=n.selectRef,!(o=t.props.onMarkupRequested)){e.next=5;break}return e.next=5,o("link");case 5:i.current.blur();case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.onOptionClick=function(){var e=o()(r.a.mark(function e(a){var n,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.value,!(i=t.props.onMarkupRequested)){e.next=5;break}return e.next=5,i(n);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t}return u()(t,e),t.prototype.render=function(){var e=this.props.isDisabled;return m.a.createElement(ie,{blurInputOnSelect:!0,classNamePrefix:"markup-format",closeMenuOnScroll:!0,components:{Control:re},isDisabled:e,isSearchable:!1,menuPlacement:"auto",onChange:this.onOptionClick,onControlMouseDown:this.onControlMouseDown,options:oe,placeholder:"Copy Badge URL",ref:this.selectRef,value:""})},t}(m.a.PureComponent);le.propTypes={onMarkupRequested:h.a.func.isRequired,isDisabled:h.a.bool};var se=le,ce=a(240),ue=O.c.span.withConfig({displayName:"copied-content-indicator__ContentAnchor",componentId:"sc-1dqcwul-0"})(["position:relative;display:inline-block;"]),pe=O.c.span.withConfig({displayName:"copied-content-indicator__ContentContainer",componentId:"sc-1dqcwul-1"})(["width:100vw;position:absolute;left:50%;transform:translateX(-50%);will-change:opacity,top;pointer-events:none;"]),me=Object(ce.a)(pe)({hidden:{opacity:0,transition:{duration:100}},effectStart:{top:"-10px",opacity:1,transition:{duration:0}},effectEnd:{top:"-75px",opacity:.5}}),de=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={pose:"hidden"},t.handlePoseComplete=function(){"effectStart"===t.state.pose?t.setState({pose:"effectEnd"}):t.setState({pose:"hidden"})},t}u()(t,e);var a=t.prototype;return a.trigger=function(){this.setState({pose:"effectStart"})},a.render=function(){var e=this.state.pose;return m.a.createElement(ue,null,m.a.createElement(me,{onPoseComplete:this.handlePoseComplete,pose:e},this.props.copiedContent),this.props.children)},t}(m.a.Component);de.propTypes={copiedContent:h.a.oneOfType([h.a.arrayOf(h.a.node),h.a.node]),children:h.a.oneOfType([h.a.arrayOf(h.a.node),h.a.node])},a.d(t,"a",function(){return he});var he=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).indicatorRef=m.a.createRef(),t.state={path:"",link:"",message:void 0},t.copyMarkup=function(){var e=o()(r.a.mark(function e(a){var n,i,o,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.props.title,i=t.state.link,o=t.generateBuiltBadgeUrl(),l=P({badgeUrl:o,link:i,title:n,markupFormat:a}),e.prev=4,e.next=7,g()(l);case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(4),t.setState({message:"Copy failed",markup:l}),e.abrupt("return");case 13:t.setState({markup:l}),t.indicatorRef.current.trigger();case 15:case"end":return e.stop()}},e,this,[[4,9]])}));return function(t){return e.apply(this,arguments)}}(),t.handlePathChange=function(e){var a=e.path,n=e.isComplete;t.setState({path:a,pathIsComplete:n})},t.handleQueryStringChange=function(e){var a=e.queryString;e.isComplete;t.setState({queryString:a})},t}u()(t,e);var a=t.prototype;return a.generateBuiltBadgeUrl=function(){var e=this.baseUrl,t=this.state,a=t.path,n=t.queryString;return""+e+a+".svg"+(n?"?"+n:"")},a.renderLivePreview=function(){var e,t=this.props.baseUrl;return e=this.state.pathIsComplete?this.generateBuiltBadgeUrl():Object(y.staticBadgeUrl)({baseUrl:t,label:"preview",message:"some parameters missing"}),m.a.createElement("p",null,m.a.createElement(q.a,{display:"block",src:e}))},a.renderMarkupAndLivePreview=function(){var e=this.indicatorRef,t=this.state,a=t.markup,n=t.message,r=t.pathIsComplete;return m.a.createElement("div",null,this.renderLivePreview(),m.a.createElement(de,{copiedContent:"Copied",ref:e},m.a.createElement(se,{isDisabled:!r,onMarkupRequested:this.copyMarkup})),n&&m.a.createElement("div",null,m.a.createElement("p",null,n),m.a.createElement("p",null,"Markup: ",a)))},a.render=function(){var e=this.props,t=e.pattern,a=e.exampleNamedParams,n=e.exampleQueryParams,r=e.initialStyle;return m.a.createElement("form",{action:""},m.a.createElement(W,{exampleParams:a,onChange:this.handlePathChange,pattern:t}),m.a.createElement(ee,{exampleParams:n,initialStyle:r,onChange:this.handleQueryStringChange}),m.a.createElement("div",null,this.renderMarkupAndLivePreview()))},s()(t,[{key:"baseUrl",get:function(){var e=this.props.baseUrl;if(e)return e;var t=window.location;return t.protocol+"//"+t.hostname}}]),t}(m.a.Component);he.propTypes={baseUrl:h.a.string.isRequired,title:h.a.string.isRequired,pattern:h.a.string.isRequired,exampleNamedParams:x.b,exampleQueryParams:x.b,initialStyle:h.a.string}},201:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAABE0lEQVR4AWJkAIKkpCQ7TU3NySIiIlosQMCABejbMWAFf//8YXj77vWn27duZWVGz1nKGBYWZiQkJHSIkZGRmwEPCMxiwAt+/fz3/86VL8EAbuiiAKEoiMLwGcHdCQMBiUAlurDErmJ75tmKP8A3oiJyuF6vAxglws+0C5pv81GJaJdzhlWMMJssaaXM3C0CpmSDLAQtgH3BiCIVB2NRMKWEIoXQMBiLgjHGP9nQ+6ZPLgqGgs9xriDovX8A6Jjgw8ZyIigzn5xz+yZ+6O/tsz7Hy8tb/PLlywPAHMOFT/G3LwRc95fxPyerQCojuKwLDLQAGjoJWIzpAw1mw6bB0guHSYyMDBysnO/5hUTTGvM3rQEAI8qCnLiY3O4AAAAASUVORK5CYII="},227:function(e,t,a){a(83),a(91);var n=/^[A-za-z0-9-]+$/;e.exports={patternToOptions:function(e){var t=e.split("|");return t.some(function(e){return!e.match(n)})?void 0:t}}}}]);
//# sourceMappingURL=1-7cf44aab56d86e7fd802.js.map