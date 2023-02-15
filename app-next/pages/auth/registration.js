import Head from 'next/head'
import Layout from '../../components/layout'
import { useState } from 'react'


export default function Registration() {
    const [name, setName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const submitUser = async () => {
        const response = await fetch('http://localhost:3001/api/users', {
            method: 'POST', 
            body: JSON.stringify({ 
                firstName: name, 
                secondName: secondName, 
                username: login, 
                password: password 
            }),
        });
        const data = await response.json()
        console.log(data)
    }

    return (
        <>
            <Head>
                <title>Workers</title>
            </Head>
            <Layout>
                <p className="fs-3 text-center">Please Registration</p>

                <from>
                    <label className={"form-label"} htmlFor='Name'>Name</label>
                    <input value={name} onChange={e => setName(e.target.value)} id='Name' type={"text"} className={"form-control"} placeholder='Enter a Name'/>

                    <label className={"form-label"} htmlFor='SecondName'>SecondName</label>
                    <input value={secondName} onChange={e => setSecondName(e.target.value)} id='SecondName' type={"text"} className={"form-control"} placeholder='Enter a Surname'/>

                    <label className={"form-label"} htmlFor='Login'>Login</label>
                    <input value={login} onChange={e => setLogin(e.target.value)} id='Login' type={"text"} className={"form-control"} placeholder='Enter a Login'/>

                    <label className={"form-label"} htmlFor='Password'>Password</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} id='Password' type={"text"} className={"form-control"} placeholder='Enter a Password'/>

                    <button onClick={submitUser} type="submit" className="btn btn-primary mar-top-20">Registration</button>
                </from>
            </Layout>
        </>
    )
}