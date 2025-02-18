


function CheckTagComponent({ tag, handleImput }) {


    return (<li key={tag}>
        <div className="form-check" >
            <input
                className="form-check-input"
                type="checkbox"
                value={tag}
                id={`flexCheckDefault-${tag}`}
                name="tags"
                onChange={(ev) => handleImput(ev)}
                checked={null}
            />
            <label className="form-check-label" htmlFor={`flexCheckDefault-${tag}`}>
                {tag}
            </label>

        </div>

    </li>
    )

}

export default CheckTagComponent;