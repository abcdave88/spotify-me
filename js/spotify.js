// https://api.spotify.com/v1/search?q=SOMETHINGHERE&type=SOMETHINGHERE
// $(document).ready(function() {
  
// var search ;
// var searchType 


//     searchType = $('#search-type').val();
//     getSong(search, searchType);
//     debugger;
//  })
 
//  function getSong(search, searchType){
//   $.ajax({
//   type: 'GET',
//   url: 'https://api.spotify.com/v1/search?q='+search+'&type='+searchType
//   })
//   // .done(function(response) { )};
//   }    





// });

function getSearch(){
 return search = $('#search-keyword').val();  //i wrote this 
 }

function getType(){
  return getSearchType = $('#search-type').val();
}

function getSearchResults() {
  $('li').innerHTML = "" ;
  event.preventDefault();
  var type = getType();
  $.ajax({
    type: 'GET',
    url: 'https://api.spotify.com/v1/search?q='+search+'&type=' + type //i wrote this 
  }).done(function(data, response){
    $('#results').empty();
    $.each(data.albums.items, function(index, item) {
      console.log(item);
      $('#results').append("<li>"+ item.name +"</li>")
    })
  })
}


document.addEventListener('DOMContentLoaded', function() {
  $('input[type=submit]').on('click', getSearchResults);
  $('#search-type').on('change', getType);
  $('#submit').on('click', getSearch); //i wwrote this 
});
