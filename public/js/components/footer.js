export default function Footer() {
    const footer = document.querySelector('#footer');
    const markup = `<div class="container">
                    <p class="float-right">
                    <a href="#">Back to top</a>
                    </p>
                  </div>`;
    return footer.innerHTML = markup;
}
