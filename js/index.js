$(document).ready(function() {
  // Prevents any action occurring until the page has stopped loading    

  $.ajaxSetup({
    cache: false
  });
  // Until I added this bit of code, the quote would be retrieved from the cache on Chrome and other web browsers. Adding this ensures that the request is again made to the server.                  

  $("#getMessage").on("click", function() {
    // The id "#getMessage" is assigned to the button "Get quote". Clicking it causes the function underneath it to be carried out.
    $('html').css('background-image', 'url(https://unsplash.it/1920/1080/?image=' + Math.floor((Math.random() * 1000)) + ')');

    $("#all").fadeOut("slow");
    $("#message").fadeOut("slow");
    // The message (if there is one) fades out. 
    $("#author").fadeOut("slow");
    // Likewise with the author
    $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(json) {
      $("#all").fadeIn("slow");
      $("#message").html(JSON.stringify(json.quoteText)).fadeIn("slow");
      if (json.quoteAuthor === "") {
        json.quoteAuthor = "Anon"
      }
      // A simple if statement to remove the values that were returned to the function by the API as "", and instead places "Anon". 
      $("#author").html(JSON.stringify(json.quoteAuthor).slice(1, -1)).fadeIn("slow");
      // The code returned the author with two apostrophes, which made the whole thing look terrible. By slicing the beginning and the end of the slice the author tag looks a lot better
    });
  });
});
$('#tweet').click(function() {
  window.open("https://twitter.com/intent/tweet?text=" + $("#message").text() + " - " + $('#author').text().replace(/\"/g, ""));
}); // Some of the tweets don't appear to display correctly when passed to Twitter, but this appears to be a formatting problem in the quotes themselves, as some appear correctly formatted.