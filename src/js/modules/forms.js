const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    
    phoneInputs.forEach(el => {
        el.addEventListener('input', () => {
            el.value = el.value.replace(/\D/, '')
        })
    });

    const message = {
        success: 'Success',
        loading: 'Loading',
        failure: 'Failure'
    }

    const clearInputs = () => {
        inputs.forEach((inpt) => {
            inpt.value = '';
        })
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };

    form.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');

            item.appendChild(statusMessage);

            const formData = new FormData(item);

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch((err) => {
                    console.error(err);
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove()
                    }, 3000);
                })
        })
    })
}

export default forms;