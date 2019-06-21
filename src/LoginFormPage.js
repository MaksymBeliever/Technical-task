export default function (navigateTo) {

   const app = $('#app');

   const login = () => {
     const emailInput = $('.email__input');
     const passwordInput = $('.password__input');
     
     if (!emailInput.val() || !passwordInput.val()) return;

     const user = {
        email: emailInput.val(),
        password: passwordInput.val()
     };
     localStorage.user = JSON.stringify(user);
     navigateTo('catalogue');
   };

   const render =
   `<section id="autorization_field" class="autorization_field">
      <div id="login__container" class="container justify-content-center">
         <div id="login__row" class="row justify-content-center">
            <div class="login__frame">
               <h2 class="sign__in">Sign in to your account</h2>
               <h6>Email Address*</h6>
               <input type="email" class="email__input" placeholder="Enter email" autofocus>
               <h6>Password*</h6>
               <input type="password" class="password__input" placeholder="Enter password" autofocus>
               <button type="button" id="sign_in_submit_button" class="sign_in_submit_button justify-content-center" value="Sign In">
                  <p class="signInButtonText">Sign in</p>
                  <i class="fa fa-long-arrow-right"></i>
               </button>
            </div>
         </div>
      </div>
   </section>`;

   app.html(render);
   
   $('#sign_in_submit_button').click(login);
}

