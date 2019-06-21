import CataloguePage from './catalogue/CataloguePage';
import ProductPage from './ProductPage';
import LoginForm from './LoginFormPage';

export default function () {
   const User = localStorage.user;
   
   const logout = $('#logout');

   const setLocation = path => {
      history.pushState("", "", `/${path}`);
   };

   const navigateTo = (page, id) => {
      switch (page) {
         case 'login': new LoginForm(navigateTo); setLocation('login'); break;
         case 'catalogue': new CataloguePage(navigateTo); setLocation('catalogue'); break;
         case 'product': new ProductPage(navigateTo); setLocation(`product/${id}`); break;
      }
   };

   logout.click(() => {
      localStorage.user = '';
      navigateTo('login');
   });

   this.init = () => {
      if (!User) {
         navigateTo('login');
         
      } else {
         navigateTo('catalogue');
      }
   };

   const furnesia = $('.logo');
   furnesia.click(() => {
      if (!User) {
         navigateTo('login');
         
      } else {
         navigateTo('catalogue');
      }
   });

   const catalogueButton = $('#catalogue__button');
   catalogueButton.click(() => {
      if (!User) {
         navigateTo('login');
         
      } else {
         navigateTo('catalogue');
      }
   });
}