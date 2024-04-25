const setUserToken =(token)=>{
    return localStorage.setItem('token', token) // we use localstarage to save the token
}

const getUserToken =()=>{
    return localStorage.getItem('token')
}

const clearUserToken =()=>{
    return localStorage.setItem('token', '')
}

export {
    setUserToken,
    getUserToken,
    clearUserToken
}