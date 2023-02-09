import Head from 'next/head'
import Layout from '../../components/layout'

export default function Home() {
    return (
        <>
            <Head>
                <title>Workers</title>
            </Head>
            <Layout>
                <p class="fs-3 text-center">Please Registration</p>

                <from>
                    <label className={"form-label"} for='name'>Name</label>
                    <input id='name' type={"text"} className={"form-control"} placeholder='Enter a Name'/>

                    <label className={"form-label"} for='Secondname'>Secondname</label>
                    <input id='Secondname' type={"text"} className={"form-control"} placeholder='Enter a Surname'/>

                    <label className={"form-label"} for='Login'>Login</label>
                    <input id='Login' type={"text"} className={"form-control"} placeholder='Enter a Login'/>

                    <label className={"form-label"} for='Password'>Password</label>
                    <input id='Password' type={"text"} className={"form-control"} placeholder='Enter a Password'/>

                    <button type="submit" class="btn btn-primary mar-top-20">Registration</button>
                </from>
            </Layout>
        </>
    )
}