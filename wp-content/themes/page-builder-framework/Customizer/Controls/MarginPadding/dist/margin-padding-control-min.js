!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};function n(e){let t=String(e).trim();if(""===t)return"";if("-"===t)return"-";let n=t.endsWith(".");t=n?t.replace(".",""):t;let i=function(e){if(""===e||null===e||"string"!=typeof e&&"number"!=typeof e||"string"==typeof e&&isNaN(parseFloat(e)))return{number:"",unit:""};let t=String(e).trim(),n=-1<t.indexOf("-")?"-":"",i=function(e){if(!e)return"";let t=String(e).match(/[a-z%]+$/i);return t?t[0]:""}(t=t.replace(n,"")),o=i?t.replace(i,""):t;if(""===(o=o.trim()))return{number:"",unit:i};let r=o.endsWith("."),a=parseFloat(o=n+o);return isNaN(a)?{number:"",unit:i}:{number:a,unit:i,hasTrailingDotBeforeUnit:!!i&&!!r}}(e);if(""===i.number)return n?"0.":"";let o=String(i.number);return n?o+".":o}function i(e,t){let i={};for(let t=0;t<e.length;t++)i[e[t]]=e[t];for(let o in t){if(!e.includes(o)||!t.hasOwnProperty(o)||!i.hasOwnProperty(o))continue;let r=t[o];""!==r&&(i[o]=n(r))}return i}function o(e,t){let n=function(e){if(""!==e&&e)try{return JSON.parse(e)}catch(e){return}}(t);return n?i(e,n):function(e){let t={};for(let n=0;n<e.length;n++)t[e[n]]="";return t}(e)}function r(n){return e(t).createElement("div",{className:"wpbf-device-buttons"},n.devices.map((n,i)=>{let o=`dashicons dashicons-${"mobile"===n?"smartphone":n}`;return e(t).createElement("button",{type:"button",className:`wpbf-device-button wpbf-device-button-${n} ${0===i?" is-active":""}`,"data-wpbf-device":n,key:i},e(t).createElement("i",{className:o}))}))}function a(a){let[s,l]=(0,t.useState)(()=>a.valueArray),c=""!==a.default&&void 0!==a.default;function u(e){let t=a.dontSaveUnit?i(a.dimensions,e):function(e,t,i){let o={};for(let t=0;t<e.length;t++)o[e[t]]=e[t];for(let r in i){if(!e.includes(r)||!o.hasOwnProperty(r))continue;let a=i[r];if(""!==a){let e=n(a);o[r]=e+t}}return o}(a.dimensions,a.unit,e);if(a.saveAsJson){a.customizerSetting?.set(function(e){try{return JSON.stringify(e)}catch(e){return""}}(e));return}a.customizerSetting?.set(t)}function m(e){let t=[];for(let n in s)if(s.hasOwnProperty(n)){if(!e){t.push({dimension:n,value:s[n]});continue}n.includes(e+"_")&&t.push({dimension:n,value:s[n]})}return t}function d(n,i){return e(t).createElement(e(t).Fragment,null,e(t).createElement("button",{type:"button",className:"wpbf-control-reset",onClick:e=>(function(e,t){let n=c?a.defaultArray:a.valueArray;if(!t){u(n);return}let i={...s};for(let e in i)i.hasOwnProperty(e)&&e.includes(t+"_")&&n.hasOwnProperty(e)&&(i[e]=n[e]);u(i)})(0,n)},e(t).createElement("i",{className:"dashicons dashicons-image-rotate"})),e(t).createElement("div",{className:"wpbf-control-cols"},e(t).createElement("div",{className:"wpbf-control-left-col"},e(t).createElement("div",{className:"wpbf-control-fields"},i.map((i,o)=>{let r=`wpbf-control-input wpbf-control-input${n?`-${n}`:""}-${i.dimension}`,c=`_customize-input-${a.control.id}${n?`-${n}`:""}-${i.dimension}`,m=n?i.dimension.replace(n+"_",""):i.dimension;return e(t).createElement("div",{className:"wpbf-control-field",key:o},e(t).createElement("input",{id:c,type:"number",value:i.value||0===i.value?i.value:"",className:r,onChange:e=>(function(e,t){if(!a.dimensions.includes(t)||!e.target)return;let n={...s};n.hasOwnProperty(t)&&(n[t]=e.target.value,l(n),u(n))})(e,i.dimension)}),e(t).createElement("label",{className:"wpbf-control-sublabel",htmlFor:c},m))}))),e(t).createElement("div",{className:"wpbf-control-right-col"},e(t).createElement("span",{ref:p,className:"wpbf-control-unit"},a.unit))))}a.control.updateComponentState=e=>{l("string"==typeof e?o(a.dimensions,e):i(a.dimensions,e))};let p=(0,t.useRef)(null);return e(t).createElement(e(t).Fragment,null,e(t).createElement("header",{className:"wpbf-control-header"},a.label&&e(t).createElement("label",{className:"customize-control-title",htmlFor:`wpbf-control-input-${a.type}-top`},e(t).createElement("span",{className:"customize-control-title"},a.label)),a.isResponsive&&a.devices&&a.devices.length?e(t).createElement(r,{devices:a.devices}):e(t).createElement(e(t).Fragment,null)),a.description&&e(t).createElement("span",{className:"customize-control-description description",dangerouslySetInnerHTML:{__html:a.description}}),e(t).createElement("div",{className:"customize-control-notifications-container",ref:a.setNotificationContainer}),e(t).createElement("div",{className:"wpbf-control-form"},a.isResponsive&&a.devices&&a.devices.length?e(t).createElement(e(t).Fragment,null,a.devices.map((n,i)=>{let o=0===i;return e(t).createElement("div",{className:`wpbf-control-device wpbf-control-${n} ${o?"is-active":""}`,"data-wpbf-device":n,key:i},d(n,m(n)))})):d("",m())))}t=React;var s={};s=ReactDOM;let l=wp.customize.Control.extend({initialize:function(e,t){let n=this;n.setNotificationContainer=n.setNotificationContainer.bind(n),wp.customize.Control.prototype.initialize.call(n,e,t),wp.customize.control.bind("removed",function e(t){n===t&&(n.destroy(),n.container.remove(),wp.customize.control.unbind("removed",e))})},setNotificationContainer:function(e){this.notifications.container=jQuery(e),this.notifications.render()},renderContent:function(){let n=(0,s.createRoot)(this.container[0]),i=this.params,o="responsive-margin"===i.subtype||"responsive-padding"===i.subtype;n.render(e(t).createElement(a,{type:i.type,subtype:i.subtype,label:i.label,description:i.description,setNotificationContainer:this.setNotificationContainer,control:this,customizerSetting:this.setting??void 0,default:i.default,defaultArray:i.defaultArray,valueArray:i.valueArray,unit:i.unit,saveAsJson:i.saveAsJson,dontSaveUnit:i.dontSaveUnit,dimensions:i.dimensions,devices:i.devices,isResponsive:o})),o&&(this.container.addClass("wpbf-customize-control-margin-padding"),this.container.data("control-subtype",i.subtype)),i.allowCollapse&&this.container.addClass("allowCollapse")},ready:function(){let e=this;e.setting?.bind(t=>{let n="string"==typeof t?o(e.params.dimensions,t):t;e.updateComponentState(n)})},updateComponentState:e=>{},destroy:function(){e(s).unmountComponentAtNode(this.container[0]),wp.customize.Control.prototype.destroy&&wp.customize.Control.prototype.destroy.call(this)}});wp.customize.controlConstructor["wpbf-margin-padding"]=l,wp.customize.controlConstructor["wpbf-responsive-margin-padding"]=l}();
