import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import button from '../styles/button.module.css'


export async function getServerSideProps(){
    const response = await fetch('http://localhost:3001/api/users')
    const data = await response.json();

    return{
        props:{
            allWackers: data[`hydra:member`]
        }
    }
}

export default function AllWackers ({allWackers}){   
    return (
        <>
            <Head>
                <title>Workers</title>
            </Head>
            <Layout>
            <p className='fs-3 text-center'>All Workers</p>
            <table className='table'>
                <thead>
                    <tr>
                            <th><a href="?sort=desc&field=id">Id ▲</a></th>

                            <th><a href="?sort=desc&field=firstName">Name ▲</a></th>

                            <th><a href="?sort=desc&field=secondName">SecondName ▲</a></th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    { !!allWackers.length && allWackers.map(res =>{
                        return (
                            <tr className='itsme' key={res.id}>
                                <td>{ res.id }</td>
                                <td>{ res.firstName }</td>
                                <td>{ res.secondName }</td>
                                <td>
                                    <a href="/" className={`${button.show_edit} btn btn-outline-dark`}>show</a>
                                    <a href="/" className={`${button.show_edit} btn btn-outline-dark`}>edit</a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <a href="{{ path('app_user_new') }}" className={`${button.show_edit} btn btn-success show_edit mar-top-20`}>+ Create new</a>
            </Layout>
        </>
    )
}