let images = [
  'https://www.760degres.fr/wp-content/uploads/2019/08/photos-760degres-cinq-lacs-forclaz-les-arcs-19.jpg',
  'https://media-cdn.tripadvisor.com/media/photo-s/06/e5/f9/15/office-de-tourisme-belley.jpg',
  'https://laliste.net/wp-content/uploads/2016/04/Orgues_Ille-sur-Tet-paysages-de-france-wikipedia.jpeg',
  'https://archzine.fr/wp-content/uploads/2019/05/beau-fond-d-ecran-paysage-image-pour-fond-d-e%CC%81cran-asie-paysage-le-plus-beau-pays-du-monde-vietnam-rivier-et-coulins.jpeg',
  'https://www.nopole.com/upload/voyage-en-islande-1602486945-33705.jpeg',
  'https://media-cdn.tripadvisor.com/media/photo-s/0f/d9/ea/9b/vue-du-lac.jpg',
  'https://guide-goyav.com/wp-content/uploads/2019/09/69ca50b4-8fe9-476c-9e64-6596e9ccb83d.jpeg',
  'https://patrimoines.ain.fr/img/thumbnails/425_266/la_source_du_groin.jpg',
];
let num = 0;
function next() {
  let slider = document.getElementById('img');
  num++;
  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
}
function prev() {
  let slider = document.getElementById('img');
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  slider.src = images[num];
}

// TO FIX : La console renvoie 2 erreurs : next is not defined /prev is not defined
