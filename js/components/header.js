export default function Header() {
  const header = document.querySelector("#header");
  const markup = `<div class="collapse bg-dark" id="navbarHeader">
                    <div class="container">
                      <div class="row">
                        <div class="col-sm-8 col-md-7 py-4">
                          <h4 class="text-white">Login</h4>
                        </div>
                        <div class="col-sm-4 offset-md-1 py-4">
                          <h4 class="text-white">Contact</h4>
                          <ul class="list-unstyled">
                            <li><a href="#" class="text-white">Follow on Twitter</a></li>
                            <li><a href="#" class="text-white">Like on Facebook</a></li>
                            <li><a href="#" class="text-white">Email me</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="navbar navbar-dark bg-dark shadow-sm">
                    <div class="container d-flex justify-content-between">
                      <a href="./index.html" class="navbar-brand d-flex align-items-center">
                          <img src="./img/noroff-logo.png" alt="Noroff" width="160">
                      </a>
                      <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarHeader"
                        aria-controls="navbarHeader"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span class="navbar-toggler-icon"></span>
                      </button>
                    </div>
                  </div>`;

  return (header.innerHTML = markup);
}
