document.getElementById('heading').innerHTML = localStorage['title'] || 'Write To your hearts desire';
document.getElementById('content').innerHTML = localStorage['text'] || 'Stored and saved for when you come back, no databases just your computer';

setInterval(function(){//each second save the content to their storage.
    localStorage['title'] = document.getElementById('heading').innerHTML;
    localStorage['text'] = document.getElementById('content').innerHTML;
}, 1000);