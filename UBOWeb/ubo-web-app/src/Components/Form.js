import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Form(props) {

  const [product,setProduct]=useState(props.initialData)

  

  //const [counter, setCounter] = useState(0)

  const formData=(event)=>{
    const{name,value}=event.target;
    
    //setCounter(counter+1)

    let myProduct=product
    debugger
    switch (name) {

      case 'Utility_Name':
        myProduct.Utility_Name = value
        break;
      case 'Month':
        myProduct.Month = value
        break;
      case 'Paid':
        myProduct.Paid = value
        break;
      case 'Paid_Date':
        myProduct.Paid_Date = value
        break;
    
      default:
        break;
    }
    setProduct( p => ({
      ...p,
      ...myProduct
    }))
  }
    
 

  return (
    <>
    <form>
          <div className='body_of_form'>
              <div className='one'>/
                  <label>Utility_Name:-</label>
                  <input type='text' name='Utility_Name'
                  value={product.Utility_Name}
                  onChange={formData} placeholder='Utility-Name'></input>
              </div>
              <div className='one'>
                  <label>Month</label>
                  <input type="text" name='Month'
                  value={product.Month} 
                  onChange={formData} placeholder='Month'></input>
              </div>
              <div className='one'>
                  <label>Paid:-</label>
                  <input type='text' name='Paid' 
                  value={product.Paid}
                  onChange={formData} placeholder='Enter-Amount'></input>
              </div>
              <div className='one'>
                  <label>Paid_Date</label>
                  <input type='date' name='Paid_Date'
                  value={product.Paid_Date} 
                  onChange={formData}
                   placeholder='Enter Paid Date'></input>
              </div>
            
              <div>
                <button className='btn btn-secondary m-2'
                 onClick={(e)=>{e.preventDefault();
                 props.close();}}>Cancel</button>
                <button className='btn btn-primary m-2' 
                onClick={(e)=>{e.preventDefault();
                  props.postData(product)
                }}>Save</button>
              </div>

          </div>
          </form>
    </>
  )
}
