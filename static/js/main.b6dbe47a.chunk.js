(this.webpackJsonpblind_code=this.webpackJsonpblind_code||[]).push([[0],{34:function(e,t,n){e.exports=n(47)},39:function(e,t,n){},42:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(12),r=n.n(l),i=(n(39),n(23)),c=n(24),s=n(32),m=n(30),d=n(52),u=n(26);var g=function(){return o.a.createElement("div",{className:"container2"},o.a.createElement(d.a,{id:"nav-disable",expand:"lg"},o.a.createElement(u.a,{className:"nav-title"},"Blind Typing")))},p=n(49),h=n(50),y=n(53),f=n(7),E=n.n(f);var v=function(){return E()(document).ready((function(){null==localStorage.getItem("isAttemptDone")&&(localStorage.setItem("isAttemptDone",!1),console.log(localStorage.getItem("isAttemptDone"))),localStorage.getItem("isAttemptDone")?window.location.replace("https://tejasraibagi26.github.io/blindcode/no_attempts"):(localStorage.setItem("isAttemptDone","true"),console.log(localStorage.getItem("isAttemptDone")));var e=0;E()("#code-template").bind("contextmenu",(function(t){t.preventDefault(),document.getElementById("alert-msg").innerHTML="Right Click disabled.",e+=1,console.log(e),3===e&&(console.log("Function called"),window.location.replace("https://tejasraibagi26.github.io/blindcode/exit"))})),document.getElementById("textarea").addEventListener("keydown",(function(e){var t=e.key;"Backspace"!==t&&"Delete"!==t||(e.preventDefault(),document.getElementById("alert-msg").innerHTML="You cannot delete!.")})),document.body.addEventListener("keydown",(function(t){(t.ctrlKey&&-1!=="cvxspwuazA".indexOf(t.key)||t.ctrlKey&&t.shiftKey&&-1!=="cjikzeKCJIZE".indexOf(t.key))&&(t.preventDefault(),document.getElementById("alert-msg").innerHTML="Function Disabled",e+=1,console.log(e),3===e&&(console.log("Function called"),window.location.replace("https://tejasraibagi26.github.io/blindcode/exit")))})),E()("#button").click((function(){var e=0,t=E()("#text").text(),n=E()("#textarea").val(),a=t.split(" "),o=n.split(" ");if(console.log(a,o),""!==n){for(var l=0;l<=a.length-1;l++){var r,i=a[l].localeCompare(o[l]);if(console.log(l),console.log(i),null!==i)if(-1===i)(r=document.getElementById("alert-msg")).innerHTML="Total Mistakes "+e,e+=1,console.log("Total Mistakes "+e);else(r=document.getElementById("alert-msg")).innerHTML="Strings Matched",console.log("Total Mistakes "+e),r.innerHTML="Total Mistakes "+e;else(r=document.getElementById("alert-msg")).innerHTML="Enter string please"}var c=(a.length-e)/100*100;console.log(c)}}))})),o.a.createElement("div",{id:"code-template"},o.a.createElement("p",{className:"note",align:"center"},"Note: You cannot delete any text, so make sure to type precisely!"),o.a.createElement(p.a,{className:"justify-content-md-center"},o.a.createElement(h.a,{sm:5},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"header"},o.a.createElement("h2",{className:"text-head"}," Paragraph to copy "),o.a.createElement("p",{name:"quest",className:"text",id:"text"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")))),o.a.createElement(h.a,{md:5},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"header"},o.a.createElement("h2",{className:"text-head"}," Write here (Hidden) "),o.a.createElement("textarea",{name:"answer",id:"textarea",className:"answer-holder",rows:"13",cols:"33",placeholder:"Answer"}))))),o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("h4",{id:"alert-msg",className:"row justify-content-center alerts"}),o.a.createElement(y.a,{id:"button"},"SUBMIT")))},w=n(51);var b=function(){return o.a.createElement("footer",{className:"footer-container"},o.a.createElement("div",{className:"footer-copyright text-center py-3"},o.a.createElement(w.a,{fluid:!0},"Made with \u2665 by ",o.a.createElement("a",{href:"https://tejasraibagi26.github.io/info/"}," Tejas Raibagi "))))},k=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("main",null,o.a.createElement(g,null),o.a.createElement(v,null),o.a.createElement(b,null))}}]),n}(o.a.Component);var I=function(){return o.a.createElement("div",null,o.a.createElement("h1",null," Error limit reached!"))};var x=function(){return o.a.createElement("div",null,o.a.createElement("h1",{align:"center"}," No attempts remaning"))},M=n(28),B=n(3);n(42);var D=function(){E()(document).ready((function(){var e=!!navigator.userAgent.match(/iPhone/i)||!!navigator.userAgent.match(/Android/i)||!1;console.log(e),E()(window).on("resize",(function(){var t=E()(window).height(),n=E()(window).width();e||(t<=1200||n<=1500)&&(alert("Do not move away from the website"),null!=document.getElementById("alert-msg")&&(document.getElementById("alert-msg").innerHTML="Do not move away from the website"))}))})),E()(document).ready((function(){E()("#nav-disable").bind("contextmenu",(function(e){e.preventDefault()}))}));var e=new Array(37,38,39,40,116,118,120,123);return E()(document).keydown((function(t){var n=t.which;if(E.a.inArray(n,e)>-1&&t.shiftKey){if(t.preventDefault(),null!=document.getElementById("alert-msg"))document.getElementById("alert-msg").innerHTML="Function Disabled";return!1}return!0})),E()(document).keydown((function(e){123===e.which&&(e.preventDefault(),null!=document.getElementById("alert-msg")&&(document.getElementById("alert-msg").innerHTML="Function Disabled"))})),o.a.createElement(M.a,null,o.a.createElement(B.c,null,o.a.createElement(B.a,{exact:!0,path:"/blindcode",component:k}),o.a.createElement(B.a,{exact:!0,path:"/blindcode/exit",component:I}),o.a.createElement(B.a,{exact:!0,path:"/blindcode/no_attemps",component:x})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(46);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.b6dbe47a.chunk.js.map