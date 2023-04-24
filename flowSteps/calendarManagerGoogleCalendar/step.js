/**
 * This flow step will send a request to handle calendars with the googlecalendar endpoint.
 *
 * @param {object} inputs
 * {Array[string]} params, This is used to config params.
 * {string} body, This is used to send body request.
 * {boolean} fullResponse, This is used to config full response.
 */
step.calendarManagerGoogleCalendar = function (inputs) {

	var inputsLogic = {
		params: inputs.params || [],
		body: inputs.body || {},
		fullResponse: inputs.fullResponse || false,
		url: {
			urlValue: inputs.url.urlValue ? inputs.url.urlValue.split(" ")[1] : "",
			paramsValue: inputs.url.paramsValue || []
		},
		method: inputs.url.urlValue ? inputs.url.urlValue.split(" ")[0] : ""
	};

	inputsLogic.params = isObject(inputsLogic.params) ? inputsLogic.params : stringToObject(inputsLogic.params);
	inputsLogic.body = isObject(inputsLogic.body) ? inputsLogic.body : JSON.parse(inputsLogic.body);


	var options = {
		path: parse(inputsLogic.url.urlValue, inputsLogic.url.paramsValue),
		params: inputsLogic.params,
		body: inputsLogic.body,
		fullResponse : inputsLogic.fullResponse
	}

	switch (inputsLogic.method.toLowerCase()) {
		case 'get':
			return endpoint._get(options);
		case 'post':
			return endpoint._post(options);
		case 'delete':
			return endpoint._delete(options);
		case 'put':
			return endpoint._put(options);
	}

	return null;
};

var parse = function (url, pathVariables) {

	var regex = /{([^}]*)}/g;

	if (!url.match(regex)){
		return url;
	}

	if(!pathVariables){
		sys.logs.error('No path variables have been received and the url contains curly brackets\'{}\'');
		throw new Error('Error please contact support.');
	}

	url = url.replace(regex, function(m, i) {
		return pathVariables[i] ? pathVariables[i] : m;
	})

	return url;
}

var isObject = function (obj) {
	return !!obj && stringType(obj) === '[object Object]'
};

var stringType = Function.prototype.call.bind(Object.prototype.toString);

var stringToObject = function (obj) {
	if (!!obj){
		var keyValue = obj.toString().split(',');
		var parseObj = {};
		for(var i = 0; i < keyValue.length; i++) {
			parseObj[keyValue[i].split('=')[0]] = keyValue[i].split('=')[1]
		}
		return parseObj;
	}
	return null;
};