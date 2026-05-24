$(document).ready(function() {
  if (window.location.pathname == '/account/register') {
    const form = document.getElementById('RegisterForm');
    if (form && form.children[2])
      form.children[2].style.display = "none";
  }

  const ul= document.createElement('ul')

  ul.style.cssText= "margin:-25px auto 10px; width:100%;display: flex;justify-content: center;";
  ul.innerHTML= `
    <li><a class="btn-custom-extra" href="https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=app.intra&amp;hl=en&amp;gl=US" rel="nofollow" margin-right:"5px" target="_blank">ANTI NAWALA</a></li>
    <li><a class="btn-custom-extra" href="/demo/slot-demo-pgs/" font-weight:bold;">SLOT DEMO PGSOFT</a></li>
  `;

  document.querySelectorAll('main ul')[0].after(ul)
});
