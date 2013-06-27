/* =============================================================
 * bootstrap-typeahead.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#typeahead
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */

/*
 * Modifications by Paul Warelis, Alexey Gordeyev
 */

!function($){

    "use strict"; // jshint ;_;

    /* TYPEAHEAD PUBLIC CLASS DEFINITION
     * ================================= */

    var Typeahead = function (element, options) {
        var that = this;
        that.$element = $(element)
        that.options = $.extend({}, $.fn.typeahead.defaults, options)
        that.$menu = $(that.options.menu).insertAfter(that.$element);

        // Method overrides
        that.eventSupported = that.options.eventSupported || that.eventSupported;
        that.grepper = that.options.grepper || that.grepper;
        that.highlighter = that.options.highlighter || that.highlighter;
        that.lookup = that.options.lookup || that.lookup;
        that.matcher = that.options.matcher || that.matcher;
        that.render = that.options.render || that.render;
        that.onSelect = that.options.onSelect || null;
        that.sorter = that.options.sorter || that.sorter;
        that.source = that.options.source || that.source;
        that.display = that.options.display || that.display;

        if (that.options.ajax) {
            var ajax = that.options.ajax;

            if (typeof ajax === 'string') {
                that.ajax = $.extend({}, $.fn.typeahead.defaults.ajax, {
                    url: ajax
                });
            } else {
                if(typeof ajax.displayField === 'string') {
                    that.display = that.options.display = ajax.displayField;
                }
                if(typeof ajax.valueField === 'string') {
                    that.val = that.options.val = ajax.valueField;
                }

                that.ajax = $.extend({}, $.fn.typeahead.defaults.ajax, ajax);
            }

            if (!that.ajax.url) {
                that.ajax = null;
            }
            that.query = "";
        } else {
            that.source = that.options.source
            that.ajax = null;
        }
        that.shown = false
        that.listen()
    }

    Typeahead.prototype = {

        constructor: Typeahead,
        //=============================================================================================================
        //  Utils
        //  Check if an event is supported by the browser eg. 'keypress'
        //  * This was included to handle the "exhaustive deprecation" of jQuery.browser in jQuery 1.8
        //=============================================================================================================
        eventSupported: function(eventName) {
            var isSupported = (eventName in this.$element);

            if (!isSupported) {
                this.$element.setAttribute(eventName, 'return;');
                isSupported = typeof this.$element[eventName] === 'function';
            }

            return isSupported;
        },
        select: function () {
            var $selectedItem = this.$menu.find('.active');
            var value = $selectedItem.attr('data-value');
            var text = this.$menu.find('.active a').text();

            if (this.options.onSelect) {
                this.options.onSelect({
                    value: value,
                    text: text
                });
            }
            this.$element
            .val(this.updater(text))
            .change();
            return this.hide();
        },
        updater: function (item) {
            return item
        },
        show: function () {
            var pos = $.extend({}, this.$element.position(), {
                height: this.$element[0].offsetHeight
            })

            this.$menu.css({
                top: pos.top + pos.height,
                left: pos.left
            })

            this.$menu.show()
            this.shown = true
            return this
        },
        hide: function () {
            this.$menu.hide()
            this.shown = false
            return this
        },
        ajaxLookup: function () {

            var query = $.trim(this.$element.val());

            if (query == this.query) {
                return this;
            }

            // Query changed
            this.query = query

            // Cancel last timer if set
            if (this.ajax.timerId) {
                clearTimeout(this.ajax.timerId);
                this.ajax.timerId = null;
            }

            if (!query || query.length < this.ajax.triggerLength) {
                // cancel the ajax callback if in progress
                if (this.ajax.xhr) {
                    this.ajax.xhr.abort();
                    this.ajax.xhr = null;
                    this.ajaxToggleLoadClass(false);
                }
                return this.shown ? this.hide() : this
            }

            function execute() {
                this.ajaxToggleLoadClass(true);

                // Cancel last call if already in progress
                if (this.ajax.xhr) this.ajax.xhr.abort();

                var params = this.ajax.preDispatch ? this.ajax.preDispatch(query) : {
                    query : query
                };
                this.ajax.xhr = $.ajax({
                    url: this.ajax.url,
                    data: params,
                    success: $.proxy(this.ajaxSource, this),
                    type: this.ajax.method || 'get',
                    dataType: 'json'
                });
                this.ajax.timerId = null;
            }

            // Query is good to send, set a timer
            this.ajax.timerId = setTimeout($.proxy(execute, this), this.ajax.timeout);

            return this;
        },

        ajaxSource: function (data) {
            this.ajaxToggleLoadClass(false);
            var that = this, items;
            if (!that.ajax.xhr) return;
            if (that.ajax.preProcess) {
                data = that.ajax.preProcess(data);
            }
            // Save for selection retreival
            that.ajax.data = data;

            // Manipulate objects
            items = that.grepper(that.ajax.data) || [];
            if (!items.length) {
                return that.shown ? that.hide() : that
            }

            that.ajax.xhr = null;
            return that.render(items.slice(0, that.options.items)).show()
        },

        ajaxToggleLoadClass: function (enable) {
            if (!this.ajax.loadingClass) return;
            this.$element.toggleClass(this.ajax.loadingClass, enable);
        },

        lookup: function (event) {
            var that = this, items;

            if (that.ajax) {
                that.ajaxer();
            }
            else {
                that.query = that.$element.val();

                if (!that.query) {
                    return that.shown ? that.hide() : that;
                }

                items = that.grepper(that.source);

                if (!items || !items.length) {
                    return that.shown ? that.hide() : that;
                }

                return that.render(items.slice(0, that.options.items)).show();
            }
        },
        matcher: function (item) {
            return ~item.toLowerCase().indexOf(this.query.toLowerCase())
        },
        sorter: function (items) {
            if (!this.options.ajax) {
                var beginswith = [],
                caseSensitive = [],
                caseInsensitive = [],
                item;

                while (item = items.shift()) {
                    if (!item.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item);
                    else if (~item.indexOf(this.query)) caseSensitive.push(item);
                    else caseInsensitive.push(item);
                }

                return beginswith.concat(caseSensitive, caseInsensitive);
            } else {
                return items;
            }
        },
        highlighter: function (item) {
            var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
            return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
                return '<strong>' + match + '</strong>';
            });
        },
        render: function (items) {
            var that = this, display, isString = typeof that.options.display === 'string';

            items = $(items).map(function (i, item) {
                display = isString ? item[that.options.display] : that.options.display(item);
                i = $(that.options.item).attr('data-value', item[that.options.val]);
                i.find('a').html(that.highlighter(display));
                return i[0];
            });

            items.first().addClass('active');
            this.$menu.html(items);
            return this;
        },
        //------------------------------------------------------------------
        //  Filters relevent results
        //
        grepper: function(data) {
            var that = this, items, display, isString = typeof that.options.display === 'string';

            if (isString && data && data.length && !data[0].hasOwnProperty(that.options.display)) {
                return null;
            }

            items = $.grep(data, function (item) {
                display = isString ? item[that.options.display] : that.options.display(item);
                return that.matcher(display);
            });

            return this.sorter(items);
        },
        next: function (event) {
            var active = this.$menu.find('.active').removeClass('active'),
            next = active.next()

            if (!next.length) {
                next = $(this.$menu.find('li')[0])
            }

            next.addClass('active')
        },

        prev: function (event) {
            var active = this.$menu.find('.active').removeClass('active'),
            prev = active.prev()

            if (!prev.length) {
                prev = this.$menu.find('li').last()
            }

            prev.addClass('active')
        },

        listen: function () {
            this.$element
            .on('focus',    $.proxy(this.focus, this))
            .on('blur',     $.proxy(this.blur, this))
            .on('keypress', $.proxy(this.keypress, this))
            .on('keyup',    $.proxy(this.keyup, this))

            if (this.eventSupported('keydown')) {
                this.$element.on('keydown', $.proxy(this.keydown, this))
            }

            this.$menu
            .on('click', $.proxy(this.click, this))
            .on('mouseenter', 'li', $.proxy(this.mouseenter, this))
            .on('mouseleave', 'li', $.proxy(this.mouseleave, this))
        },

        move: function (e) {
            if (!this.shown) return

            switch(e.keyCode) {
                case 9: // tab
                case 13: // enter
                case 27: // escape
                    e.preventDefault()
                    break

                case 38: // up arrow
                    e.preventDefault()
                    this.prev()
                    break

                case 40: // down arrow
                    e.preventDefault()
                    this.next()
                    break
            }

            e.stopPropagation()
        },

        keydown: function (e) {
            this.suppressKeyPressRepeat = ~$.inArray(e.keyCode, [40,38,9,13,27])
            this.move(e)
        },

        keypress: function (e) {
            if (this.suppressKeyPressRepeat) return
            this.move(e)
        },

        keyup: function (e) {
            switch(e.keyCode) {
                case 40: // down arrow
                case 38: // up arrow
                case 16: // shift
                case 17: // ctrl
                case 18: // alt
                  break

                case 9: // tab
                case 13: // enter
                  if (!this.shown) return
                  this.select()
                  break

                case 27: // escape
                  if (!this.shown) return
                  this.hide()
                  break

                default:
                    if (this.ajax) this.ajaxLookup()
                    else this.lookup()
            }

            e.stopPropagation()
            e.preventDefault()
        },

        focus: function (e) {
            this.focused = true
        },

        blur: function (e) {
            this.focused = false
            if (!this.mousedover && this.shown) this.hide()
        },

        click: function (e) {
            e.stopPropagation()
            e.preventDefault()
            this.select()
            this.$element.focus()
        },

        mouseenter: function (e) {
            this.mousedover = true
            this.$menu.find('.active').removeClass('active')
            $(e.currentTarget).addClass('active')
        },

        mouseleave: function (e) {
            this.mousedover = false
            if (!this.focused && this.shown) this.hide()
        }
    }


    /* TYPEAHEAD PLUGIN DEFINITION
     * =========================== */

    $.fn.typeahead = function (option) {
        return this.each(function () {
            var $this = $(this),
            data = $this.data('typeahead'),
            options = typeof option == 'object' && option
            if (!data) $this.data('typeahead', (data = new Typeahead(this, options)))
            if (typeof option == 'string') data[option]()
        });
    }

    $.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        display: 'name',
        val: 'id',
        onSelect: function () {},
        ajax: {
            url: null,
            timeout: 300,
            method: 'get',
            triggerLength: 1,
            loadingClass: null,
            preDispatch: null,
            preProcess: null
        }
    }

    $.fn.typeahead.Constructor = Typeahead

    /* TYPEAHEAD DATA-API
     * ================== */

    $(function () {
        $('body').on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (e) {
            var $this = $(this)
            if ($this.data('typeahead')) return
            e.preventDefault()
            $this.typeahead($this.data())
        });
    })

}(window.jQuery);
