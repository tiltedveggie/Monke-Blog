import React from 'react';
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm';
import styles from './Register.module.scss';

const Register = () => {
	return (
		<section className={styles.section}>
			<div>
				<h2>Register</h2>
				<RegisterForm />
			</div>
		</section>
	);
};

export default Register;
