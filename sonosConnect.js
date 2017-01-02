
getData();

function getData() {
  $.getJSON("your sonos-node api endpoint here", function(result){
        var current = result[0].members[0].state.currentTrack
        $('body').css('background-image', 'url(' + current.absoluteAlbumArtUri + ')');
        $('#albumArt').attr('src',current.absoluteAlbumArtUri);
        $( "#title" ).html( current.title );
        $( "#artist" ).html( current.artist );
      });
      setTimeout("getData()",1000);
};
