#handlebars-watch
---

A node package that executes Handlebars precompiler commands whenever a change happens in the watched directories. 

There are a couple of node packages that does the same thing and even more, but I noticed that most of them are implementing there own precompiler for Handlebars. I just wanted to use the existing Handlebars precompiler and trigger it by watching a folder structure.

### Installation
The package may be installed via npm using the `npm install -g handlebars-watch` command.

### Usage

<pre>
Options:
  -c, --config     Path to Config File   [string]
</pre>

In CLI

    handlebars-watch -c ../build/hbw-config.json
    
Inside a node file

    var hbw = require('handlebars-watch');
    hbw.watchAndCompile('../build/hbw-config.json');
    
The **config** file is a simple json array and is **required** for this package. Each item in the array is a combination of a path and command. The **path** is the location of the folder to watch and **command** is the command to execute when the watch is triggered.

Eg.

    [{
      "path": "templates/pages/",
      "command": "handlebars templates/pages>pageTemplates.js -a -e html"
    },{
      "path": "templates/partials/",
      "command": "handlebars templates/partials>partialTemplates.js -a -p -e html"
    }]
    
1. The path should be relative to the location of the config file.
2. Install Handlebars as a global package. 

 
##Issues Or Contributions
* If you have an idea to improve the package, let me know. It will help the community.
* If this helped you, spread the word and don't forget to star the repo.
* Post issues in the github issue tracker.
*  My email is blessenm@gmail.com
*  Pull requests are welcome.
*  [__LinkedIn Pofile__](http://in.linkedin.com/pub/blessan-mathew/24/605/730 "LinkedIn Profie")
*  [__Stack Overflow Pofile__](http://stackoverflow.com/users/548568/blessenm "Stack Overflow Pofile")