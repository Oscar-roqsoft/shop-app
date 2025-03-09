
export const signUp = async(payload)=>{
    const data = await fetch(`${baseURL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    }).then(res => res.json());
    return data
}

export const signIn = async(payload)=>{
    const data = await fetch(`${baseURL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    }).then(res => res.json());
    return data
}

export const sendCode = async(payload)=>{
    const data = await fetch(`${baseURL}/sendCode`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    }).then(res => res.json());
    return data
}

export const verifyCode = async(payload)=>{
    const data = await fetch(`${baseURL}/verifyCode`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    }).then(res => res.json());
    return data
}

export const recoverPassword = async(payload)=>{
    const data = await fetch(`${baseURL}/recoverPassword`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    }).then(res => res.json());
    return data
}