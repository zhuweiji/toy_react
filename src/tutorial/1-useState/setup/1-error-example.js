import React from 'react';

const ErrorExample = () => {
    let titles = [1,2,3,4,5]
    let title = titles[0]
    let randomnumber = 0;
    return(
        <>
            <h2>{title}</h2>
            <button type='button' onClick={e =>{
                title = titles[1]
                randomnumber = randomnumber++;
            }

            }>Change</button>
        </>
    )

}

export default ErrorExample;
