import Layout from '../../components/layout'
import Head from 'next/head'
import button from '../../styles/button.module.css'

export default function SignIn() {
    return (
        <>
            <Head>
                <title>Workers</title>
            </Head>
            <Layout>
                <p class="fs-3 text-center">Please Sign In</p>

                <from className='create_worker_form'>
                    <label className={"form-label"} for='Login'>Login</label>
                    <input id='Login' type={"text"} className={"form-control"} placeholder='Enter a Login'/>

                    <label className={"form-label"} for='Password'>Password</label>
                    <input id='Password' type={"text"} className={"form-control"} placeholder='Enter a Password'/>

                    <button type="submit" className={`${button.mar_0_auto} btn btn-primary`}>Sign In</button>
                </from>
            </Layout>
        </>
    )
}