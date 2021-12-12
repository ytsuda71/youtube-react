import React, { useContext, useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import { fetchPopularData } from '../apis/index'
import { Store } from '../store/index'

const Top = () => {
    const { globalState, setGlobalState} = useContext(Store)

    useEffect(() => {
        fetchPopularData().then((res) => {
            console.log('data', res)
            setGlobalState({type: 'SET_POPULAR', payload: {popular: res.data.items}})
        })
    }, [])
    return (
        <Layout>
            top page
        </Layout>
    )
}

export default Top
