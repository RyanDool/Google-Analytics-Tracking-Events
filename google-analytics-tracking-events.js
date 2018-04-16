//function to reduce redundancy in scrips
function gaEventTag(ecategory, eaction, elable){
	//use ga() if using universal analytics
	/* 
		ga('send', 'event', ecategory, eaction, elable);
	*/

	//use gtag() if using Global Site Tag
	/* 
		gtag('event', eaction, {
		'event_category': ecategory,
		'event_label': elable
		});
	*/
}
function regexchecker(reg, str){
	let result = reg.test(str);
	return reg.test(str);
}

function trackeventclicks(e){
	e.addEventListener("click",function(e){
		if(this.tagName.toLowerCase() === 'a' && this.hasAttribute('href')){
			let trackingurl = this.getAttribute('href');
			if(regexchecker(/(\/\/)|(ht)tps?:\/\/|(www.)/, trackingurl)){
				let thiscleanhref = trackingurl.replace(/(\/\/)|(ht)tps?:\/\/|(www.)/, "");
				//Checks if external link
				if(thiscleanhref !== window.location.hostname){
					e.preventDefault();
					gaEventTag('outbound link', 'click', trackingurl);
					if(this.getAttribute('target') == '_blank'){
						window.open(
							trackingurl,
							'_blank'
						);
					}else{
						window.open(
							trackingurl,
							'_self'
						);
					}
				}else{
					e.preventDefault();
					gaEventTag('internal tracked link', 'click', trackingurl);
					if(this.getAttribute('target') == '_blank'){
						window.open(
							trackingurl,
							'_blank'
						);
					} else {
						window.open(
							trackingurl,
							'_self'
						);
					}
				}
			} else if(trackingurl.startsWith("#")){
				gaEventTag('button', 'click', trackingurl);
			}
		}else{
			let trackingLable = this.dataset.trackevent;
			gaEventTag('button', 'click', trackingLable);
		}
	})
}

//Loops through all elements with data-trackevent attribute.
const dataevents = document.querySelectorAll('[data-trackevent]');
dataevents.forEach(dataevent => trackeventclicks(dataevent));