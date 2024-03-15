import CardHeader from "./CardHeader"
import TaskList from './TaskList'
import '../../../../css/container/todo/Card.css'

const Card = () => {
  return <div className="card__tasks">
    <div className="table width-full">
      <table className="width-full">
        <CardHeader />
        <TaskList />
      </table>
    </div>
  </div>
}

export default Card