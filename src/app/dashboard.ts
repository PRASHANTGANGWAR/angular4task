export class Dashboard {


	id: number;
	taskname: string;
	description: string;
	date : string;

	constructor(id: number, taskname: string ,description:string , date:string ) {
		this.id = id;
		this.taskname = taskname;
		this.description = description;
		this.date = date;
	}

}
