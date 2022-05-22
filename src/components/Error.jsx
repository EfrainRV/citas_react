const Error = ( {mensaje} ) => {
  return (

    <div className="bg-red-600 text-white text-center uppercase p-2 font-bold mb-3 rounded">
        <p>{mensaje}</p>
    </div> 

  )
}

export default Error