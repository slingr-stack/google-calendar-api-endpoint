////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////

endpoint.calendars = {};

endpoint.calendars.acl = {};

endpoint.calendars.acl.watch = {};

endpoint.users = {};

endpoint.users.me = {};

endpoint.users.me.calendarList = {};

endpoint.users.me.calendarList.watch = {};

endpoint.calendars.clear = {};

endpoint.channels = {};

endpoint.channels.stop = {};

endpoint.colors = {};

endpoint.calendars.events = {};

endpoint.calendars.events.import = {};

endpoint.calendars.events.instances = {};

endpoint.calendars.events.move = {};

endpoint.calendars.events.quickAdd = {};

endpoint.calendars.events.watch = {};

endpoint.freeBusy = {};

endpoint.users.me.settings = {};

endpoint.users.me.settings.watch = {};

endpoint.calendars.acl.delete = function(calendarId, ruleId, httpOptions) {
    if (!calendarId || !ruleId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId,ruleId].');
        return;
    }
    var url = parse('/calendars/:calendarId/acl/:ruleId', [calendarId, ruleId]);
    sys.logs.debug('[googlecalendar] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.calendars.acl.get = function(calendarId, ruleId, httpOptions) {
    if (!calendarId || arguments.length === 0) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-1){
        case 0:
            url = parse('/calendars/:calendarId/acl', [calendarId]);
            break;
        case 1:
            url = parse('/calendars/:calendarId/acl/:ruleId', [calendarId, ruleId]);
            break;
        case 2:
            url = parse('/calendars/:calendarId/acl/:ruleId', [calendarId,ruleId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[googlecalendar] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.calendars.acl.post = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/calendars/:calendarId/acl', [calendarId]);
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.calendars.acl.patch = function(calendarId, ruleId, httpOptions) {
    if (!calendarId || !ruleId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId,ruleId].');
        return;
    }
    var url = parse('/calendars/:calendarId/acl/:ruleId', [calendarId, ruleId]);
    sys.logs.debug('[googlecalendar] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.calendars.acl.put = function(calendarId, ruleId, httpOptions) {
    if (!calendarId || !ruleId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId,ruleId].');
        return;
    }
    var url = parse('/calendars/:calendarId/acl/:ruleId', [calendarId, ruleId]);
    sys.logs.debug('[googlecalendar] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.calendars.acl.watch.post = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/calendars/:calendarId/acl/watch', [calendarId]);
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.users.me.calendarList.delete = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/users/me/calendarList/:calendarId', [calendarId]);
    sys.logs.debug('[googlecalendar] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.users.me.calendarList.get = function(calendarId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/users/me/calendarList');
			break;
		case 1:
			url = parse('/users/me/calendarList/:calendarId', [calendarId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[googlecalendar] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.users.me.calendarList.post = function(httpOptions) {
    var url = parse('/users/me/calendarList');
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.users.me.calendarList.patch = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/users/me/calendarList/:calendarId', [calendarId]);
    sys.logs.debug('[googlecalendar] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.users.me.calendarList.put = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/users/me/calendarList/:calendarId', [calendarId]);
    sys.logs.debug('[googlecalendar] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.users.me.calendarList.watch.post = function(httpOptions) {
    var url = parse('/users/me/calendarList/watch');
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.calendars.clear.post = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/calendars/:calendarId/clear', [calendarId]);
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.calendars.post = function(calendarId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/calendars');
			break;
		case 1:
			url = parse('/calendars/:calendarId', [calendarId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[googlecalendar] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.calendars.get = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/calendars/:calendarId', [calendarId]);
    sys.logs.debug('[googlecalendar] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.calendars.patch = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/calendars/:calendarId', [calendarId]);
    sys.logs.debug('[googlecalendar] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.calendars.put = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/calendars/:calendarId', [calendarId]);
    sys.logs.debug('[googlecalendar] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.channels.stop.post = function(httpOptions) {
    var url = parse('/channels/stop');
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.colors.get = function(httpOptions) {
    var url = parse('/colors');
    sys.logs.debug('[googlecalendar] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.calendars.events.delete = function(calendarId, eventId, httpOptions) {
    if (!calendarId || !eventId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId,eventId].');
        return;
    }
    var url = parse('/calendars/:calendarId/events/:eventId', [calendarId, eventId]);
    sys.logs.debug('[googlecalendar] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.calendars.events.get = function(calendarId, eventId, httpOptions) {
    if (!calendarId || arguments.length === 0) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-1){
        case 0:
            url = parse('/calendars/:calendarId/events', [calendarId]);
            break;
        case 1:
            url = parse('/calendars/:calendarId/events/:eventId', [calendarId, eventId]);
            break;
        case 2:
            url = parse('/calendars/:calendarId/events/:eventId', [calendarId,eventId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[googlecalendar] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.calendars.events.import.post = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/calendars/:calendarId/events/import', [calendarId]);
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.calendars.events.post = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/calendars/:calendarId/events', [calendarId]);
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.calendars.events.instances.get = function(calendarId, eventId, httpOptions) {
    if (!calendarId || !eventId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId,eventId].');
        return;
    }
    var url = parse('/calendars/:calendarId/events/:eventId/instances', [calendarId, eventId]);
    sys.logs.debug('[googlecalendar] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.calendars.events.move.post = function(calendarId, eventId, httpOptions) {
    if (!calendarId || !eventId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId,eventId].');
        return;
    }
    var url = parse('/calendars/:calendarId/events/:eventId/move', [calendarId, eventId]);
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.calendars.events.patch = function(calendarId, eventId, httpOptions) {
    if (!calendarId || !eventId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId,eventId].');
        return;
    }
    var url = parse('/calendars/:calendarId/events/:eventId', [calendarId, eventId]);
    sys.logs.debug('[googlecalendar] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.calendars.events.quickAdd.post = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/calendars/:calendarId/events/quickAdd', [calendarId]);
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.calendars.events.put = function(calendarId, eventId, httpOptions) {
    if (!calendarId || !eventId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId,eventId].');
        return;
    }
    var url = parse('/calendars/:calendarId/events/:eventId', [calendarId, eventId]);
    sys.logs.debug('[googlecalendar] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.calendars.events.watch.post = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/calendars/:calendarId/events/watch', [calendarId]);
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.freeBusy.post = function(httpOptions) {
    var url = parse('/freeBusy');
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.users.me.settings.get = function(setting, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/users/me/settings');
			break;
		case 1:
			url = parse('/users/me/settings/:setting', [setting]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[googlecalendar] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.users.me.settings.watch.post = function(httpOptions) {
    var url = parse('/users/me/settings/watch');
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

////////////////////////////////////
// Public API - Generic Functions //
////////////////////////////////////

endpoint.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options, callbackData, callbacks);
};

endpoint.post = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options, callbackData, callbacks);
};

endpoint.put = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options, callbackData, callbacks);
};

endpoint.patch = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options, callbackData, callbacks);
};

endpoint.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options, callbackData, callbacks);
};

endpoint.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._head(options, callbackData, callbacks);
};

endpoint.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._options(options, callbackData, callbacks);
};

endpoint.utils = {};
            
endpoint.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

endpoint.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

///////////////////////
//  Private helpers  //
///////////////////////

var mergeJSON = function (json1, json2) {
    const result = {};
    var key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}

var concatQuery = function (url, key, value) {
    return url + ((!url || url.indexOf('?') < 0) ? '?' : '&') + key + "=" + value;
};

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
};

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
};

var stringType = Function.prototype.call.bind(Object.prototype.toString);

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}