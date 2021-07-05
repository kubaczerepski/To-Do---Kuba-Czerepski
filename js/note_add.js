let add_button = document.querySelector(".note_add_button");

add_button.addEventListener('click',function(){
    let noteText = document.querySelector("#note_text").value;
    let parent = document.querySelector(".note_space");
    let note = document.createElement("div");
    note.classList.add("note");
    note.setAttribute("id","note");
    note.innerHTML = noteText;
    document.querySelector(".note_space").appendChild(note);
    document.querySelector('#note_text').value='';
    gsap.from(note,{duration:1 , ease:"Power1.out", x:"-100",opacity:0,delay:0.2});

    note.addEventListener('click',function(){
    note.style.opacity = "0.5";
    note.style.textDecoration = "line-through";
})
    note.addEventListener('dblclick',function(){
        gsap.to(note,{duration:0.5 , ease:"Power1.out", x:"100",opacity:0,delay:0.2,display:"none"});
})
})

