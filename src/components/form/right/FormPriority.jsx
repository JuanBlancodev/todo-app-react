import FormButtonPriority from "./FormButtonPriority"

const FormPriority = () => {
  return <div className="form__priority d-flex flex-column gap-5">
    <label className="label"> <span className="color-danger">*</span> Selecciona la prioridad de la tarea</label>
    <div className="choose__priority d-flex gap-7">
      <FormButtonPriority pClass="high" text="Alta" />
      <FormButtonPriority pClass="medium" text="Media" />
      <FormButtonPriority pClass="low" text="Baja" />
    </div>
  </div>
}

export default FormPriority