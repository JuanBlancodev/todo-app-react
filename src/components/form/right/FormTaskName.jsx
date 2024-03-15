const FormTaskName = () => {
  return <div className="form__taskname d-flex flex-column gap-4">
    <label className="label">
      <span className="color-danger">*</span> Tarea
    </label>
    <input 
      type="text" 
      className="input-field" 
      placeholder="Nombre de la tarea" 
    />
  </div>
}

export default FormTaskName