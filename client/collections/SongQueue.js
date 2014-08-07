// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    console.log('song queue',  this.model)
  },

  playFirst : function(){
    console.log('im in play first' , this.models[0])
    this.models[0].play();
  }

});
