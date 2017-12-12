function addTodo(_text,_done){
    let input = document.getElementById('input').value;
    let list = document.getElementById('list');
    let elem = document.createElement('li');
    
    if(_text){
        elem.appendChild(document.createTextNode('- ' + _text));
    } else{
        elem.appendChild(document.createTextNode('- ' + input));
    }
    document.getElementById('input').value = '';
    
    elem.addEventListener('click', function(){
        if(this.classList.contains('strike')){
            this.remove();
        } else{
            this.className += ' strike';
        }
        saveList(document.getElementById('list'));
    });

    if(_done){
        elem.className += ' strike';
    }

    list.appendChild(elem);
    saveList(list);
}

function saveList(list){
    let savedList = [];
    let listChildren = list.children;
    //console.log(list.children);
    for(let i=0; i< listChildren.length; i++){
        let done = listChildren[i].classList.contains('strike');
        if(listChildren[i].classList.contains('strike')){
            savedList.push('xxx' + listChildren[i].innerText.slice(2));
        } else{
            savedList.push(listChildren[i].innerText.slice(2));
        }
    }
    localStorage['todo-list'] = JSON.stringify(savedList);
}

function importList(){
    let list = document.getElementById('list');

    if(localStorage['todo-list']){
        let ls = JSON.parse(localStorage['todo-list']);
        // console.log(ls);
        for (var i = 0; i < ls.length; i++) {
            let done = false;
            if(ls[i]){ //make sure it isn't undefined
                if(ls[i][0] == 'x' &&
                ls[i][1] == 'x' &&
                ls[i][2] == 'x'){
                    ls[i] = ls[i].slice(3);
                    done = true;
                }
                addTodo(ls[i], done);
            }
        }
    }


}

//get key press
document.body.onkeyup = (e) => {
    if(e.keyCode == 13){//enter key pressed
        addTodo();
    }
}

window.onload = importList;