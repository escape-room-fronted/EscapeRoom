import Swal from "sweetalert2";

const ModalWindowOk = (text) => {
  Swal.fire({
    title: text,
    text: text,
    icon: "success",
    confirmButtonColor: "#FFC300",
    background: "white",
    color: "#FFC300",
  });
};

export default ModalWindowOk;
