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
        "numeroLike" : "Piace a 80 persone"
    },

    {
        "nomeAutote" : "Phil Mangione",
        "fotoProfilo" : "https://unsplash.it/300/300?image=",
        "data" : "4 mesi fa",
        "testoPost" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "immagine" : "https://unsplash.it/300/300?image=",
        "numeroLike" : "Piace a 80 persone"
    },

    {
        "nomeAutote" : "Phil Mangione",
        "fotoProfilo" : "https://unsplash.it/300/300?image=",
        "data" : "4 mesi fa",
        "testoPost" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "immagine" : "https://unsplash.it/300/300?image=",
        "numeroLike" : "Piace a 80 persone"
    }
]

for (let i = 0; i < post.length; i++) {
    const oggetto = post[i];
    const nomeAutote = oggetto.nomeAutote;
    const data = oggetto.data;
    const testoPost = oggetto.testoPost;
    const immagine = oggetto.immagine;
    const numeroLike = oggetto.nomeAutote;
    document.getElementById("container").innerHTML +=
            `<div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">Phil Mangione</div>
                        <div class="post-meta__time">4 mesi fa</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
            <div class="post__image">
                <img src="https://unsplash.it/600/300?image=171" alt="">
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
                        Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;
    }