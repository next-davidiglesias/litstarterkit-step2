// Import lit-html functions
import {html, render} from 'lit-html';

const items = [1,2,3,4,5]
const myTemplate = ()=> html`
<section class="horizontal-snap">
  <a href="https://www.tenhundredart.com/"><picture>
    <source type="image/webp" srcset="https://intrinsic-layout-guide.glitch.me/img/tees/Defenders-of-the-moon-tee.webp 1x">
    <img src="https://intrinsic-layout-guide.glitch.me/img/tees/Defenders-of-the-moon-tee.jpg" loading="lazy">
  </picture></a>
  <a href="https://www.tenhundredart.com/"><picture>
    <source type="image/webp" srcset="https://intrinsic-layout-guide.glitch.me/img/tees/Statix-Boy-Black-Tee.webp 1x">
    <img src="https://intrinsic-layout-guide.glitch.me/img/tees/Statix-Boy-Black-Tee.jpg" loading="lazy">
  </picture></a>
  <a href="https://www.tenhundredart.com/"><picture>
    <source type="image/webp" srcset="https://intrinsic-layout-guide.glitch.me/img/tees/Discover-Paradise-Vintage-Black-Scoop.webp 1x">
    <img src="https://intrinsic-layout-guide.glitch.me/img/tees/Discover-Paradise-Vintage-Black-Scoop.jpg" loading="lazy">
  </picture></a>
  <a href="https://www.tenhundredart.com/"><picture>
    <source type="image/webp" srcset="https://intrinsic-layout-guide.glitch.me/img/tees/The-Archer-Tee-BLACK.webp 1x">
    <img src="https://intrinsic-layout-guide.glitch.me/img/tees/The-Archer-Tee-BLACK.jpg" loading="lazy">
  </picture></a>
  <a href="https://www.tenhundredart.com/"><picture>
    <source type="image/webp" srcset="https://intrinsic-layout-guide.glitch.me/img/tees/Strange-World-Black-Tee.webp 1x">
    <img src="https://intrinsic-layout-guide.glitch.me/img/tees/Strange-World-Black-Tee.jpg" loading="lazy">
  </picture></a>
  <a href="https://www.tenhundredart.com/"><picture>
    <source type="image/webp" srcset="https://intrinsic-layout-guide.glitch.me/img/tees/Alchemist-Returns-Tee-BLACK.webp 1x">
    <img src="https://intrinsic-layout-guide.glitch.me/img/tees/Alchemist-Returns-Tee-BLACK.jpg" loading="lazy">
  </picture></a>
  <a href="https://www.tenhundredart.com/"><picture>
    <source type="image/webp" srcset="https://intrinsic-layout-guide.glitch.me/img/tees/Shred-Seattle-Tee.webp 1x">
    <img src="https://intrinsic-layout-guide.glitch.me/img/tees/Shred-Seattle-Tee.jpg" loading="lazy">
  </picture></a>
</section>


`;


render(myTemplate(), document.body.querySelector('section')
);

