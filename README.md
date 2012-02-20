# base-js
### A fast & lightweight management framework for writing JavaScript.

 - Copyright 2012: Jon Muir, xtreme4s.net
 - Dual licensed under the MIT or GPL Version 2 licenses.

The goal of this script is to provide a fast and lightweight JavaScript framework for use with development. The idea of optimising the page load and pulling in additional resources when needed is the bases for implementing this.

Credit where Credit due
======
The base of this project is taken from Scott Jehl's work on the bostonglobe.com website. 
The additional work I have done is take this stable base and develop further more advanced functionality out of the box.

Dependancies
======

None

Usage Instructions
======

Include the script in the head of your mark-up, There are instructions at the bottom of the script for further usage.

If you require a new script to be downloaded and included on your page use the following snippit.
 The first parameter is the script file you require. (string)
 The second parameter is if the script has a jQuery dependancy. (boolean)
 The third parameter is the callback function you wish to execute once it has loaded. (function)

<pre>
    <script type="text/javascript">
        global.add.script('jquery.homepage-carousel.js', true, function () {
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

