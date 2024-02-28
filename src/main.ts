import './style.css';

let contentLoaded = false;

document.addEventListener('click', function() {
  if (contentLoaded) return;
  contentLoaded = true;

  (document.getElementById('funnyaudio') as HTMLAudioElement).play();
  (document.getElementById('funnytext') as HTMLDivElement).innerText = '781272276,785519967';

  let prevImage: HTMLImageElement | null;
  let curImage: HTMLImageElement | null;
  let nextImage: HTMLImageElement | null;

  curImage = document.createElement('img');
  curImage.src = 'tables/table1.jpg';
  document.body.appendChild(curImage);

  nextImage = document.createElement('img');
  nextImage.src = 'tables/table2.jpg';
  nextImage.classList.add('next');
  document.body.appendChild(nextImage);

  let tableCounter = 3;

  setInterval(function() {
    prevImage = curImage;
    prevImage?.classList.add('prev');

    curImage = nextImage;
    curImage?.classList.remove('next');

    nextImage = document.createElement('img');
    nextImage.src = `/tables/table${tableCounter}.jpg`;
    nextImage.classList.add('next');
    document.body.appendChild(nextImage);

    tableCounter++;
  }, 4000);
});