function getQuote(){
    let quote = document.getElementById('quote');
    let author = document.getElementById('author');

    //handle all class changes without jQuery
    if(quote.classList.contains('executed')){
        quote.className = quote.className.replace('executed', '');
        quote.className += ' reset';
        quote.className = quote.className.trim();
    }

    if(author.classList.contains('fade')){
        author.className = author.className.replace('fade', '');
    } else{
        author.className += ' fade';
        author.className = author.className.trim();
    }

    //use jQuery to make API call
    setTimeout(function(){
        $.ajax({
          crossOrigin: true,
          url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=setQuote",
          dataType:"jsonp"
      });
      }, 1000);
}
function setQuote(json){
    let returnedQuote = json[0];
    let quote = document.getElementById('quote');
    let author = document.getElementById('author');


    quote.innerHTML = returnedQuote.content;
    author.innerHTML = returnedQuote.title;

    //remove reset and add the executed class
    quote.className = quote.className.replace('reset', '').trim();
    quote.className += ' executed';
    quote.className = quote.className.trim();

    //remove fade from author
    author.className = author.className.replace('fade', '');
}
//get key press
document.body.onkeyup = (e) => {
    if(e.keyCode == 32){//space bar
        getQuote();
    }
}