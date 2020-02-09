// Import lit-html functions
import {html, render} from 'lit-html';

const items = [1,2,3,4,5]
const myTemplate = ()=> html`
  <ul>
    ${items.map((item) => html`<li>${item}</li>`)}
  </ul>
`;


render(myTemplate(), document.body.querySelector('section')
);

