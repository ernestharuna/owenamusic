import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axiosClient from '../../../axios-client.js'
import './styles/authStyles.scss'

export default function Register() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = (data) => {
        axiosClient.post('/register', data)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                const res = err.response;
                if (res && res.status === 422) {
                    console.log(res);
                }
            })
    }

    return (
        <div className="animated fadeInDown">
            <div className='form-container'>
                <div className="form container">
                    <h3>Welcome to OwenaHub!</h3>
                    <p>
                        Start making valuable connections with experienced mentors <br className='hidden' />
                        around the world.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("first_name", { required: true })}
                            className={errors.first_name ? 'error form-control' : 'form-control'}
                            type="text" placeholder="First Name"
                        />

                        <input
                            {...register("last_name", { required: true })}
                            className={errors.last_name ? 'error form-control' : 'form-control'}
                            type="text" placeholder="Last Name"
                        />

                        <input
                            {...register("email", { required: true })}
                            className={errors.email ? 'error form-control' : 'form-control'}
                            type="email" placeholder="owena@xyz.com"
                        />

                        <input
                            {...register("password", { required: true })}
                            className={errors.password ? 'error form-control' : 'form-control'}
                            type="password" placeholder="Password"
                        />

                        <input
                            {...register("password_confirmation", { required: true })}
                            className={errors.password_confirmation ? 'error form-control' : 'form-control'}
                            type="password" placeholder="Confirm Password"
                        />

                        <button className='form-control' id='submit' disabled={isSubmitting}>
                            {isSubmitting ? (<span className='loader' style={{ cursor: 'wait' }}></span>) : "Register"}
                            {/* <span className='loader'></span> */}
                        </button>
                    </form>
                    <hr />
                    <p>
                        Do you have an account with us? <Link to="/auth/login">
                            Login here
                        </Link>
                    </p>
                </div>

                <div className="howto">
                    <div className='howto-box'>
                        <h4>Getting started is Easy!</h4>
                        <div>
                            <div className='howto-list'>
                                <span className="li">1</span>
                                Create an account 🚀
                            </div>

                            <div className='howto-list'>
                                <span className="li">2</span>
                                Verify Your Email 🥰
                            </div>

                            <div className='howto-list'>
                                <span className="li">3</span>
                                Book a Session 🎉
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}