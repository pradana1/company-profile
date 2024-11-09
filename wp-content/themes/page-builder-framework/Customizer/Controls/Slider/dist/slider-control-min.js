!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};e=ReactDOM;var n={};function o(e){let o="",r=(0,n.useRef)(null),i=(0,n.useRef)(null);function a(t){let n=void 0===t?0:t,o="string"==typeof n?parseFloat(n):n;if(isNaN(o))return e.min;let r=o<e.min?e.min:o;return r>e.max?e.max:r}e.control.updateComponentState=t=>{let e=String(t);"slider"===o?i&&i.current&&(i.current.textContent=e):"input"===o?r&&r.current&&(r.current.value=e):"reset"===o&&(i&&i.current&&(i.current.textContent=e),r&&r.current&&(r.current.value=e))};let l=`wpbf-control-input-${e.customizerSetting?.id}`,c=a(e.value);return t(n).createElement("div",{className:"wpbf-control-form",tabIndex:1},t(n).createElement("label",{className:"wpbf-control-label",htmlFor:l},t(n).createElement("span",{className:"customize-control-title"},e.label),t(n).createElement("span",{className:"customize-control-description description",dangerouslySetInnerHTML:{__html:e.description??""}})),t(n).createElement("div",{className:"customize-control-notifications-container",ref:e.setNotificationContainer}),t(n).createElement("button",{type:"button",className:"wpbf-control-reset",onClick:function(t){if(void 0!==e.default&&""!==e.default){let t=a(e.default);r&&r.current&&(r.current.value=t.toString()),i&&i.current&&(i.current.textContent=t.toString())}else if(void 0!==e.value&&""!==e.value){let t=a(e.value);r&&r.current&&(r.current.value=t.toString()),i&&i.current&&(i.current.textContent=t.toString())}else r&&r.current&&(r.current.value=e.min.toString()),i&&i.current&&(i.current.textContent="");o="reset";let n=a(r.current?.value);r&&r.current&&e.customizerSetting?.set(n)}},t(n).createElement("i",{className:"dashicons dashicons-image-rotate"})),t(n).createElement("div",{className:"wpbf-control-cols"},t(n).createElement("div",{className:"wpbf-control-left-col"},t(n).createElement("input",{ref:r,type:"range",id:l,defaultValue:c,min:e.min,max:e.max,step:e.step,className:"wpbf-control-slider",onChange:function(t){let n=t.target;o="range"===n.type?"slider":"input";let r=a(n.value);"input"===o&&(n.value=r.toString()),e.customizerSetting?.set(r)}})),t(n).createElement("div",{className:"wpbf-control-right-col"},t(n).createElement("div",{className:"wpbf-control-value",ref:i},c))))}n=React;let r=wp.customize.Control.extend({initialize:function(t,e){let n=this;n.setNotificationContainer=n.setNotificationContainer?.bind(n),wp.customize.Control.prototype.initialize.call(n,t,e),wp.customize.control.bind("removed",function t(e){n===e&&(n.destroy&&n.destroy(),n.container.remove(),wp.customize.control.unbind("removed",t))})},setNotificationContainer:function(t){this.notifications.container=jQuery(t),this.notifications.render()},renderContent:function(){let r=this.params;(0,e.createRoot)(this.container[0]).render(t(n).createElement(o,{control:this,customizerSetting:this.setting??void 0,setNotificationContainer:this.setNotificationContainer,label:r.label,description:r.description,default:r.default,value:r.value,min:r.min,max:r.max,step:r.step})),this.params.allowCollapse&&this.container.addClass("allowCollapse")},ready:function(){let t=this;t.setting&&t.setting.bind(e=>{t.updateComponentState?.(e)})},updateComponentState:t=>{},destroy:function(){t(e).unmountComponentAtNode(this.container[0]),wp.customize.Control.prototype.destroy&&wp.customize.Control.prototype.destroy.call(this)}});wp.customize.controlConstructor["wpbf-slider"]=r}();