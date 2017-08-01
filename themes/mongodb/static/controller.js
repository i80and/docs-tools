!function(){"use strict";function t(t){return!t.siblings("ul:not(.simple)").length}function e(t){var e=window.docsExcludedNav;if(!e||!e.length)return!1;for(var n=0;n<e.length;n+=1)if(-1!==t[0].href.indexOf(e[n]))return!0;return!1}function n(t,e){var n=new XMLHttpRequest;n.onload=function(){n.status>=200&&n.status<400?(e.success(n.responseText,n.responseURL),e.complete()):(e.error(),e.complete())},n.onerror=function(){e.error(),e.complete()},n.open("GET",t,!0);try{n.send()}catch(t){e.error(),e.complete()}}function o(){}function a(t){for(var e,n,o=arguments,a=1,r=arguments.length;a<r;a++){n=o[a];for(e in n)t[e]=n[e]}return t}function r(t,e){e.appendChild(t)}function i(t,e,n){e.insertBefore(t,n)}function s(t){t.parentNode.removeChild(t)}function u(t,e){for(;t.nextSibling&&t.nextSibling!==e;)t.parentNode.removeChild(t.nextSibling)}function c(t,e,n){for(var o=n;o<t.length;o+=1)t[o]&&t[o].destroy(e)}function l(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return document.createComment("")}function h(t,e,n){t.addEventListener(e,n,!1)}function p(t,e,n){t.removeEventListener(e,n,!1)}function m(t,e,n){t.setAttribute(e,n)}function g(t,e){return t!==e||t&&"object"==typeof t||"function"==typeof t}function v(t,e,n,o){for(var a in e)if(a in n){var r=n[a],i=o[a];if(g(r,i)){var s=e[a];if(!s)continue;for(var u=0;u<s.length;u+=1){var c=s[u];c.__calling||(c.__calling=!0,c.call(t,r,i),c.__calling=!1)}}}}function y(t){for(;t&&t.length;)t.pop()()}function _(t,e,n,o){(o||"answer"in e&&g(t.answer,n.answer))&&(t.upvoteSelected=e.upvoteSelected=J.computed.upvoteSelected(t.answer),t.downvoteSelected=e.downvoteSelected=J.computed.downvoteSelected(t.answer))}function b(t,e){function n(t){e.change(!0)}function o(t){e.change(!1)}var a,c,f=l("div"),m=l("noscript");r(m,f);var g=l("noscript");r(g,f);var v=t.caption;m.insertAdjacentHTML("afterend",v);var y=d("\n"),_=l("div"),b=l("span");r(b,_),b.className=a="switch fa fa-thumbs-up good "+t.upvoteSelected,h(b,"click",n),r(d("\n    "),_);var w=l("span");return r(w,_),w.className=c="switch fa fa-thumbs-down bad "+t.downvoteSelected,h(w,"click",o),{mount:function(t,e){i(f,t,e),i(y,t,e),i(_,t,e)},update:function(t,e){v!==(v=e.caption)&&(u(m,g),m.insertAdjacentHTML("afterend",v)),a!==(a="switch fa fa-thumbs-up good "+e.upvoteSelected)&&(b.className=a),c!==(c="switch fa fa-thumbs-down bad "+e.downvoteSelected)&&(w.className=c)},unmount:function(){u(m,g),s(f),s(y),s(_)},destroy:function(){p(b,"click",n),p(w,"click",o)}}}function w(t){t=t||{},this._state=a(J.data(),t.data),_(this._state,this._state,{},!0),this._observers={pre:Object.create(null),post:Object.create(null)},this._handlers=Object.create(null),this._root=t._root||this,this._yield=t._yield,this._torndown=!1,this._fragment=b(this._state,this),t.target&&this._fragment.mount(t.target,null)}function C(t,e){function n(){r=!0,e._set({answer:u.value}),r=!1}function o(t){var n=e.get();e.fire("change",n.answer)}var a,r=!1,u=l("textarea");return u.placeholder=a=t.caption,h(u,"input",n),h(u,"input",o),u.value=t.answer,{mount:function(t,e){i(u,t,e)},update:function(t,e){a!==(a=e.caption)&&(u.placeholder=a),r||(u.value=e.answer)},unmount:function(){s(u)},destroy:function(){p(u,"input",n),p(u,"input",o)}}}function x(t){t=t||{},this._state=a(G.data(),t.data),this._observers={pre:Object.create(null),post:Object.create(null)},this._handlers=Object.create(null),this._root=t._root||this,this._yield=t._yield,this._torndown=!1,this._fragment=C(this._state,this),t.target&&this._fragment.mount(t.target,null)}function k(t,e,n,o){(o||"state"in e&&g(t.state,n.state))&&(t.delugeClass=e.delugeClass=X.computed.delugeClass(t.state),t.delugeHeaderClass=e.delugeHeaderClass=X.computed.delugeHeaderClass(t.state),t.delugeBodyClass=e.delugeBodyClass=X.computed.delugeBodyClass(t.state))}function j(t,e){function n(t){e.toggle()}function o(t){return"Voted"===t.state?E:"Pending "==t.state?L:"NotVoted"===t.state?D:"boolean"==typeof t.state?A:null}var a,u,c,f=l("div");f.className=a=t.delugeClass;var m=l("div");r(m,f),m.className=u=t.delugeHeaderClass,h(m,"click",n);var g="Initial"===t.state&&S(t,e);g&&g.mount(m,null);var v=d("\n\n        ");r(v,m);var y=l("span");r(y,m),y.className="deluge-helpful",r(d("Was this page helpful?"),y),r(d("\n\n    "),m);var _="Initial"!==t.state&&q(t,e);_&&_.mount(m,null),r(d("\n\n    "),f);var b=l("div");r(b,f),b.className=c=t.delugeBodyClass;var w=o(t),C=w&&w(t,e);C&&C.mount(b,null);var x=d("\n\n    ");r(x,b);var k="Initial"!==t.state&&B(t,e);return k&&k.mount(b,null),{mount:function(t,e){i(f,t,e)},update:function(t,n){a!==(a=n.delugeClass)&&(f.className=a),u!==(u=n.delugeHeaderClass)&&(m.className=u),"Initial"===n.state?g||(g=S(n,e)).mount(m,v):g&&(g.unmount(),g.destroy(),g=null),"Initial"!==n.state?_||(_=q(n,e)).mount(m,null):_&&(_.unmount(),_.destroy(),_=null),c!==(c=n.delugeBodyClass)&&(b.className=c),w===(w=o(n))&&C?C.update(t,n):(C&&(C.unmount(),C.destroy()),(C=w&&w(n,e))&&C.mount(b,x)),"Initial"!==n.state?k?k.update(t,n):(k=B(n,e)).mount(b,null):k&&(k.unmount(),k.destroy(),k=null)},unmount:function(){s(f),g&&g.unmount(),_&&_.unmount(),k&&k.unmount()},destroy:function(){p(m,"click",n),g&&g.destroy(),_&&_.destroy(),C&&(C.unmount(),C.destroy()),k&&k.destroy()}}}function S(t,e){var n=l("span");return n.className="fa fa-comments deluge-comment-icon",{mount:function(t,e){i(n,t,e)},unmount:function(){s(n)},destroy:o}}function q(t,e){var n=l("span");return n.className="fa fa-angle-down deluge-close-icon",{mount:function(t,e){i(n,t,e)},unmount:function(){s(n)},destroy:o}}function N(t,e){var n=l("li");return r(d("We're sorry! Please help us improve this page."),n),{mount:function(t,e){i(n,t,e)},unmount:function(){s(n)},destroy:o}}function O(t,e,n,o,a){function r(t,e,n,o){return"binary"===n.type?I:"freeform"===n.type?T:null}var u=l("li"),c=r(0,0,n),d=c&&c(t,e,n,o,a);return d&&d.mount(u,null),{mount:function(t,e){i(u,t,e)},update:function(t,e,n,o,i){c===(c=r(0,0,o))&&d?d.update(t,e,n,o,i):(d&&(d.unmount(),d.destroy()),(d=c&&c(e,n,o,i,a))&&d.mount(u,null))},unmount:function(){s(u)},destroy:function(){d&&(d.unmount(),d.destroy())}}}function I(t,e,n,o,a){var r=new w({target:null,_root:a._root,data:{name:n.name,caption:n.caption}});return r.on("change",function(t){var e=this._context.each_block_value[this._context.question_index];a.update(e.name,t)}),r._context={each_block_value:e,question_index:o},{mount:function(t,e){r._fragment.mount(t,e)},update:function(t,e,n,o,a){r._context.each_block_value=n,r._context.question_index=a;var i={};"questions"in t&&(i.name=o.name),"questions"in t&&(i.caption=o.caption),Object.keys(i).length&&r.set(i)},unmount:function(){r._fragment.unmount()},destroy:function(){r.destroy(!1)}}}function T(t,e,n,o,a){var r=new x({target:null,_root:a._root,data:{name:n.name,caption:n.caption}});return r.on("change",function(t){var e=this._context.each_block_value[this._context.question_index];a.update(e.name,t)}),r._context={each_block_value:e,question_index:o},{mount:function(t,e){r._fragment.mount(t,e)},update:function(t,e,n,o,a){r._context.each_block_value=n,r._context.question_index=a;var i={};"questions"in t&&(i.name=o.name),"questions"in t&&(i.caption=o.caption),Object.keys(i).length&&r.set(i)},unmount:function(){r._fragment.unmount()},destroy:function(){r.destroy(!1)}}}function E(t,e){var n=l("p");return r(d("Thank you for your feedback!"),n),{mount:function(t,e){i(n,t,e)},update:o,unmount:function(){s(n)},destroy:o}}function L(t,e){var n=l("p");return r(d("Submitting feedback..."),n),{mount:function(t,e){i(n,t,e)},update:o,unmount:function(){s(n)},destroy:o}}function D(t,e){function n(t){e.rate(!0)}function a(t){e.rate(!1)}var u=l("a");u.className="deluge-vote-button",h(u,"click",n),r(d("Yes"),u);var c=d("\n        "),f=l("a");return f.className="deluge-vote-button",h(f,"click",a),r(d("No"),f),{mount:function(t,e){i(u,t,e),i(c,t,e),i(f,t,e)},update:o,unmount:function(){s(u),s(c),s(f)},destroy:function(){p(u,"click",n),p(f,"click",a)}}}function A(t,e){function n(t){e.toggle()}function o(t){e.submit()}var a=l("div");a.className="deluge-questions";var u=l("ul");r(u,a),m(u,"ref",!0);var g=!1===t.state&&N(t,e);g&&g.mount(u,null);var v=f();r(v,u);for(var y=t.questions,_=[],b=0;b<y.length;b+=1)_[b]=O(t,y,y[b],b,e),_[b].mount(u,null);r(d("\n\n            "),a);var w=l("div");r(w,a),w.className="deluge-button-group";var C=l("button");r(C,w),h(C,"click",n),r(d("Cancel"),C),r(d("\n                "),w);var x=l("button");return r(x,w),x.className="primary",h(x,"click",o),r(d("Submit"),x),{mount:function(t,e){i(a,t,e)},update:function(t,n){!1===n.state?g||(g=N(n,e)).mount(u,v):g&&(g.unmount(),g.destroy(),g=null);var o=n.questions;if("questions"in t){for(var a=0;a<o.length;a+=1)_[a]?_[a].update(t,n,o,o[a],a):(_[a]=O(n,o,o[a],a,e),_[a].mount(u,null));for(;a<_.length;a+=1)_[a].unmount(),_[a].destroy();_.length=o.length}},unmount:function(){s(a),g&&g.unmount();for(var t=0;t<_.length;t+=1)_[t].unmount()},destroy:function(){g&&g.destroy(),c(_,!1,0),p(C,"click",n),p(x,"click",o)}}}function B(t,e){function n(t){e.showCollectorDialog()}var o,a=l("a");return a.className="deluge-fix-button jira-link jirafeedback",a.target="_blank",a.title=o="Report a problem with "+t.pagename+" on Jira",h(a,"click",n),r(d("Fix This Page"),a),{mount:function(t,e){i(a,t,e)},update:function(t,e){o!==(o="Report a problem with "+e.pagename+" on Jira")&&(a.title=o)},unmount:function(){s(a)},destroy:function(){p(a,"click",n)}}}function P(t){t=t||{},this._state=a(X.data(),t.data),k(this._state,this._state,{},!0),this._observers={pre:Object.create(null),post:Object.create(null)},this._handlers=Object.create(null),this._root=t._root||this,this._yield=t._yield,this._torndown=!1,this._renderHooks=[],this._fragment=j(this._state,this),t.target&&this._fragment.mount(t.target,null),this._flush()}function H(t,e){var n=[];return e.forEach(function(t,e){n.push(encodeURIComponent(e)+"="+encodeURIComponent(JSON.stringify(t)))}),t+"?"+n.join("&")}function Q(){var t=document.querySelector(".body").getAttribute("data-pagename");if(!Object.prototype.hasOwnProperty.call(tt,t)){var e=document.getElementById("rating-panel");e&&(e.innerText="",e&&new Y(Z,t,e).askFreeformQuestion("reason","What were you looking for?").askQuestion("findability","Did you find it?").askQuestion("accuracy","Was the information you found <strong>accurate</strong>?").askQuestion("clarity","Was the information <strong>clear</strong>?").askQuestion("fragmentation","Was the information you needed <strong>all on one page</strong>?"))}}function R(t){return t.hasClass("current")}function F(t){"#"===t.charAt(0)&&(t=t.substring(1)),$(".tab-content").children().hide(),$(".tabs ."+t).show()}function z(t){var e=$('a[href="'+t+'"]'),n=e.parent("li"),o=n.parent("ul"),a=$(".nav.nav-tabs.nav-justified .dropdown-toggle"),r=$(".nav.nav-tabs.nav-justified .dropdown");o.hasClass("dropdown-menu")?(a.text(""+e.first().text()).append('<span class="caret"></span>'),r.addClass("active").siblings().removeClass("active")):(n.addClass("active").siblings().removeClass("active"),a.text("Other ").append('<span class="caret"></span>'))}function U(){var t=$(".nav.nav-tabs.nav-justified"),e=t.first();t.slice(1).detach(),e.detach().insertAfter("h1").first()}function V(t){var e=document.getElementsByClassName("body")[0].getAttribute("data-pagename");return"index"===e?e="":e&&(e+="/"),"/"+t+"/"+e}var K=Object.freeze({setup:function(){for(var t=0,e=document.getElementsByClassName("copyable-code");t<e.length;t+=1){var n=function(){var n=e[t].getElementsByClassName("highlight")[0];if(!n)return{};var o=n.innerText.trim(),a=document.createElement("div"),r=document.createElement("button"),i=document.createElement("span");a.className="copy-button-container",i.className="fa fa-clipboard",r.className="copy-button",r.appendChild(i),r.appendChild(document.createTextNode("Copy")),a.appendChild(r),n.insertBefore(a,n.children[0]),r.addEventListener("click",function(){var t=document.createElement("textarea");document.body.appendChild(t),t.value=o,t.select();try{if(!document.execCommand("copy"))throw new Error("Failed to copy")}catch(t){console.error("Failed to copy"),console.error(t)}document.body.removeChild(t)})}();if(n)return n.v}}}),M=Object.freeze({setup:function(o){function a(){void 0!==u.timeoutID&&window.clearTimeout(u.timeoutID),void 0!==u.xhr&&u.xhr.abort(),u={}}function r(t,e){void 0===t&&console.error("Going to undefined path"),a(),s.classList.add("loading"),u.timeoutID=window.setTimeout(function(){s.classList.remove("loading"),u.timeoutID=-1},1e4);var r=new Date;u.xhr=n(t,{complete:function(){a()},error:function(e){console.error("Failed to load "+t),window.location=t},success:function(t,n){var a=new Date-r;s.classList.remove("loading"),e&&window.history.pushState({href:n},"",n);var u=document.createElement("html");u.innerHTML=t;var c=u.querySelector("title").textContent,l=u.querySelector(".body"),d=u.querySelector(".sphinxsidebarwrapper");a>62.5&&l.classList.add("loading"),s.parentElement.replaceChild(l,s),s=l,i.parentElement.replaceChild(d,i),i=d,document.title=c,o.update(),window.history.onnavigate&&window.history.onnavigate(),window.setTimeout(function(){s.classList.remove("loading"),e&&window.scroll(0,0)},1)}})}if(void 0===window.history||void 0===document.querySelectorAll||void 0===document.body.classList||void 0===(new XMLHttpRequest).responseURL)return!1;var i=document.querySelector(".sphinxsidebarwrapper"),s=document.querySelector(".body"),u={};window.history.replaceState({href:window.location.href},document.querySelector("title").textContent,window.location.href);for(var c=document.querySelectorAll(".sphinxsidebarwrapper > ul a.reference.internal"),l=0;l<c.length;l+=1){var d=c[l];(t($(d))||e($(d)))&&d.addEventListener("click",function(t){0!==t.button||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),r(t.currentTarget.href,!0))})}return window.onpopstate=function(t){null!==t.state&&r(t.state.href,!1)},!0}}),W={get:function(t){return t?this._state[t]:this._state},fire:function(t,e){var n=this,o=t in this._handlers&&this._handlers[t].slice();if(o)for(var a=0;a<o.length;a+=1)o[a].call(n,e)},observe:function(t,e,n){var o=n&&n.defer?this._observers.post:this._observers.pre;return(o[t]||(o[t]=[])).push(e),n&&!1===n.init||(e.__calling=!0,e.call(this,this._state[t]),e.__calling=!1),{cancel:function(){var n=o[t].indexOf(e);~n&&o[t].splice(n,1)}}},on:function(t,e){if("teardown"===t)return this.on("destroy",e);var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},set:function(t){this._set(a({},t)),y(this._root._oncreate)}},J={data:function(){return{name:"",caption:"",answer:null}},methods:{change:function(t){this.set({answer:t}),this.fire("change",t)}},computed:{upvoteSelected:function(t){return!0===t?"selected":""},downvoteSelected:function(t){return!1===t?"selected":""}}};a(w.prototype,J.methods,W),w.prototype._set=function(t){var e=this._state;this._state=a({},e,t),_(this._state,t,e,!1),v(this,this._observers.pre,t,e),this._fragment.update(t,this._state),v(this,this._observers.post,t,e)},w.prototype.teardown=w.prototype.destroy=function(t){this.fire("destroy"),!1!==t&&this._fragment.unmount(),this._fragment.destroy(),this._fragment=null,this._state={},this._torndown=!0};var G={data:function(){return{name:"",caption:"",answer:""}},methods:{change:function(){this.fire("change",this.get("answer"))}}};a(x.prototype,G.methods,W),x.prototype._set=function(t){var e=this._state;this._state=a({},e,t),v(this,this._observers.pre,t,e),this._fragment.update(t,this._state),v(this,this._observers.post,t,e)},x.prototype.teardown=x.prototype.destroy=function(t){this.fire("destroy"),!1!==t&&this._fragment.unmount(),this._fragment.destroy(),this._fragment=null,this._state={},this._torndown=!0};var X={data:function(){return{project:"",pagename:"",state:"Initial",jiraurl:"https://jira.mongodb.org/s/en_UScn8g8x/782/6/1.2.5/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?collectorId=298ba4e7",questions:[],answers:{}}},computed:{delugeClass:function(t){return"Initial"===t?"deluge":"deluge deluge-expanded"},delugeHeaderClass:function(t){return"Initial"===t?"deluge-header":"deluge-header deluge-header-expanded"},delugeBodyClass:function(t){return"Initial"===t?"deluge-body":"deluge-body deluge-body-expanded"}},methods:{toggle:function(){this.set({answers:{}}),"Initial"===this.get("state")?this.set({state:"NotVoted"}):this.set({state:"Initial"})},submit:function(){var t=this.get("state");if("boolean"!=typeof t)throw new Error("Assertion failed: Feedback submitted without vote");for(var e=new Map,n=this.get("answers"),o=0,a=Object.keys(n);o<a.length;o+=1){var r=a[o],i=n[r];null!==i&&void 0!==i&&e.set(r,i)}this.set({state:"Pending"}),this.fire("submit",{vote:t,fields:e})},rate:function(t){this.set({state:t})},addQuestion:function(t,e,n){return this.set({questions:this.get("questions").concat({type:t,name:e,caption:n})}),this},update:function(t,e){this.get("answers")[t]=e},showCollectorDialog:function(){window.ATL_JQ_PAGE_PROPS={triggerFunction:function(t){window.setTimeout(function(){return t()},1)},fieldValues:{summary:'Comment on: "'+this.get("project")+"/"+this.get("pagename")+'"'}},jQuery.ajax({cache:!0,dataType:"script",type:"get",url:this.get("jiraurl")})}}};a(P.prototype,X.methods,W),P.prototype._set=function(t){var e=this._state;this._state=a({},e,t),k(this._state,t,e,!1),v(this,this._observers.pre,t,e),this._fragment.update(t,this._state),v(this,this._observers.post,t,e),this._flush()},P.prototype.teardown=P.prototype.destroy=function(t){this.fire("destroy"),!1!==t&&this._fragment.unmount(),this._fragment.destroy(),this._fragment=null,this._state={},this._torndown=!0};var Y=function(t,e,n){var o=this;this.project=t,this.path=e,this.storageKey="feedback-"+t+"/"+e;var a=localStorage[this.storageKey],r=a?Date.parse(a).valueOf():-1/0,i="Initial";(new Date).valueOf()<r+2592e6&&(i="Voted"),this.app=new P({target:n,data:{state:i,project:t,pagename:e}}),this.app.on("submit",function(t){o.sendRating(t.vote,t.fields).then(function(){o.app.set({state:"Voted"})})})};Y.prototype.askQuestion=function(t,e){return this.app.addQuestion("binary",t,e),this},Y.prototype.askFreeformQuestion=function(t,e){return this.app.addQuestion("freeform",t,e),this},Y.prototype.sendRating=function(t,e){var n=this;return new Promise(function(o,a){e.set("v",t),e.set("p",n.project+"/"+n.path);var r=H("http://deluge.us-east-1.elasticbeanstalk.com/",e),i=new Image;i.onload=function(){return o()},i.onerror=function(){return a()},i.src=r})},Y.prototype.open=function(){this.app.open()};var Z=null,tt={"meta/404":!0,search:!0},et=Object.freeze({init:function(){Z=document.body.getAttribute("data-project")},setup:function(){void 0!==window.localStorage&&Q()}}),nt=Object.freeze({setup:function(){var n=$(".sidebar a.current");(t(n)||e(n)||R(n))&&n.parent("li").addClass("selected-item"),n.parents("ul").each(function(t,e){$(e).css("display","block")}),$(".sphinxsidebarwrapper > ul li:not(.current) > ul:not(.current)").hide(),$(".sphinxsidebarwrapper").show(),$(".sphinxsidebarwrapper .toctree-l1").on("click","a",function(o){var a=$(o.currentTarget);t(a)||!a.parent().hasClass("selected-item")&&e(a)||(o.preventDefault(),a.parent().hasClass("current")?(a.parent().removeClass("current selected-item"),a.siblings("ul").slideUp()):(n.parent().removeClass("selected-item"),n.parents().add(n.siblings("ul")).each(function(t,e){var n=$(e);n.has(o.currentTarget).length||(n.is("ul")?n.removeClass("current").slideUp():n.removeClass("current"))}),a.parent().addClass("current"),a.siblings("ul").slideDown(function(){(t(a)||e(a)||R(n))&&a.parent("li").addClass("selected-item")}),n=a))}),$(".sphinxsidebarwrapper > ul ul a.reference").prepend(function(e){var n=$('<span class="expand-icon"></span>');return t($(this))||n.addClass("docs-expand-arrow"),n})}}),ot=Object.freeze({setup:function(){U();var t=null;if(localStorage.getItem("languagePref"))t=localStorage.getItem("languagePref"),$('a[href="'+t+'"]').length<1&&document.querySelector(".nav.nav-tabs.nav-justified > li:first-child > a")&&(t=document.querySelector(".nav.nav-tabs.nav-justified > li:first-child > a").getAttribute("href"));else{var e=document.querySelector(".nav-tabs > .active > [href]");if(!e)return;t=e.getAttribute("href")}F(t),z(t);for(var n=document.querySelectorAll(".nav.nav-tabs.nav-justified a"),o=0;o<n.length;o+=1)!function(t){var e=n[t];e.onclick=function(t){var n=e.getAttribute("href");n&&(localStorage.setItem("languagePref",n),F(n),z(n),U(),t.preventDefault())}}(o)}}),at=Object.freeze({setup:function(){$(".version-selector").on("click",function(t){t.preventDefault();var e=$(t.currentTarget).data("path");window.location.href=V(e)})}}),rt=function(){this.components=[]};rt.prototype.register=function(t){this.components.push(t),t.init&&t.init()},rt.prototype.update=function(){for(var t=this,e=0,n=t.components;e<n.length;e+=1)n[e].setup(t)};var it=new rt;$(function(){function t(){location.hash&&document.getElementById(location.hash.substr(1))&&$(window).scrollTop(window.scrollY-75)}it.register(K),it.register(M),it.register(et),it.register(nt),it.register(ot),it.register(at),$("body").on("click","#header-db, .sidebar, .content",function(t){$(".option-popup").addClass("closed").find(".fa-angle-down, .fa-angle-up").removeClass("fa-angle-down").addClass("fa-angle-up")}),$(".sphinxsidebarwrapper h3 a.version").on("click",function(t){t.preventDefault(),t.stopPropagation(),$(".option-popup").removeClass("closed")}),$(".toc > ul > li > ul > li").length||$(".right-column .toc").hide(),$(".expand-toc-icon").on("click",function(t){t.preventDefault(),$(".sidebar").toggleClass("reveal")});var e=$(window),n=$(".sidebar"),o=e.width()<=1093;if(e.resize(function(t){o&&e.width()>1093?(o=!1,n.removeClass("reveal")):!o&&e.width()<=1093&&(o=!0)}),window.addEventListener("hashchange",t),location.hash&&window.setTimeout(t,10),$(".content").on("click","a",function(e){$(e.currentTarget).attr("href")===location.hash&&window.setTimeout(t,10)}),it.update(),document.querySelector){var a=document.querySelector("a.current");a&&a.scrollIntoView(!1)}})}();
//# sourceMappingURL=controller.js.map