import Head from 'next/head'
import Layout from '../../components/layout'
import { useState } from 'react'
import button from '../../styles/button.module.css'
import { useRouter } from 'next/router'

export default function Registration() {
    const router = useRouter();

    const [name, setName] = useState()
    const [secondName, setSecondName] = useState()
    const [login, setLogin] = useState()
    const [password, setPassword] = useState()

    const submitUser = () => {
        if(name && secondName && login && password)
        {
            const response = fetch('http://localhost:3001/api/users', {
                method: 'POST', 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: login, 
                    password: password,
                    firstName: name, 
                    secondName: secondName
                })
            }) 
            router.push('/auth/sign-in')
        }
    };

    return (
        <>
            <Head>
                <title>Workers</title>
            </Head>
            <Layout>
                <p className="fs-3 text-center">Please Registration</p>

                <from className='create_worker_form'>
                    <label className={"form-label"} htmlFor='Name'>Name</label>
                    <input onChange={e => setName(e.target.value)} id='Name' type={"text"} className={"form-control"} placeholder='Enter a Name'/>

                    <label className={"form-label"} htmlFor='SecondName'>SecondName</label>
                    <input onChange={e => setSecondName(e.target.value)} id='SecondName' type={"text"} className={"form-control"} placeholder='Enter a Surname'/>

                    <label className={"form-label"} htmlFor='Login'>Login</label>
                    <input onChange={e => setLogin(e.target.value)} id='Login' type={"text"} className={"form-control"} placeholder='Enter a Login'/>

                    <label className={"form-label"} htmlFor='Password'>Password</label>
                    <input onChange={e => setPassword(e.target.value)} id='Password' type={"text"} className={"form-control"} placeholder='Enter a Password'/>

                    <button onClick={submitUser} type="submit" className={`${button.mar_0_auto} btn btn-primary`}>Registration</button>
                </from>
            </Layout>  
        </>
    )
}