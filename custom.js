$(document).ready(function() {

  const url= window.location.pathname;

  if (url === '/account/register') {
    const form = document.getElementById('RegisterForm');
    if (form && form.children[2])
      form.children[2].style.display = "none";
  }

  const ul= document.createElement('ul')

  ul.style.cssText= "margin:-15px auto 15px; width:100%;display: flex;justify-content: center;";
  ul.innerHTML= `
    <li><a class="btn-custom-extra" href="https://dwn.robotaset.com/apk/spy77/Spy77.apk" style="margin-right:5px" rel="nofollow" target="_blank">ANTI NAWALA</a></li>
    <li><a class="btn-custom-extra" href="/demo/slot--pgs/" font-weight:bold;">SLOT DEMO PGSOFT</a></li>
  `;

  document.querySelectorAll('main ul')[0].after(ul)
});
