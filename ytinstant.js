var value = '';
var id = '';

$(document).ready(function() {
   
   $('input[name$="search"]').keyup(function () {
      
      if (value == encodeURIComponent($(this).val()))
         return;
      else
         value = encodeURIComponent($(this).val());
      
      //get id of video from result
      var request = "http://gdata.youtube.com/feeds/api/videos?v=2&alt=jsonc&q=" + value + "&format=5&max-results=1";  
      
      $.getJSON(request,
         function foo(json) {
            
            if (id == json.data.items[0].id)
               return
            else
               id = json.data.items[0].id;
               
            var title = json.data.items[0].title;
            console.log(id);
            
            var embed = '<object style="height: 390px; width: 640px">' +
            '<param name="movie" value="http://www.youtube.com/v/' + id + '?version=3&autoplay=1&feature=player_embedded">' +
            '<param name="allowFullScreen" value="true">' +
            '<param name="allowScriptAccess" value="always">' +
            '<embed src="http://www.youtube.com/v/' + id + '?version=3&autoplay=1&feature=player_embedded" ' +
            'type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" width="640" height="390"></object>';
            
            var output = '<h3>' + title + '</h3>' + embed;
            $('#video').html(output);
         });
      
   }).keyup();
   
});