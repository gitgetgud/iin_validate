import { useState } from "react"

const is_valid_iin = (iin) => {
    iin=iin.toString()
    if(iin.length===12){
        if(!isNaN(iin)){
            if(iin.includes('.') || iin.includes('e')){
                return false
            }else{
                return true
            }
        }
    }
    return false
}

const validate = (iin,setData) => {
    if (is_valid_iin(iin)) {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://api.allorigins.win/get?url=https://egov.kz/services/P20.45/rest/gbdfl/persons/${iin}?infotype=short`, requestOptions)
            .then(response => response.json())
            .then(result => setData(result.contents))
            .catch(error => console.log('error', error));
    }else{
        setData({
            status:'error',
            text: 'Ошибка! Проверьте иин'
        })
    }
}



export const IinValidator = (props) => {
    const [iin, setIin] = useState('')
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                validate(iin,props.setData)
            }}>
                <input type='text' placeholder='iin' onChange={(e) => setIin(e.target.value)} />
                <button type='submit'>Проверить</button>
            </form>
        </div>
    )
}