import { toast } from 'react-toastify'


export const success = () => toast.success('Покупка успешно оплачено', {
	position: "top-left",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "light",
	});
