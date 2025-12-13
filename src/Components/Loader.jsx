import React from 'react'

const Loader = () => {
  return (


 <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/20 backdrop-blur-sm">
      <span className="loading loading-spinner text-error w-12 h-12"></span>
    </div>
  )
}

export default Loader
