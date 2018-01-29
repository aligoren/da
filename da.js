class da {
	constructor(el, data) {
		this.el = el;
		this.filter = data.filter;
		this.detail = data.detail;
		this.opts = { 
		  attributes: true, 
		}
		return this;
	}
	
	change(fn) {
		let that = this;
		let data = {};
		
		let observer = new MutationObserver(function(mutations) {
			let evt = new CustomEvent('DataChange', { 
				detail: {
					mutlist: mutations,
					changed: mutations.map((k, v) => mutations[v].attributeName),
					values: mutations.map((k, v) => mutations[v].target.getAttribute(mutations[v].attributeName)),
				}									
			})
			
			that.el.dispatchEvent(evt);
			
			data = {
				changed: evt.detail.mutlist.map((k, v) => evt.detail.mutlist[v].attributeName),
				values: evt.detail.mutlist.map((k, v) => evt.detail.mutlist[v].target.getAttribute(evt.detail.mutlist[v].attributeName)),
			}
			if(that.detail) {
				data['all'] = evt.detail;
			}
			
			fn(data);
			
			
		});
		if(that.filter) {
			that.opts['attributeFilter'] = [that.filter];
		}
		observer.observe(that.el, that.opts);
	}
}

module.exports = da;