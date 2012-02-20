/**
 * --------------------------------------------------------------------
 * base-js
 * Author: Jon Muir, xtreme4s.net
 * Copyright (c) 2012 Jon Muir
 * --------------------------------------------------------------------
 */

// Setup our global awesomeness
(function (win, undefined) {

    var doc = win.document,
        docElem = doc.documentElement,
        head = doc.head || doc.getElementsByTagName("head")[0] || docElem;

    var global = {};

    // mixins - utility object extender
    global.extend = function (obj, props) {
        for (var i in props) {
            obj[i] = props[i];
        }
        return global;
    };

    //support hash
    global.extend(global, {
        browser: {},
        dev: {},
        support: {}
    });

    global.browser.ie6 = docElem.className.indexOf("ie6") >= 0;
    global.browser.ie7 = docElem.className.indexOf("ie7") >= 0;
    global.browser.ie8 = docElem.className.indexOf("ie8") >= 0;

    // Callback for dependencies. 
    // You can use isDefined to run code as soon as the document.body is defined, for example, for body-dependent scripts
    // or, for a script that's loaded asynchronously that depends on other scripts, such as jQuery.
    // First argument is the property that must be defined, second is the callback function
    global.onDefine = function (prop, callback) {
        var callbackStack = [];
        if (callback) {
            callbackStack.push(callback);
        }
        function checkRun() {
            if (eval(prop)) {
                while (callbackStack[0] && typeof (callbackStack[0]) === "function") {
                    callbackStack.shift().call(win);
                }
            }
            else {
                setTimeout(checkRun, 15);
            }
        };
        checkRun();
    };

    // shortcut of isDefine body-specific 
    global.bodyready = function (callback) {
        global.onDefine("document.body", callback);
    };

    global.add = {};
    global.load = {};

    global.scripts = [];
    global.stylesheets = [];
    global.callbacks = [];

    global.add.script = function (src, callback) {
        if (!src) { return; }
        global.scripts.push(src);
        global.callbacks.push(callback);
    };

    global.add.stylesheet = function (src) {
        if (!src) { return; }
        global.stylesheets.push(src);
    };

    //define global.load.style
    global.load.scripts = function () {
        if (!global.scripts.length) { return; }
        var script = doc.createElement("script"),
			fc = head.firstChild;
        //script.src = '/js/Default.ashx?files=' + global.scripts.join(',');
        script.src = '/js/' + global.scripts.join(',');
        // TODO: handle dependancies e.g. jquery
	script.onload = script.onreadystatechange = function () {            
            for (var i in global.callbacks) {
                global.callbacks[i]();                
            }
            global.callbacks = [];            
        }
        //might need to wait until DOMReady in IE...
        if (fc) {
            head.insertBefore(script, fc);
        } else {
            head.appendChild(script);
        }
    };

    //define global.load.style
    global.load.styles = function () {
        if (!href) { return; }
        var lk = doc.createElement("link"),
			links = head.getElementsByTagName("link"),
			lastlink = links[links.length - 1];
        lk.type = "text/css";
        lk.href = href;
        lk.rel = "stylesheet";
        lk.media = "all";

        //might need to wait until DOMReady in IE...
        if (lastlink.nextSibling) {
            head.insertBefore(lk, lastlink.nextSibling);
        } else {
            head.appendChild(lk);
        }
    };

    //quick element class existence function
    global.hasClass = function (el, classname) {
        return el.className.indexOf(classname) >= 0;
    };

    //global.bodyready(function () {
    //    global.load.scripts();
    //});

    win.global = global;

})(this);

(function (win, undefined) {

    //
    //  NOTE:
    //
    //  This part can be taken and placed on any page, gives scope to 
    //  everything done so far in global. Here it's doing the document 
    //  ready which handles any progromatic script loading. If you 
    //  duplicate the script below uncomment the bodyready snippit above.
    //

    //define some globals
    var doc = win.document,
		docElem = doc.documentElement,
		head = doc.head || doc.getElementsByTagName("head")[0] || docElem,
		global = win.global;
    
    global.bodyready(function () {
        global.load.scripts();        
    });

})(this);
