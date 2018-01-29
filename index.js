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