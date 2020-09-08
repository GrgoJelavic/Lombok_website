function onSubmit(event) {
    event.preventDefault();
    console.log(event);
}

function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        document.form1.text1.focus();
        emailValidation();
        return true;
    } else {
        alert("You have entered an invalid email address! Please please try again.");
        document.form1.text1.focus();
        return false;
    }
}

function emailValidation() {
    const openModalButton = document.querySelectorAll('[data-modal-target]')
    const closeModalButton = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('overlay')


    openModalButton.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget)
            openModal(modal)
        })
    })

    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal => {
            closeModal(modal)
        })
    })

    closeModalButton.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal')
            closeModal(modal)
        })
    })

    function openModal(modal) {
        if (modal == null) return
        modal.classList.add('active')
        overlay.classList.add('active')
    }

    function closeModal(modal) {
        if (modal == null) return
        modal.classList.remove('active')
        overlay.classList.remove('active')
    }
}