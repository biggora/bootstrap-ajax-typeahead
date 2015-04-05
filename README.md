[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
Twitter Bootstrap Ajax Typeahead Plugin
============

Modifications to the Bootstrap Typeahead plugin to give it ajax capabilities. 
[See Demo](http://plugins.upbootstrap.com/bootstrap-ajax-typeahead)

How to Use
----------

To make a regular typeahead plugin query a server for the source, just specify an ajax member when initializing.

Feature
-----------------
- A callback function is available for when an item is selected
- Ability to specify data source properties
- Ability to use a local or remote (AJAX) data source
- Most original methods are overridable so you can customize without changing the source code

Required
-----------------
* Twitter Bootstrap 2.0+
* jQuery 1.8+

Installation
-----------------
#### Download [jQuery](http://docs.jquery.com/Downloading_jQuery)
* [Download the latest release](http://docs.jquery.com/Downloading_jQuery)
* [Clone in Windows](github-windows://openRepo/https://github.com/jquery/jquery)
* Clone the repo: `git clone git://github.com/jquery/jquery.git`.

#### Download [Bootstrap](https://github.com/twitter/bootstrap)
* [Download the latest release](https://github.com/twitter/bootstrap/zipball/master).
* [Clone in Windows](github-windows://openRepo/https://github.com/twitter/bootstrap)
* Clone the repo: `git clone git://github.com/twitter/bootstrap.git`.
* Install with Twitter's [Bower](http://twitter.github.com/bower): `bower install bootstrap`.

#### Download this plugin.
* [Download the latest release](https://github.com/biggora/bootstrap-ajax-typeahead/zipball/master)
* [Clone in Windows](github-windows://openRepo/https://github.com/biggora/bootstrap-ajax-typeahead)
* Clone the repo: `git clone git://github.com/biggora/bootstrap-ajax-typeahead.git`
* Install with Bower: `bower install bs-typeahead`.

#### Include files in your HTML. The minimum required for this plugin are:

    <script src="/path/to/jquery.js" type="text/javascript"></script>
    <script src="/path/to/bootstrap-typeahead.js" type="text/javascript"></script>

#### Execute the plugin:
```javascript
    $('input.typeahead').typeahead(options);
```

Events
-----------------

<table width="100%">
	<thead>
		<tr>
			<th width="30%">
				Event
			</th>
			<th width="70%">
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
            onSelect
        </td>
        <td>
            The callback function that is invoked when an item is chosen.
<pre>{
   item : {
    value: "",
    text: ""
   }
}</pre>
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
		<th width="20%">
			Name
		</th>
		<th width="20%">
			Type
		</th>
		<th width="20%">
			Default
		</th>
		<th width="40%">
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
            displayField
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
            10
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
     <td>scrollBar</td>
     <td>boolean</td>
     <td>false</td>
     <td>
       Used to show scrollBar when there are too many match records and it's set to True.<br/><br/>
	   If this option is set to true,the items value will be <i>100</i> and the HTML render menu will be set to:<br/>
		<i>'&lt;ul 
			class=&quot;typeahead dropdown-menu&quot; 
			style=&quot;max-height:220px;overflow:auto;&quot;  
		&gt;&lt;/ul&gt;'<i>
     </td>
    </tr>
     <tr>
         <td>
                alignWidth
            </td>
    		<td>
                boolean
            </td>
            <td>
                true
            </td>
            <td>
    			The align dropdown width by input field width.
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
            valueField
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

#### Example 1

```js
var typeaheadSource = ['John', 'Alex', 'Terry'];

$('input.typeahead').typeahead({
	source: typeaheadSource
});
```

#### Example 2

```js
var typeaheadSource = [{ id: 1, name: 'John'}, { id: 2, name: 'Alex'}, { id: 3, name: 'Terry'}];

$('input.typeahead').typeahead({
	source: typeaheadSource
});
```
#### Example 3

```js
var typeaheadSource = [{ 
         id: 1, firstName: 'John'}, { 
         id: 2, firstName: 'Alex'}, { 
         id: 3, firstName: 'Terry'
    }];

$('input.typeahead').typeahead({
        source: typeaheadSource,
        displayField: 'firstName'
});
```
#### Example 4
For a quick setup, specify a source url to pull data from:

```js
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

Bootstrap Integration
---------------------

For simple autocomplete use cases, the typeahead component [Bootstrap][bootstrap] provides should suffice. However, if you'd prefer to take advantage of some of the advance features typeahead.js provides, here's what you'll need to do to integrate typeahead.js with Bootstrap:

* If you're customizing Bootstrap, exclude the typeahead component. If you're depending on the standard *bootstrap.js*, ensure *bootstrap-typeahead.js* is loaded after it.
* The DOM structure of the dropdown menu used by typeahead.js differs from the DOM structure of the Bootstrap dropdown menu. You'll need to load some [additional CSS][typeahead-bootstrap.css] in order to get the bootstrap-typeahead.js dropdown menu to fit the default Bootstrap theme.

Browser Support
---------------

* Chrome
* Firefox 3.5+
* Safari 4+
* Internet Explorer 7+
* Opera 11+

### Recommend extensions

- [Bootstrap Fancy File Plugin](https://github.com/biggora/bootstrap-fancyfile/)
- [Bootstrap Select Plugin](https://github.com/biggora/bootstrap-select/)
- [TrinteJS - Javascrpt MVC Framework for Node.JS](http://www.trintejs.com/)
- [CaminteJS - Cross-db ORM for NodeJS](http://www.camintejs.com/)
- [MongoDB Session Storage for ExpressJS](https://github.com/biggora/express-mongodb)
- [Middleware exposing user-agent for NodeJS](https://github.com/biggora/express-useragent)
- [2CO NodeJS adapter for 2checkout API payment gateway](https://github.com/biggora/2co)

Copyright and license
-------

The MIT License (MIT)

Copyright (c) 2011-2014 Twitter, Inc

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

## Resources

- Visit the [author website](http://www.gordejev.lv).
- Follow [@biggora](https://twitter.com/#!/biggora) on Twitter for updates.
- Report issues on the [github issues](https://github.com/biggora/bootstrap-ajax-typeahead/issues) page.

[![Analytics](https://ga-beacon.appspot.com/UA-22788134-5/ajax-typeahead/readme)](https://github.com/igrigorik/ga-beacon)

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/biggora/bootstrap-ajax-typeahead/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

