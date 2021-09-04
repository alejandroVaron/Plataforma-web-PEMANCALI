import {useState, useEffect} from 'react'

export const useFetch = (url) => {
    const [ result, setResult ] = useState({ data:null,loading: true, error: null})
    
    useEffect(async () => {

        try {
        setResult({loading:true, error:null, data:null})    
        const resp = await fetch(url)
        const data = await resp.json()
        setResult({loading:false, error:null, data})

        }catch(e){
            setResult({loading:false, error:e, data:null})
        }
        
    }, [url])

    return result
    
}