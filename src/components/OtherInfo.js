import React from 'react'

function OtherInfo({formData, setFormData}) {
  return (
    <div className='other-info-container'>
      <input type="text" placeholder='Nationality...' value={formData.nationality} 
      onChange={(event)=> setFormData ({...setFormData, nationality: event.target.value})} />
      <input type="text" placeholder='Other...' value={formData.other} 
      onChange={(event)=> setFormData ({...setFormData, other: event.target.value})}/>
      
    </div>
  )
}

export default OtherInfo