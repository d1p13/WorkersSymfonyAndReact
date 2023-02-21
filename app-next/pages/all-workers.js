import Head from 'next/head'
import Layout from '../components/layout'
import button from '../styles/button.module.css'
import modal from '../styles/modal.module.css'
import Link from 'next/link'
import Modal from '../components/modal'
import { useState } from 'react'
import { useRouter }  from "next/router";


export async function getServerSideProps(){
    const response = await fetch('http://localhost:3001/api/users')
    const data = await response.json();
    return{props:{allWorkers: data[`hydra:member`]}}
}

export default function AllWackers ({allWorkers}){   
    const [modalActive, setModalActive] = useState(false)
    const [name, setName] = useState()
    const [workerId, setWorkerId] = useState()

    // Обновление данных после действия
    const router = useRouter();
    const refreshData = () => {
        router.replace(router.asPath);
    }

    const deleteHandler = worker => {
        setModalActive(true)
        setName(worker.firstName)
        setWorkerId(worker.id)
    }

    const confirmationDeleteHandler = async id => {
        const response = await fetch(`http://localhost:3001/api/users/${id}`, {
            method: 'DELETE'
        })
        setModalActive(false)
        refreshData();

    }
    return (
        <>
            <Head>
                <title>Workers</title>
            </Head>
            <Layout>
                <p className='fs-3 text-center mar_0'>All Workers</p>
                <table className='table mar-top-20'>
                    <thead>
                        <tr>
                                <th><Link href="?sort=desc&field=id">Id ▲</Link></th>
                                <th><Link href="?sort=desc&field=firstName">Name ▲</Link></th>
                                <th><Link href="?sort=desc&field=secondName">SecondName ▲</Link></th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { allWorkers.map((res)=>{
                            return (
                                <tr className='itsme' key={res.id}>
                                    <td>{ res.id }</td>
                                    <td>{ res.firstName }</td>
                                    <td>{ res.secondName }</td>
                                    <td>
                                        <Link href={`/CRUD/show/${res.id}`} className={`${button.padding10px} btn btn-outline-dark`}>Show</Link>
                                        <Link href={`/CRUD/edit/${res.id}`} className={`${button.padding10px} ${button.margin_between_10px} btn btn-outline-dark`}>Edit</Link>
                                        <button type="button" className={`${button.padding10px} ${button.margin_between_10px} btn btn-outline-danger`} onClick={() => deleteHandler(res)}>Delete</button>          
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <Link href="/CRUD/create" className={`${button.font_weight} btn btn-success mar-top-20 center`}>+ Create new</Link>
            </Layout>

            <Modal active={modalActive} setActive={setModalActive}>
                <div className='modal-header'>
                    <h1 className={`${modal.title} modal-title fs-5`}>Удалить</h1>
                    <button type="button" className={`${modal.close}`} onClick={() => setModalActive(false)}>+</button>
                </div>
                <div className='modal-body mt-3'>
                    <p>Вы действительно хотите удалить работника {name}?</p>
                </div>
                <div className='modal-footer'>
                    <button type="button" className={`${button.padding10px} btn btn-outline-secondary`} onClick={() => setModalActive(false)}>Close</button>
                    <button type="button" className={`${button.padding10px} btn btn-danger ms-2`} onClick={() => confirmationDeleteHandler(workerId)}>Delete</button>
                </div>
            </Modal>
        </>
    )
}