import Head from 'next/head'
import Layout from '../../../components/layout'
import { useState } from 'react'
import Link from 'next/link'
import button from '../../../styles/button.module.css'
import { useRouter } from 'next/router'

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

export default function Edit({worker}) {
    const router = useRouter();

    const [name, setName] = useState(worker.firstName)
    const [secondName, setSecondName] = useState(worker.secondName)
    const [login, setLogin] = useState(worker.username)
    const [password, setPassword] = useState(worker.password)
    
    const submitUser = () => {
        if(name && secondName && login && password)
        {
            const response = fetch(`http://localhost:3001/api/users/${worker.id}`, {
                method: 'PUT', 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: login, 
                    password: password,
                    firstName: name, 
                    secondName: secondName
                })
            }) 
            router.push('/all-workers')
        }
    }
    return (
        <>
            <Head>
                <title>Workers</title>
            </Head>
            <Layout>
                <p className="fs-3 text-center">Edit</p>
                <form className='create_worker_form'>
                    <label className={"form-label"} htmlFor='Name'>Name</label>
                    <input defaultValue={worker.firstName} onChange={e => setName(e.target.value)} id='Name' type={"text"} className={"form-control"} placeholder='Enter a Name'/>

                    <label className={"form-label"} htmlFor='SecondName'>Surname</label>
                    <input defaultValue={worker.secondName} onChange={e => setSecondName(e.target.value)} id='SecondName' type={"text"} className={"form-control"} placeholder='Enter a Surname'/>

                    <label className={"form-label"} htmlFor='Login'>Login</label>
                    <input defaultValue={worker.username} onChange={e =>  setLogin(e.target.value)} id='Login' type={"text"} className={"form-control"} placeholder='Enter a Login'/>

                    <label className={"form-label"} htmlFor='Password'>New password</label>
                    <input name="pass" onChange={e => setPassword(e.target.value)} id='Password' type={"password"} className={"form-control"} placeholder='Enter a new Password'/>

                    <div className="row">
                        <div className="col">
                        <Link href="/all-workers" className={`${button.padding10px} btn btn-outline-dark mar-top-20`}>Back</Link>
                            </div>
                        <div className="col">
                            <button onClick={submitUser} type="button" className={`${button.font_weight} ${button.padding10px} ${button.width_150} btn btn-success center`}>Update</button>
                        </div>
                            <div className="col">
                        </div>
                    </div>
                </form>
                
            </Layout>
        </>
    )
}