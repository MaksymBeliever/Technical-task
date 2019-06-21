

export default function (data, navigateTo) {

   this.render = () => {
      const div = document.createElement('div');
      div.className = 'catalog-product col-md-4';

      div.innerHTML =
            `<div class="product-wrap d-flex text-center flex-column">
               <h4 class="preview__text" onclick="navigateTo()">${data.name}</h4>
               <img class="preview__img img-fluid" src="/img/furniture/preview/${data.img}">
               <h4 class="product__price">price: ${data.price}</h4>
            </div>`;

      div.querySelector('h4').onclick = () => navigateTo('product', data.id);

      return div;
   };
}