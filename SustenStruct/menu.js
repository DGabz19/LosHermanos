var menuItem= document.querySelectorAll(".Item")

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('Ativo')

    )
    this.classList.add('Ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click',selectLink)
)

function mudarPagina(novaPagina) {
    window.location.href = novaPagina;
}

//Exer menu
var expande= document.querySelector('#expande')
var menuSide= document.querySelector('.menu-lateral')

expande.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})

document.getElementById("formulario-contato").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar que o formulário seja enviado normalmente
    
    // Simule o envio do e-mail (substitua este código com a lógica real do envio do e-mail)
    // Aqui, estamos apenas exibindo uma mensagem de sucesso após 2 segundos.
    setTimeout(function () {
        var mensagem = document.getElementById("mensagem");
        mensagem.style.display = "block";
        mensagem.textContent = "E-mail enviado com sucesso!";
    }, 3000); // Aguarde 2 segundos para exibir a mensagem
    
    // Limpar o campo de e-mail após o envio (opcional)
    document.getElementById("email").value = "";
});

function expandImage(element) {
    // Exibe a imagem expandida
    document.getElementById('expandedImage').style.display = 'flex';
    
    // Define a imagem expandida com a mesma fonte da imagem original
    document.getElementById('expandedImage').getElementsByTagName('img')[0].src = element.src;
  }

  function collapseImage() {
    // Oculta a imagem expandida ao clicar nela
    document.getElementById('expandedImage').style.display = 'none';
  }




  function expandVideo(videoSrc, thumbnailSrc) {
    // Exibe a área expandida do vídeo e define a fonte
    var expandedVideo = document.querySelector('.expandedVideo');
    expandedVideo.style.display = 'flex';
    document.getElementById('videoSource').src = videoSrc;

    // Remove quaisquer miniaturas anteriores
    var thumbnailImage = expandedVideo.querySelector('img');
    if (thumbnailImage) {
        expandedVideo.removeChild(thumbnailImage);
    }
    // Inicia a reprodução do vídeo
    var videoElement = document.getElementById('videoElement');
    if (videoElement && typeof videoElement.play === 'function') {
        videoElement.load();
        videoElement.play();
    }
}

function collapseVideo() {
    // Oculta a área expandida do vídeo ao clicar nela
    var expandedVideo = document.querySelector('.expandedVideo');
    expandedVideo.style.display = 'none';

    // Remove a miniatura da imagem ao fechar
    var thumbnailImage = expandedVideo.querySelector('img');
    if (thumbnailImage) {
        expandedVideo.removeChild(thumbnailImage);
    }

    // Pausa o vídeo ao fechar
    var videoElement = document.getElementById('videoElement');
    if (videoElement && typeof videoElement.pause === 'function') {
        videoElement.pause();
    }
}