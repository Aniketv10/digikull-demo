import { useState } from 'react';
import Input from '../Input/Input';
import Text from '../Text/Text';

const InputText  = () => {
    //It is react hook , to create the state in react functional component
    const [textval, setTextval] = useState(''); //Initial value pass to the usestate 
    
        const inputChangeHandler =(event ) =>{
        const textvalue = event.target.value;
           setTextval(textvalue);
};
    //As per react arct. react's component should have and return single root elemeent.
    //That is why , it is wrapped with ,<div>...</div>
return(
    <div>
       <Input
            value={textval}
            onInputChange={inputChangeHandler}/>
        <Text value={textval}/>
    </div>
);
}
export default InputText;