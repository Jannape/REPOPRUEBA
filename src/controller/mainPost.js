

const buttonPublicPost = document.getElementById('btn-public-post');
buttonPublicPost.addEventListener('click', (e) => {
  let descriptionPost = document.getElementById('txt-description-post');
  let likesCount = document.getElementById('input-likes-count');
		e.preventDefault();
		createPost(descriptionPost,likesCount);
		
});



