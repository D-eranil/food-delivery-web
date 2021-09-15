import { useRef, useState } from 'react';
import './MealItemForm.css';
import Input from '../../UI/Input';

const MealItemForm = (props) =>{
    const[isValidEnteredAmount, setValidEnteredAmount] = useState(true);
    const amountInputRef = useRef();
    const formSubmitHandler = event => {
        event.preventDefault();
        
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5 )
        {
            setValidEnteredAmount(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }
    return(
        <form className="form" onSubmit={formSubmitHandler}>
            <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
            <button> + Add</button>
            {!isValidEnteredAmount && <p>Please enter valid entered items</p>}
        </form>
    )
};

export default MealItemForm;