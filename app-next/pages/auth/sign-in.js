import Layout from '../../components/layout'

export default function Home() {
    return (
        <>
            <Head>
                <title>Workers</title>
            </Head>
            <Layout>
                <p class="fs-3 text-center">Please Sign In</p>

                <from>
                    <label className={"form-label"} for='Login'>Login</label>
                    <input id='Login' type={"text"} className={"form-control"} placeholder='Enter a Login'/>

                    <label className={"form-label"} for='Password'>Password</label>
                    <input id='Password' type={"text"} className={"form-control"} placeholder='Enter a Password'/>

                    <button type="submit" class="btn btn-primary mar-top-20">Sign In</button>
                </from>
            </Layout>
        </>
    )
}