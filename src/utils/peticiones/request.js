import axios from 'axios'



export const PostMethod = ( data, uri, headers ) =>{
    const url = `${process.env.REACT_APP_ENDPOINT_URL}/${uri}`
    const params = {
        method:'POST',
        data:data,
        headers:headers
    };

    return  axios(url, params)
            .then((response) =>{
                if(response.status !== 200){
                    return {
                        ok: false,
                        message:'Algo salio mal',
                        response: response
                    }
                }else{
                    return {
                        ok:true,
                        message:'succes',
                        response:response
                    }
                }
            })
            .catch((error) =>{
                console.log(error)
                return{
                    ok:false,
                    message:'Algo salio',
                    response:error
                }
            })
}



export const DeleteMethod = ( uri, headers ) =>{
    const url = `${process.env.REACT_APP_ENDPOINT_URL}/${uri}`
    const params = {
        method:'DELETE',
        headers:headers
    }

    return axios(url, params)
    .then((response) =>{
        if(response.status === 200){
            return{
                ok:true,
                message:'success',
                response:response
            }
        }else{
            return{
                ok:false,
                message:'Algo salio mal',
                response:response
            }
        }
    })
    .catch((error) =>{
        return{
            ok:false,
            message:'Wrong',
            response:error.response
        }
    })
}



export const GetMethod = ( uri, headers ) =>{
    
    const url = `${process.env.REACT_APP_ENDPOINT_URL}/${uri}`
    const params = {
        method:'GET',
        headers:headers
    }

    return axios(url, params)
    .then((response) => {
        if(response.status === 200){
            return{
                ok:true,
                message:'Success',
                response:response
            }
        }else{
            return{
                ok:false,
                message:'Wrong',
                response:response
            }
        }
    })
    .catch((error) => {
        return{
            ok:false,
            message:'Wrong',
            response:error.response
        }
    })
    

}


export const PutMethod = ( data, uri, headers ) =>{
    const url = `${process.env.REACT_APP_ENDPOINT_URL}/${uri}`
    const params = {
        method:'PUT',
        data:data,
        headers:headers
    };
    return  axios(url, params)
            .then((response) =>{
                if(response.status !== 200){
                    return {
                        ok: false,
                        message:'Algo salio mal',
                        response: response
                    }
                }else{
                    return {
                        ok:true,
                        message:'succes',
                        response:response
                    }
                }
            })
            .catch((error) =>{
                console.log(error.response)
                return{
                    ok:false,
                    message:'Algo salio',
                    response:error
                }
            })


}


//request example
// React.useEffect(()=>{
//     const getPosts = async ()=>{
//         const posts = await GetMethod('todos');
//         console.log(posts);
//     }
//     getPosts();
// },[])
