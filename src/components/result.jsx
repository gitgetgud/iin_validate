export const Result = (props) => {
    try {
        if (props.data === '') {
            return (<span />)
        }
        const data = JSON.parse(props.data)
        if (data.iin) {
            return (
                <div className="result">
                    <h3>Иин валидный! Данные по иину {data.iin}:</h3>
                    <ul>
                        <li>Имя: {data.name.firstName}</li>
                        <li>Фамилия: {data.name.lastName}</li>
                        <li>Пол: {(data.gender === 'MALE') ? 'Мужской' : 'Женский'}</li>
                        <li>Возраст: {data.currentAge}</li>
                    </ul>
                    <pre>{JSON.stringify(data, undefined, 4)}</pre>
                </div>
            )
        } else {
            throw (Error())
        }
    } catch (err) {
        return (
            <div className="error">
                <span className="error">Ошибка! Проверьте правильно ли введён иин</span>
            </div>
        )
    }
}