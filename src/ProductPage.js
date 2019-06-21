
export default function (navigateTo) {
   const app = $('#app');

   const goBack = $(document.createElement('button'));
   goBack.addClass('goBack');

   goBack.click(() => navigateTo('catalogue'));

   app.html('');



   $.getJSON('/products.json', function (data) {
      const productId = + location.pathname[location.pathname.length - 1];

      const product = data.find(p => productId === p.id);

      const section = $(document.createElement('section'));
      section.addClass('product_page');
      section.attr('id', 'product_page');

      const carousel = $(document.createElement('div'));
      carousel.addClass('owl-carousel owl-theme hidden-block');

      const slides = product.images.map(image => `<img src="/img/furniture/${image}" />`);
      carousel.html(slides.join(''));

      $(carousel).owlCarousel({
         loop:true,
         margin:10,
         nav:true,
         responsive:{
             0:{
                 items:1
             },
             600:{
                 items:2
             },
             1000:{
                 items:3
             }
         }
     });

      section.html(`
         <h2>${product.name}</h2>
      `);

      section.find('h2').before(goBack);
      section.find('h2').after(carousel);

      const arrowLeft = $(document.createElement('i'));
      arrowLeft.addClass('fa fa-long-arrow-left');
      goBack.append(arrowLeft);
      const spanGoBack = $(document.createElement('span'));
      spanGoBack.addClass('spanGoBack');
      goBack.append(spanGoBack);
      spanGoBack.html('Back to catalog');


      app.append(section);


      setTimeout(() => {
         carousel.removeClass('hidden-block').addClass('show-block');
      }, 500);
   });
}