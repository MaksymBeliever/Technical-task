import Product from './Product';

export default function (navigateTo) {

   const app = $('#app');
   app.html('<section id="product_list_field" class="row product_list_field"></section>');
   $.getJSON('/products.json', function(products) {
      for (let product of products) {
         app.find('section').append(new Product(product, navigateTo).render());
      }
   });
}
