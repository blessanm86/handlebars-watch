var path = require('path'),
    watch = require('watch'),
    exec = require('child_process').exec,
    configPath;

exports.watchAndCompile = function(configFile){  
  try {
    
    var configJson = require(path.join(process.cwd(),configFile));
    configPath = path.dirname(configFile);
    
    configJson.forEach(function(item){
      //Resetting the path relative to the command execution location.
      item.path = path.join(configPath,item.path);
      
      setupWatchForItem(item);
    });
    
  } catch(e) {
    console.log(e.message);
    process.exit();
  }
};

function setupWatchForItem(item) {
  watch.createMonitor(item.path, function (monitor) {
    monitor.on("created", function (f, stat) {
      var msg = 'Created ' + path.basename(f) + ' and precompiled';
      executeCommand(item.command, msg);
    });
    monitor.on("changed", function (f, curr, prev) {
      var msg = 'Modified ' + path.basename(f) + ' and precompiled';
      executeCommand(item.command, msg);
    });
    monitor.on("removed", function (f, stat) {
      var msg = 'Removed ' + path.basename(f) + ' and precompiled';
      executeCommand(item.command, msg);
    });
  })
};

function executeCommand(cmd, msg) {
  exec(cmd, {cwd: configPath}, function (error, stdout, stderr) {
      if (error !== null) {
        console.log(error);
      } else {
        console.info(msg);
      }
  });
};