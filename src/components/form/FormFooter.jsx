import useGlobalContext from "../../hooks/useGlobalContext"

const FormFooter = () => {
  const { formState, setFormState } = useGlobalContext()

  return <footer className="footer__form d-flex flex-row-reverse align-center justify-end gap-3">
    <button className="btn btn-primary">ADD TASK</button>
    <button 
      id="btn__cancel" 
      className="btn btn-secondary"
      onClick={() => setFormState({...formState, isVisible: false})}>
        Cancelar
    </button>
  </footer>
}

export default FormFooter