!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e){!function(){t.exports=this.wp.element}()},function(t,e){!function(){t.exports=this.wp.i18n}()},function(t,e){!function(){t.exports=this.wp.components}()},function(t,e){!function(){t.exports=this.wp.blocks}()},function(t,e){!function(){t.exports=this.wp.blockEditor}()},function(t,e){!function(){t.exports=this.wp.data}()},function(t,e){!function(){t.exports=this.wp.serverSideRender}()},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(3),i=n(2),l=n(4),s=n(5),c=n(6),u=n.n(c),p=n(1);Object(r.registerBlockType)("w4-post-list/postlist",{title:Object(p.__)("W4 Post List","w4-post-list"),description:Object(p.__)("Display a list from w4 post list plugin.","w4-post-list"),supports:{align:!1,html:!1},icon:"list-view",category:"widgets",attributes:{listId:{type:"string",default:"0"}},edit:Object(s.withSelect)((function(t){return{posts:t("core").getEntityRecords("postType","w4pl")}}))((function(t){var e=t.posts,n=(t.className,t.attributes),r=t.setAttributes;if(!e)return Object(p.__)("Loading...");if(e&&0===e.length)return Object(p.__)("No list found","w4-post-list");for(var s=n.listId,c=[{value:0,label:Object(p.__)("Select a list","w4-post-list")}],a=0;a<e.length;a++)c.push({value:e[a].id,label:e[a].title.rendered});return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(l.InspectorControls,null,Object(o.createElement)(i.PanelBody,{title:Object(p.__)("Post List Settings","w4-post-list")},Object(o.createElement)(i.SelectControl,{label:Object(p.__)("Select a list","w4-post-list"),value:s,options:c,onChange:function(t){r({listId:t})}}),Object(o.createElement)("p",null,Object(p.__)("Or","w4-post-list"),Object(o.createElement)("br",null)," ",Object(o.createElement)("a",{target:"_blank",href:"post-new.php?post_type=w4pl"},Object(p.__)("Create a new one","w4-post-list"))))),Object(o.createElement)(i.Disabled,null,Object(o.createElement)(u.a,{block:"w4-post-list/postlist",attributes:n})))}))})}]);