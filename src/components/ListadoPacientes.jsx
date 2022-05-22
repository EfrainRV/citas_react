import Paciente from "./Paciente"

const ListadoPacientes = ( {pacientes, setPaciente, eliminarPaciente} ) => {

  return (

    <div className="md:w-1/2 lg:w-3/5">

      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Administra tus {''}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

      {
        pacientes.map( paciente => (
            <Paciente 
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
        ))
      }

      

    </div>
  )

}

export default ListadoPacientes