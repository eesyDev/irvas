import checkNumInpusts from "./checkNumInpusts";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

        checkNumInpusts('#width');
        checkNumInpusts('#height');

        function bindActionToElem(event, elem, props) {
            elem.forEach((el, i) => {
                el.addEventListener(event, () => {
                    switch(el.nodeName) {
                        case 'SPAN' : 
                            state[props] = i;
                            break;
                        case 'INPUT' : 
                            if (el.getAttribute('type') === 'checkbox') {
                                i === 0 ? state.props = 'cold' : state.props = 'warm'
                            } else {
                                state[props] = el.value;
                            }
                            break;
                        case 'SELECT' : 
                            state[props] = el.value
                            break;
                    };
                });
            });
        }

        bindActionToElem('click', windowForm, 'form')
        bindActionToElem('input', windowHeight, 'width')
        bindActionToElem('input', windowWidth, 'height')
        bindActionToElem('change', windowProfile, 'profile')
        bindActionToElem('change', windowType, 'type')
}



export default changeModalState;