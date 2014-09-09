(function(){
  window.onerror = function(err,fn,ln) {
    alert("ERROR:" + err + ", " + fn + ":" + ln);
  };
  window.namespace.ImageDownload = function(){
    console.log('new image download');
    $('#test').click(function(event){
      console.log('click');
      event.preventDefault();
      get_fs(function(fs){
        var directory = 'sample';
        fs.root.getDirectory(directory, {
          create: false
        }, function(){
          console.log('directory fetched');
        }, function(){
          console.log('directory failed');
        });
      });
    })
 
    var fail = function(error) {
      console.log('ERROR', error.code);
    };
 
    var get_fs = function(return_fs){
      window.requestFileSystem(
        LocalFileSystem.PERSISTENT, 
        5 * 1024 * 1024, 
        function(fs){
          return_fs(fs);
        },
        fail
      );
    };
  };
})();