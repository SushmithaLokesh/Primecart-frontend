import {useState} from "react"
import {useNavigate} from "react-router-dom"

function Search()
{

    const [keyword, setKeyword] = useState("")
    const navigate = useNavigate()

    const serachHandler = () =>{
        navigate("/search?keyword="+keyword)
    }

    return(
    <div className="input-group">
        <input
            type="text"
            id="search_field"
            onChange={(event) => setKeyword(event.target.value)}
            className="form-control"
            onBlur={serachHandler}
            placeholder="Enter Product Name ..."
        />
        <div className="input-group-append">
            <button onClick={serachHandler} id="search_btn" className="btn">
                <i className="fa fa-search" aria-hidden="true"></i>
            </button>
        </div>
    </div>)
}

export default Search