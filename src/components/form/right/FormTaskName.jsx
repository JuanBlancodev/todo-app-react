import useGlobalContext from "../../../hooks/useGlobalContext"

const FormTaskName = () => {
  const { formState, changeTaskData } = useGlobalContext()

  return <div className="form__taskname d-flex flex-column gap-4">
    <label className="label">
      <span className="color-danger">*</span> Tarea
    </label>
    <input 
      type="text" 
      className="input-field" 
      placeholder="Nombre de la tarea"
      value={formState.task.name}
      onChange={(e) => changeTaskData({ name: e.target.value })}
    />
  </div>
}

export default FormTaskName