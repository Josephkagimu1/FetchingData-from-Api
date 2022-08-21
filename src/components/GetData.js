import React, {useState} from 'react';
import FetchingData from './FetchingData';

const GetData = () => {

    const [show, setShow] = useState(false);
    

  return (
    <div>
        <div>
            { show ? ( <button onClick={() =>setShow(false)}>hide</button>  ) : (
            <button onClick={() =>setShow(true)}>show</button> ) }

            {show ? ( <FetchingData />) : null }

        </div>

    </div>
  )
}

export default GetData;