import Swal from "sweetalert2";

const ModalWindowOk = (text, icon="success") => {
  Swal.fire({
    title: text,
    text: text,
    icon: icon,
    confirmButtonColor: "#FFC300",
    background: "white",
    color: "#FFC300",
  });
};

export default ModalWindowOk;
