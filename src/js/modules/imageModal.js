const imageModal = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img');

    imgPopup.classList.add('popup');

    workSection.appendChild(imgPopup);
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';

            const source = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', source);
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
        }
    })

}

export default imageModal;