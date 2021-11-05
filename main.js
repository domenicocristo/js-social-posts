// 1. creo un array di oggetti che rappresentino i vari post 
// 2. inseriamo negli oggetti le caratteristiche dei vari post 
// 3. stampiamo nell'html le varie card dei post 
// 4. rendo il tasto like cliccabile e faccio si che incrementi i like del post di 1

let post = [
    {
        "nomeAutote" : "Phil Mangione",
        "fotoProfilo" : "https://unsplash.it/300/300?image=",
        "data" : "4 mesi fa",
        "testoPost" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "immagine" : "https://unsplash.it/300/300?image=",
        "numeroLike" : "80"
    },

    {
        "nomeAutote" : "Phil Mangione",
        "fotoProfilo" : "https://unsplash.it/300/300?image=",
        "data" : "8 mesi fa",
        "testoPost" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "immagine" : "https://unsplash.it/300/300?image=",
        "numeroLike" : "100"
    },

    {
        "nomeAutote" : "Phil Mangione",
        "fotoProfilo" : "https://unsplash.it/300/300?image=",
        "data" : "11 mesi fa",
        "testoPost" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "immagine" : "https://unsplash.it/300/300?image=",
        "numeroLike" : "230" 
    }
]

for (let i = 0; i < post.length; i++) {
    const {nomeAutote, fotoProfilo, data, testoPost, immagine, numeroLike} = post[i];
    document.getElementById("container").innerHTML +=
            `<div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${fotoProfilo}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${nomeAutote}</div>
                        <div class="post-meta__time">${data}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${testoPost}</div>
            <div class="post__image">
                <img src="${immagine}">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${numeroLike}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;
    }