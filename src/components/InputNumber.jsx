const InputNumber = (props) => {

    const { name, label, placeholder, handler } = props

    return (
    <div className="form-group">
        <label htmlFor={`id-${name}`} name={name} className="mb-2">{label}</label>
        <input type="number" className="form-control mb-2" placeholder={placeholder} name={name} id={`id-${name}`} onChange={handler} />
    </div>
    );
}

export default InputNumber