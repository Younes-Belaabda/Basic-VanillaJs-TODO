/* Static Variables For Incrementing Auto Task Id */
let id = 0;
let temp_task = undefined;

export default class Task {
    constructor(title,body){
        this._id = id++;
        this._title = title;
        this._body = body;
        this._completed = false;
    }
}

const get_task = (task) => {
    temp_task = task;
}

export {get_task,temp_task}
