import {useState} from "react";

const Search = ({fc = Function.prototype, placeholder}) => {
    const [value, setValue] = useState('')

    const handleKey = (e) => {
        if(e.key === 'Enter'){
            handleSubmit()
        }
    }
    const handleSubmit = () => {
        fc(value)
    }
    return (
        <div className="row">
            <div className="input-field col s12">
                <input type="search"
                       id="search-field"
                       placeholder={placeholder}
                       value={value}
                       onKeyDown={handleKey}
                       onChange={(e) => setValue(e.target.value)}
                />
                <button className="btn"
                        style={{position: "absolute", top: 0, right: 0}}
                        onClick={handleSubmit}>
                    Search
                </button>
            </div>
        </div>
    )
}

export default Search