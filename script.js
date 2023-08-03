//Collapse existing card
$(".port-item").click(function () {
  $(".collapse").collapse("hide");
});

//CSS FADE initializer
AOS.init();


//Dev text transition

const dev_transition = document.querySelector(".devgineer");
const text1 = ` 
<p
data-aos="fade"
data-aos-duration="1500"
class="font-weight-bold full-stack-font font_family text-center mt-4"
>
&lt;dev&gt;Web Engineer&lt;/dev&gt;
</p>`;

const text2 = ` 
<p
data-aos="fade"
data-aos-duration="1500"
class="font-weight-bold full-stack-font font_family text-center mt-4"
>
&lt;dev&gt;Front-End Developer&lt;/dev&gt;
</p>`;

const text3 = ` 
<p
data-aos="fade"
data-aos-duration="1500"
class="font-weight-bold full-stack-font font_family text-center mt-4"
>
&lt;dev&gt;UI/UX Designer&lt;/dev&gt;
</p>`;

const text4 = ` 
<p
data-aos="fade"
data-aos-duration="1500"
class="font-weight-bold full-stack-font font_family text-center mt-4"
>
&lt;dev&gt;Web Developer&lt;/dev&gt;
</p>`;
const text5 = ` 
<p
data-aos="fade"
data-aos-duration="1500"
class="font-weight-bold full-stack-font font_family text-center mt-4"
>
&lt;dev&gt;Software Developer&lt;/dev&gt;
</p>`;
const text6 = ` 
<p
data-aos="fade"
data-aos-duration="1500"
class="font-weight-bold full-stack-font font_family text-center mt-4"
>
&lt;dev&gt;JavaScript Developer&lt;/dev&gt;
</p>`;
const text7 = ` 
<p
data-aos="fade"
data-aos-duration="1500"
class="font-weight-bold full-stack-font font_family text-center mt-4"
>
&lt;dev&gt;Web App Developer&lt;/dev&gt;
</p>`;
const text8 = ` 
<p
data-aos="fade"
data-aos-duration="1500"
class="font-weight-bold full-stack-font font_family text-center mt-4"
>
&lt;dev&gt;Software Engineer&lt;/dev&gt;
</p>`;

const texts = [text1, text2, text3, text4, text5, text6, text7, text8];
let index = 0;
setInterval(() => {
  dev_transition.innerHTML = texts[index++];
  if (index >= texts.length) {
    index = 0;
  }
}, 2000);

//Carousel slide animation
$(".carousel").carousel({
  interval: 4000,
});
