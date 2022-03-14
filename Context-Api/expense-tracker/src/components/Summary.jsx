import React from 'react'

const Summary = () => {
  return (
    <div>

        <div className='row'>
          <div className='col-sm-6 '>
              <div className='card border-success w-50 text-center ms-auto me-auto'>
                <div className='card-body'>
                  <h5 className='card-title'> Income</h5>
                  <h4>$4000</h4>
                </div>
              </div>
          </div>


          <div className='col-sm-6'>
              <div className='card border-danger w-50 text-center ms-auto me-auto'>
                <div className='card-body'>
                  <h5 className='card-title'>Expense</h5>
                  <h4>$4000</h4>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Summary