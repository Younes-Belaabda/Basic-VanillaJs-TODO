let id = 0;
class Task {
    constructor(title,body){
        // this._id = id;
        this._id = id++;
        this._title = title;
        this._body = body;
        this._completed = false;
        // this._date = new Date().toTimeString();
    }
}

let tasks = new Array();
let temp_task = undefined;

const get_task = (task) => {
    temp_task = task;
}