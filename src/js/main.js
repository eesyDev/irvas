import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import imageModal from './modules/imageModal';

window.addEventListener('DOMContentLoaded', () => {
    let modalState = {};
    let endtime = '2024-04-03';
    changeModalState(modalState);

    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline');
    forms(modalState);
    timer('#timer', endtime);
    imageModal()
});