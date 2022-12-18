import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

 const notify = (code, msg) => {
    if (code == 'warning') {
        toast.warning(msg,
            { position: toast.POSITION.TOP_RIGHT, autoClose: 1500 })
    }
    else if (code == 'success') {
        toast.success(msg,
            { position: toast.POSITION.TOP_RIGHT, autoClose: 1500 })
    }
    else if (code == 'error') {
        toast.error(msg,
            { position: toast.POSITION.TOP_RIGHT, autoClose: 1500 })
    }

}

export default notify;