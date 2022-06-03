import React, { useEffect } from 'react'
import { AiFillCloseSquare } from 'react-icons/ai';


const ModalClueUser = ({state, setState, clue, handleUseTips}) => {
    
  useEffect ( () =>{
    if (state){
      handleUseTips();
    }
  }, [state])
    
  return (
    <div>
        <>
      
      {state ? (
        <>
          <div
            className="card__animate justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  
                  <h3 className="text-4xl text-yellow font-hind font-semibold">
                    Clue
                  </h3>
                  <button
                    className="text-yellow text-2xl"
                    type="button"
                    onClick={() => setState(false)}
                  > <a><AiFillCloseSquare/></a>
                  </button>
                  
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-white font-hind text-lg leading-relaxed">
                  {clue}
                  </p>
                </div>
               
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
    </div>
  )
}

export default ModalClueUser