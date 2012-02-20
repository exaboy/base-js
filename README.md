# base-js
### A fast & lightweight management framework for writing JavaScript.

 - Copyright 2012: Jon Muir, xtreme4s.net
 - Dual licensed under the MIT or GPL Version 2 licenses.

The goal of this script is to provide a fast and lightweight JavaScript framework for use with development. The idea of optimising the page load and pulling in additional resources when needed is the bases for implementing this.

Credit where Credit due
======
A large part of this is taken from Scott Jehl's work on the bostoglobe.com website. The work I have done is an attempt to take this stable foundation and develope further functionality.

Dependancies
======

None

Usage Instructions
======

Include the script in the head of your site.

If you require a new script to be downloaded and included on your page use the following snippit.
The first parameter is the script file you require.
The second parameter is the callback function you wish to execute once it has loaded.

<pre>
    <script type="text/javascript">
        global.add.script('jquery.homepage-carousel.js', function () {
            alert('hello world!');
        });
    </script>
</pre>

Support & Caveats
======

All support will be handled on github.

How it works?
======

Generally speaking it creates an object with very useful page related information, along with some helper methods.

The script manager aspect of this script allows for multiple scripts to be bespokly loaded and then included once the document is ready. When this occurs the callbacks for each script are fired and your functionality then is able to take over.

