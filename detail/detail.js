import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailEl = document.querySelector('#dog-detail-container');

window.addEventListener('load', async() => {
    const data = new URLSearchParams(window.location.search);
    const dogId = data.get('id');

    const dog = await getDog(dogId);
    const dogEl = renderDogDetail(dog);

    dogDetailEl.append(dogEl);
});