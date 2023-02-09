import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
    return (
        <>
            <Head>
                <title>Workers</title>
            </Head>
            <Layout>
                <p className="text-center fs-3 fw-semibold">This is my first symfony and nextjs project. <br/>I think he's not bad.</p>
            </Layout>
        </>
    )
}
