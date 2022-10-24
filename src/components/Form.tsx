import React from 'react';
import { Data } from '../utils/types';

type Props = {
  fields: string | undefined
  handleChange:(data: Data) => void
}

type Event = {
  target: {
    name: string
    value: string
  }
}

const InputForm = (props: Props) => {
  function handleInputChange(event: Event) {
    const name = event.target.name;
    const value = event.target.value;
    const data = {name, value};
    
    props.handleChange(data);
  }

  return (
    <div className="flex flex-col w-full gap-y-5">
      <div className="border-slate-300 border rounded-md h-16 flex items-center p-4 text-xl font-light text-black">
        <input
          name={props.fields}
          type={props.fields === 'Password'? 'password' : 'text'}
          placeholder={props.fields} 
          className="focus:outline-none w-full"
          onChange={handleInputChange}
          />
      </div>
    </div>
  )
}

export default InputForm;