import Head from 'next/head'
import Layout from '../../../components/layout'
import Link from 'next/link'
import button from '../../../styles/button.module.css'

export async function getStaticPaths() {
    const response = await fetch('http://localhost:3001/api/users')
    const data = await response.json()

    const paths = data[`hydra:member`].map(res => {
        return{
            params: {id: res.id.toString()}
        }
    })
    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps(context){
    const { id } = context.params;
    const response = await fetch(`http://localhost:3001/api/users/${id}`)
    const data = await response.json()
    return{props:{worker: data}}
}


export default function ShowWorker ({worker}){   
    
    return (
        <>
            <Head>
                <title>Worker</title>
            </Head>
            <Layout>
                <p className='fs-3 text-center'>Worker {worker.firstName}</p>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{worker.id}</td>
                        </tr>
                        <tr>
                            <th>Login</th>
                            <td>{ worker.username }</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{ worker.firstName }</td>
                        </tr>
                        <tr>
                            <th>Surname</th>
                            <td>{ worker.secondName }</td>
                        </tr>
                        <tr>
                            <th>Password</th>
                            <td>{ worker.password }</td>
                        </tr>
                    </tbody>
                </table>

                <Link href="/all-workers" className={`${button.padding10px} btn btn-outline-dark mar-top-20`}>Back</Link>
            </Layout>
        </>
    )
}