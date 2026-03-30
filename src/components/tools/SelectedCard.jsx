import React from 'react'
import SelectedIteams from './SelectedIteams'
import Empty from './empty';

export default function SelectedCard({ isSelected, setisSelected }) {
  const totalPrice = isSelected.reduce((sum, product) => {
    return sum + product.price;
  }, 0);

  return (
    <div className='space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100'>
      {isSelected.length == 0 ? 
      <Empty></Empty> :
         (<div><h2 className='text-2xl font-bold text-left'>Your Cart</h2>
        {
          isSelected.map((selectedItems, ind) => <SelectedIteams key={ind} setisSelected={setisSelected} selectedIteams={selectedItems} isSelected={isSelected} ></SelectedIteams>)
        }
        <div className='font-semibold text-[18px] flex justify-between mx-4'>
          <p>Total : </p>
          <p>${totalPrice}</p>
        </div>
      </div>)
      }
    </div>
  )
}

