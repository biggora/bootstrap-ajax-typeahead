Ajax Typeahead
============

Modifications to the Bootstrap Typeahead plugin to give it ajax capabilities

How to Use
----------

To make a regular typeahead plugin query a server for the source, just specify an ajax member when initializing.

Required
-----------------
* Twitter Bootstrap 2.0+
* jQuery 1.7+

Installation
-----------------
#### Download [Bootstrap](https://github.com/twitter/bootstrap) & [jQuery](http://docs.jquery.com/Downloading_jQuery)

#### Download this plugin.

   - [ZIP](https://github.com/biggora/bootstrap-ajax-typeahead/zipball/master)
   - [Clone in Windows](github-windows://openRepo/https://github.com/biggora/bootstrap-ajax-typeahead)
   - `git clone git://github.com/biggora/bootstrap-ajax-typeahead.git`

#### Include files in your HTML. The minimum required for this plugin are:

    <link href="/path/to/bootstrap.css" rel="stylesheet">
    <script src="/path/to/jquery.js" type="text/javascript"></script>
    <script src="/path/to/bootstrap-typeahead.js" type="text/javascript"></script>

#### Execute the plugin:

    $(myElement).typeahead(options);

Events
-----------------

<table width="100%">
	<thead>
		<tr>
			<th>
				Event
			</th>
			<th>
				Description
			</th>
		</tr>
	</thead>
    <tr>
        <td>
            grepper
        </td>
        <td>
            Filters relevant results from the source.
        </td>
    </tr>
    <tr>
        <td>
            highlighter
        </td>
        <td>
            Highlights any matching results in the list.
        </td>
    </tr>
    <tr>
        <td>
            itemSelected
        </td>
        <td>
            The callback function that is invoked when an item is chosen.
            <ul>
			<li>item: the HTML element that was selected</li>
			<li>val: value of the *val* property</li>
            <li>text: value of the *display* property</li>
			</ul>
        </td>
    </tr>
    <tr>
        <td>
            lookup
        </td>
        <td>
            Determines if source is remote or local and initializes the search.
        </td>
    </tr>
    <tr>
        <td>
            matcher
        </td>
        <td>
            Looks for a match between the query and a source item.
        </td>
    </tr>
    <tr>
        <td>
            render
        </td>
        <td>
            Renders the list of results.
        </td>
    </tr>
    <tr>
        <td>
            select
        </td>
        <td>
            Selects an item from the results list.
        </td>
    </tr>
    <tr>
        <td>
            sorter
        </td>
        <td>
            Sorts the results.
        </td>
    </tr>
</table>

Options
-----------------

<table width="100%">
<thead>
	<tr>
		<th>
			Name
		</th>
		<th>
			Type
		</th>
		<th>
			Default
		</th>
		<th>
			Description
		</th>
	</tr>
</thead>
    <tr>
        <td>
            ajax
        </td>
        <td>
            object
        </td>
        <td>
            null
        </td>
        <td>
            <a href="#ajax">The object required to use a remote datasource.</a>  
            <br /><i>See also: ajax as a string (below)</i>
        </td>
    </tr>
    <tr>
        <td>
            ajax
        </td>
        <td>
            string
        </td>
        <td>
            null
        </td>
        <td>
            Optionally, a simple URL may be used instead of the AJAX object. <br />   
            <a href="#ajax"><i>See also: ajax as an object</i></a>
        </td>
    </tr>
    <tr>
        <td>
            display
        </td>
		<td>
            string
        </td>
		<td>
            'name'
        </td>
        <td>
            The object property to match the query against and highlight in the results.
        </td>
    </tr>
    <tr>
        <td>
            item
        </td>
		<td>
            string
        </td>
        <td>
            '&lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;/a&gt;&lt;/li&gt;'
        </td>
        <td>
			The HTML rendering for a result item.
        </td>
    </tr>
    <tr>
        <td>
            items
        </td>
		<td>
            integer
        </td>
        <td>
            8
        </td>
        <td>
			The maximum number of items to show in the results.
        </td>
    </tr>
    <tr>
        <td>
            menu
        </td>
		<td>
            string
        </td>
        <td>
            '&lt;ul class=&quot;typeahead dropdown-menu&quot;&gt;&lt;/ul&gt;'
        </td>
        <td>
			The HTML rendering for the results list.
        </td>
    </tr>
    <tr>
        <td>
            source
        </td>
		<td>
            object
        </td>
        <td>
           []
        </td>
        <td>
			The source to search against.
        </td>
    </tr>
    <tr>
        <td>
            val
        </td>
		<td>
            string
        </td>
		<td>
            'id'
        </td>
        <td>
            The object property that is returned when an item is selected.
        </td>
    </tr>
</table>

<a name="ajax"></a>
Ajax Options
-----------------

<table width="100%">
<thead>
	<tr>
		<th>
			Name
		</th>
		<th>
			Type
		</th>
		<th>
			Default
		</th>
		<th>
			Description
		</th>
	</tr>
</thead>
    <tr>
        <td>
            url
        </td>
        <td>
            string
        </td>
        <td>
            null
        </td>
        <td>
            
        </td>
    </tr>
    <tr>
        <td>
            timeout
        </td>
        <td>
            integer
        </td>
        <td>
            300
        </td>
        <td>
            Specify the amount of time to wait for keyboard input to stop until you send the query to the server.
            Default is at 300ms.
        </td>
    </tr>
    <tr>
        <td>
            method
        </td>
	<td>
            string
        </td>
	<td>
            'get'
        </td>
        <td>
            The method to use, either "post" or "get".
        </td>
    </tr>
    <tr>
        <td>
            triggerLength
        </td>
	<td>
            integer
        </td>
        <td>
            1
        </td>
        <td>
	    This is the minimum length of text to take action on. Default is at 1.
        </td>
    </tr>
    <tr>
        <td>
            loadingClass
        </td>
	<td>
            string
        </td>
        <td>
            null
        </td>
        <td>
	
        </td>
    </tr>
    <tr>
        <td>
            preDispatch
        </td>
	<td>
            function
        </td>
        <td>
            null
        </td>
        <td>
	This function will be run prior to any call. It is used to fashion a custom parameter 
	object to send to the server. Its only argument is the query text. It must return an 
	object that jQuery's post() function will use as its second argument. There's no default for this. 
	If not specified, the parameters send to the server are:
        <pre>
            { query: "some text" }
        </pre>
        </td>
    </tr>
    <tr>
        <td>
            preProcess
        </td>
	<td>
            function
        </td>
        <td>
           null
        </td>
        <td>
	This function will be run right after a call and before the typeahead list is populated. 
	It is used to pre process the data returned from the server. Its only argument is the data 
	from the server. Returning false from this method will hide the typeahead list. 
	If not specified, the data will be passed to the typeahead mechanism as is.
        </td>
    </tr>
    <tr>
        <td>
            displayField
        </td>
	<td>
            string
        </td>
	<td>
            'name'
        </td>
        <td>
        If the data returned from the server is a list of objects (as opposed to an array of strings), 
        set this member to the name for the field to use for display.
        </td>
    </tr>
    <tr>
        <td>
            valueField
        </td>
	<td>
            string
        </td>
	<td>
            'id'
        </td>
        <td>
          If the data returned from the server is a list of objects (as opposed to an array of strings), 
          set this member to the id data for the item into list (*required* for a list of objects).
        </td>
    </tr>
</table>

Basic Usage
-----------------
The plugin in its simplest (realistic) form.
```javascript
var typeaheadSource = [{ id: 1, name: 'John'}, { id: 2, name: 'Alex'}, { id: 3, name: 'Terry'}];

$('input.typeahead').typeahead({
	source: typeaheadSource
});
```
For a quick setup, specify a source url to pull data from:
```javascript
$('input.typeahead').typeahead({
        ajax: '/path/to/typeahead/source'
});
```

Extended Usage
-----------------

```javascript
$("input.typeahead").typeahead({
	onSelect: function(item) {
		console.log(item);
	},
	ajax: {
		url: "/path/to/source",
		timeout: 500,
		displayField: "title",
		triggerLength: 1,
		method: "get",
		loadingClass: "loading-circle",
		preDispatch: function (query) {
			showLoadingMask(true);
			return {
				search: query
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
