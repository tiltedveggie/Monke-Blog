import axios from 'axios';

export function handleNavMenu(menu, setMenu) {
	setMenu(!menu);
}

export const handleChange = (e, setValues) => {
	setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
};

export const handleLogin = async (
	e,
	values,
	setError,
	navigate,
	navigateTo
) => {
	e.preventDefault();

	try {
		await axios.post('auth/login', values);
		navigate(navigateTo);
	} catch (err) {
		console.log(err);
		setError(err);
	}
};

export const handleRegister = async (
	e,
	values,
	setError,
	navigate,
	navigateTo
) => {
	e.preventDefault();

	try {
		await axios.post('auth/register', values);
		navigate(navigateTo);
	} catch (err) {
		console.log(err);
		setError(err);
	}
};
