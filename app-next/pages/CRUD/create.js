import Head from 'next/head'
import Layout from '../../components/layout'
import { useState } from 'react'
import Link from 'next/link'
import button from '../../styles/button.module.css'
import { useRouter } from 'next/router'


export default function Create() {
    const router = useRouter();

    const [name, setName] = useState()
    const [secondName, setSecondName] = useState()
    const [login, setLogin] = useState()
    const [password, setPassword] = useState()

    const submitUser = () => {
        if(name && secondName && login && password)
        {
            const response = fetch(`http://localhost:3001/api/users`, {
                method: 'POST', 
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
                <p className='fs-3 text-center'>Create a new Worker</p>
                <form className='create_worker_form'>
                    <label className={"form-label"} htmlFor='Name'>Name</label>
                    <input onChange={e => setName(e.target.value)} id='Name' type={"text"} className={"form-control"} placeholder='Enter a Name' required/>

                    <label className={"form-label"} htmlFor='SecondName'>SecondName</label>
                    <input onChange={e => setSecondName(e.target.value)} id='SecondName' type={"text"} className={"form-control"} placeholder='Enter a Surname' required/>

                    <label className={"form-label"} htmlFor='Login'>Login</label>
                    <input onChange={e => setLogin(e.target.value)} id='Login' type={"text"} className={"form-control"} placeholder='Enter a Login' required/>
                    
                    <label className={"form-label"} htmlFor='Password'>Password</label>
                    <input onChange={e => setPassword(e.target.value)} id='Password' type={"password"} className={"form-control"} placeholder='Enter a Password' required/>


                    <div className="row">
                        <div className="col">
                        <Link href="/all-workers" className={`${button.padding10px} btn btn-outline-dark mar-top-20`}>Back</Link>
                            </div>
                        <div className="col">
                            <button onClick={submitUser} type="button" className={`${button.font_weight} ${button.padding10px} ${button.width_150} btn btn-success center`}>Create</button>
                        </div>
                            <div className="col">
                        </div>
                    </div>
                </form>
            </Layout>
        </>
    )
}