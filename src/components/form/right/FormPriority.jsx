const FormPriority = () => {
  return <div className="form__priority d-flex flex-column gap-5">
    <label className="label"> <span className="color-danger">*</span> Selecciona la prioridad de la tarea</label>
    <div className="choose__priority d-flex gap-7">
      <span className="btn__priority" data-priority="high">Alta</span>
      <span className="btn__priority" data-priority="medium">Media</span>
      <span className="btn__priority" data-priority="low">Baja</span>
    </div>
  </div>
}

export default FormPriority