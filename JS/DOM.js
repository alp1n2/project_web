let f=false;
function DOMcreate(){
    if(f)return;
    let div = document.createElement('div');
    div.className = "anounce";
    div.innerHTML = "Волосков Юрий Николаевич 2005 года рождения";
    document.body.append(div);
    f=true;
    div.addEventListener('click', function() {
    div.remove();
    f=false;
});
}