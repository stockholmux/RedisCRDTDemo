/*
* Client-side JavaScript to handle AJAX commands
*
*/
function getCount(imageid){
  $.ajax({
    type: 'GET',
    url: '/getcount',
    dataType: 'json',
    data: {
      id: imageid},
    success: function( result ) {
        $( "#"+imageid).html( "<strong>" + result + "</strong>" );
    }
  });
}


function countClick(imageid){
  $.ajax({
    type: 'POST',
    url: '/incrcount',
    dataType: 'json',
    data: {
      id: imageid},
    success: function( result ) {
      console.log('getcount')
      getCount(imageid);
    }
  });

}


