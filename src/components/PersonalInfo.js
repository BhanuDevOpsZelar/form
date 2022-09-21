import React from 'react'

function PersonalInfo({formData, setFormData}) {
  return (
    <div className='personal-info-container'>
      <input type="text" placeholder='First Name' value={formData.firstName} 
      onChange={(event)=> setFormData ({...setFormData, firstName: event.target.value})}/>
      <input type="text" placeholder='Last Name' value={formData.lastName} 
      onChange={(event)=> setFormData ({...setFormData, lastName: event.target.value})}/>
      <input type="text" placeholder='User Name' value={formData.username} 
      onChange={(event)=> setFormData ({...setFormData, username: event.target.value})} />
   </div>
  )
}

export default PersonalInfo;