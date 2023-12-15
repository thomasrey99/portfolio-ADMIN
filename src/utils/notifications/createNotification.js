import Swal from "sweetalert2";


export const createNotification=(item)=>{
    return Swal.fire({
                position: "top-end",
                icon: "success",
                title:`${item} creado con exito`,
                showConfirmButton: false,
                timer: 1500,
            });
}