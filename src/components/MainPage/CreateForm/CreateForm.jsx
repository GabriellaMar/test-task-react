import { useState } from 'react';
import styles from './CreateForm.module.css'

export const CreateForm = ()=>{
    const [task, setTask] = useState('');


const handleChange = (e)=>{
    console.log(e.target.value)
    setTask(e.target.value)

}

const handleSubmit =(e)=>{
    e.preventDefault();
    console.log("SUBMIT", task)
    setTask('')
}

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="task" className={styles.formLabel}>
                Create Task
                <input className={styles.formInput}
                type="text"
                name="task"
                placeholder="Enter your task"
                value={task}
                onChange={handleChange}
                />
            </label>
            <div className={styles.formBtnWrapper}>
                <button type="button" className={styles.formBtn}>Clear</button>
                <button type="submit"className={styles.formBtn}> Create</button>
            </div>
        </form>
    )

}