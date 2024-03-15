const CardHeader = () => {
  return <thead className="table__head">
    <tr className="table__row d-grid grid-column-4 text-center">
      <th className="table__header">Miembro</th>
      <th className="table__header">Tarea</th>
      <th className="table__header">Prioridad</th>
      <th className="table__header">Acciones</th>
    </tr>
  </thead>
}

export default CardHeader