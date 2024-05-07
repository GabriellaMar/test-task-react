import { CreateForm } from "../components/MainPage/CreateForm/CreateForm"
import { Tasks } from "../components/MainPage/Tasks/Tasks"

const MainPage = ()=>{
    return (
        <>
        <div>Головна сторінка</div>
        < CreateForm />
        <Tasks />
        </>
    )
}

export default MainPage