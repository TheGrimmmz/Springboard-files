const $gifArea = $("#gif-area");
//gifArea = document.getElementById("gif-area")
const $searchInput = $("#search");
//searchInput = document.getElementById("search")

function addGif(res){
    let numResults = res.data.length
    if(numResults){
        let random = Math.floor(Math.random() * numResults)
        //random number * res.data.length for random photo
        let newCol = document.createElement('div')
        //create new div
        newCol.className = 'col-md-4 col-12 mb-4'
        //gave new div a class
        let newGif = document.createElement('img')
        //create new image
        newGif.src = res.data[random].images.original.url
        //gave newGif a src of random image
        newGif.className = 'w-100'
        //gave new image a class
        newCol.append(newGif)
        //attach newGif to newCol
        $gifArea.append(newCol)
        //attach newCol to gifArea
    }
}

$("form").on("submit", async function(evt) {
  evt.preventDefault();
  //prevent reset

  let searchTerm = $searchInput.val();
  $searchInput.val("");
  //reset value to empty string

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });
  addGif(response.data);
});


$("#remove").on("click", function() {
  $gifArea.empty();
});
//remove all gifs
