// Bind functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind


function streetView() {


	var module = {
		x: 42,
	    getX: function() {
	      return this.x;
	    }
	}

	var boundGetX = module.getX.bind(module);
	console.log(boundGetX());


	// sample HTTP request
	var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "http://bigbensmathtutoring.com/";

	xhr.open(method, url, true);
	xhr.onreadystatechange = function () {
	  if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
	    console.log(xhr.responseText);
	  }
	};
	xhr.send();



}
