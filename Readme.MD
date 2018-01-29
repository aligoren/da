# Da is a Data Attribute Change Handler

When element's attribute change you can handle it with this mini class.

# Usage

You need to `new` keyword to initialize **da** for each element.

```javascript
import da from "./da";

var btn = document.querySelector("button");
var span = document.querySelector(".spn");

btn.addEventListener("click", () => {
	let t = false;
	span.dataset.newData = 1;
	span.dataset.name = 'Mahmut'
	
})

new da(span, {
	detail: false,
	filter: "data-name"
}).change(function(e) {
		console.log(e);
});

new da(span, {
	detail: true,
	filter: "data-new-data"
}).change(function(e) {
		console.log(e, "changed");
});
```