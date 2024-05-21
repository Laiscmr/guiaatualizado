const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#closeModal");
const Modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    Modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};

[openModalButton,closeModalButton,fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});