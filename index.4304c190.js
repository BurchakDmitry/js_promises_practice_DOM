var e=document.querySelector("body"),t=!1,n=!1;function o(t){var n=!(arguments.length>1)||void 0===arguments[1]||arguments[1],o=document.createElement("div");o.classList.add(n?"success":"error"),o.textContent=t,o.setAttribute("data-qa","notification"),e.appendChild(o)}var i=new Promise(function(e,t){var n=setTimeout(function(){t("First promise was rejected")},3e3);document.addEventListener("mousedown",function(t){0===t.button&&(clearTimeout(n),e("First promise was resolved"))})}),u=new Promise(function(e){document.addEventListener("mousedown",function(o){0===o.button&&(t=!0),2===o.button&&(n=!0),(t||n)&&e("Second promise was resolved")})}),r=new Promise(function(e){document.addEventListener("mousedown",function(o){0===o.button&&(t=!0),2===o.button&&(n=!0),t&&n&&e("Third promise was resolved")})});i.then(function(e){o(e,!0)}).catch(function(e){o(e,!1)}),u.then(function(e){o(e,!0)}),r.then(function(e){o(e,!0)}),document.addEventListener("contextmenu",function(e){return e.preventDefault()});
//# sourceMappingURL=index.4304c190.js.map
