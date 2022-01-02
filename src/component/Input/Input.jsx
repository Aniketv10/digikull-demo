const Input = (props) => {
    return (
        <input type ="text" 
        value = {props.value}
        onChange={props.onInputChange}/>
    );
};

export default Input;