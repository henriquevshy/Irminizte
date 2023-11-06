window.onload = function () {
  const Conteudo = [
    { Imagem: "1", url: ' ./img/2.avif' },
    { Imagem: "2", url: ' ./img/3.webp' },
    
  ];

  const Sueter = document.querySelectorAll('.swiper-slide');

  Sueter.forEach((slide, index) => {
    const img = document.createElement("img");
    img.src = Conteudo [index % Conteudo.length].url;
    img.alt = Conteudo[index % Conteudo.length].Imagem;
    img.width = 200;
    img.style.margin = '10px';

  slide.appendChild(img);

  });
};

