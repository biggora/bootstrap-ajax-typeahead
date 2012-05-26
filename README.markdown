Ajax Typeahead
============

Modifications to the Bootstrap Typeahead plugin to give it ajax capabilities

How to Use
----------

To make a regular typeahead plugin query a server for the source, just specify an ajax member when initializing.

### Simple use

For a quick setup, specify a source url to pull data from.

```javascript
$("#ajax-typeahead").typeahead({
	ajax: "/path/to/source"
});
```

### Options

There are a few options to make this a bit more flexible. To use these, make the ajax option into an object containing any of these options:

- `ajax.timeout`
  Specify the amount of time to wait for keyboard input to stop until you send the query to the server. Default is at 300ms.

- `ajax.displayField`
  If the data returned from the server is a list of objects (as opposed to an array of strings), set this member to the name for the field to use for display.

- `ajax.triggerLength`
  This is the minimum length of text to take action on. Default is at 3.

- `ajax.method`
  The method to use, either "post" or "get". Defaults to "post".

- `ajax.loadingClass`
  If a call is in progress, this class will be added to the typeahead element. It is removed if the call is done.

- `ajax.preDispatch`
  This function will be run prior to any call. It is used to fashion a custom parameter object to send to the server. Its only argument is the query text. It must return an object that jQuery's post() function will use as its second argument. There's no default for this. If not specified, the parameters send to the server are:

```javascript
{ query: "some text" }
```

- `ajax.preProcess`
  This function will be run right after a call and before the typeahead list is populated. It is used to pre process the data returned from the server. Its only argument is the data from the server. Returning false from this method will hide the typeahead list. If not specified, the data will be passed to the typeahead mechanism as is.

### Example

```javascript
$("#ajax-typeahead").typeahead({
	ajax: {
		url: "/path/to/source",
		timeout: 500,
		displayField: "name",
		triggerLength: 1,
		method: "get",
		loadingClass: "loading-circle",
		preDispatch: function (query) {
			showLoadingMask(true);
			return {
				search: query,
				otherParam: 123
			}
		},
		preProcess: function (data) {
			showLoadingMask(false);
			if (data.success === false) {
				// Hide the list, there was some error
				return false;
			}
			// We good!
			return data.mylist;
		}
	}
});
```

Enjoy!
 
Contact
-------

pwarelis at gmail dot com
