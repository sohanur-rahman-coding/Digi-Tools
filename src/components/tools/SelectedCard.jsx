import React from 'react'
import SelectedIteams from './SelectedIteams'

export default function SelectedCard({isSelected}) {
  return (
    <div className='space-y-4'>
     {
      isSelected.map(selectedItems =><SelectedIteams selectedIteams={selectedItems}></SelectedIteams>)
     } 
    </div>
  )
}

