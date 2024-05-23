import React from 'react'

function BrandsBar() {
    return (
        <div className='h-full w-full bg-yellow1'>
            <div>
                <ul className='flex justify-evenly '>
                    <li><img src="/H&m.png" alt="h&m"/></li>
                    <li><img src="/obey.png" alt="obey" className='p-2'/></li>
                    <li><img src="/shopify.png" alt="shopify" className='p-2'/></li>
                    <li><img src="/levis.png" alt="levis" /></li>
                    <li><img src="/amazon.png" alt="amazon" className='p-2'/></li>
                </ul>
            </div>
        </div>
    )
}

export default BrandsBar
