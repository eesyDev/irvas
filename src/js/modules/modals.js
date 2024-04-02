const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              modalWindows = document.querySelectorAll('[data-modal]');

        trigger.forEach(btn => {
            btn.addEventListener('click', e => {
                modalWindows.forEach(m => {
                    m.style.display = 'none';
                });

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            })
        });

        close.addEventListener('click', e => {
            modalWindows.forEach(m => {
                m.style.display = 'none';
            })
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });

        modal.addEventListener('click', e => {
            if (e.target === modal && closeOverlay) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        })
    };

    function showModalByTimer(modalSelector, time) {
        setTimeout(function() {
            document.querySelector(modalSelector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time)
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.glazing_price_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    // showModalByTimer('.popup', 5000)
}

export default modals;