import React from 'react'
import SelectedCarts from './SelectedCarts'
import Empty from './empty';
import { ToastContainer, toast } from 'react-toastify';


export default function SelectedTools({ isSelected, setisSelected }) {
  const totalPrice = isSelected.reduce((sum, product) => {
    return sum + product.price;
  }, 0);

  const deleteAll = ()=>{
    toast.success('All iteams delected !')

    setisSelected([])
  }

  return (
    <div className='space-y-4 bg-gray-50 my-12 md:mx-40 p-6 rounded-2xl border border-gray-100'>
      {isSelected.length == 0 ? 
      <Empty></Empty> :
         (<div><h2 className='text-2xl font-bold text-left'>Your Cart</h2>
        {
          isSelected.map((selectedItems, ind) => <SelectedCarts key={ind} setisSelected={setisSelected} selectedIteams={selectedItems} isSelected={isSelected} ></SelectedCarts>)
        }
        <div className='font-semibold text-2xl flex justify-between mx-12'>
          <p>Total : </p>
          <p>${totalPrice}</p>
        </div>
        <div>
          <button onClick={deleteAll} className='btn btn-primary w-full rounded-4xl my-4 text-[18px]'>Proceed to Checkout</button>
        </div>
      </div>)
      }
    </div>
  )
}

