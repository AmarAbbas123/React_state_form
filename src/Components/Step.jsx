import React, { useState } from 'react'

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

const Step = () => {
    const [step,setStep] = useState(1)
    const [isOpen,setIsOpen] = useState(true)

  return (
    <> 
    <button
    onClick={()=>{
        setIsOpen(!isOpen)
    }}
    className='close'>&times;</button>
    { isOpen &&
        <div className='steps'>
            <div className='numbers'>
                <div className={`${step >= 1 ? "active" : ""}`}>1</div>
                <div className={`${step >= 2 ? "active" : ""}`}>2</div>
                <div className={`${step >= 3 ? "active" : ""}`}>3</div>
            </div>
            <p className='message'>Step {step}: {messages[step-1]}</p>
            <div className='buttons'>
                <button 
                onClick={()=> {
                  if (step > 1)  setStep(step-1)
                }}
                style={{
                    backgroundColor : '#7950f2',
                    color : "#ffffff"
                }}>Previous</button>
                <button
                onClick={()=> {
                    if (step < 3) setStep(step+1)
                }
                }
                style={{
                    backgroundColor : '#7950f2',
                    color : "#ffffff"
                }}>Next</button>
                
            </div>
        </div>
}
    </>
  )
}

export default Step