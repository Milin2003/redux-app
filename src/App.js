import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddData, deleteData } from './actions/action';

function App() {
  const [inputValue, setinputValue] = useState('');
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();

  const HandleChange = (e) => {
    setinputValue(e.target.value);
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      dispatch(AddData(inputValue));
      setinputValue('');
    }
  }
  const HandleDelete = (index) => {
    dispatch(deleteData(index));
  }

  return (
    <div className='flex justify-center py-10'>
      <form>
        <input className='px-4 py-2 mr-4 border border-2 border-black'
          type="text"
          value={inputValue}
          onChange={HandleChange}
          placeholder='Enter Data'
        />
        <button className='px-4 py-2 bg-black text-white font-bold mr-4' type="submit" onClick={HandleSubmit}>Add</button>

      </form>

      <ul className='absolute top-32 my-2'>
        {data.map((item, index) => (
          <li  className='my-2 bg-red-300 font-semibold px-6 py-4 relative'>
            {index+1}.  {item}
            <button
              className='px-2 py-1 absolute -right-20 top-[20%]'
              onClick={() => HandleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App;
