import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function NotFound() {
    const router = useRouter();

    useEffect(() =>{
        setTimeout(() =>{
            router.push('/');
        }, 3000);
    }, []);

    return (
        <>
            <Head>
                <title>Not Found</title>
            </Head>
            <Layout>
                <div className={`position-absolute top-50 start-50 translate-middle`}>
                    <h1 className='text-center'>Ой...</h1>
                    <h2 className='text-center'>Такой страницы здесь нет!</h2>
                    <p className='text-center'>Перехожу на <Link href='/'>главную сраницу</Link> через 3 секунды ...</p>
                </div>
            </Layout>
        </>
    )
}