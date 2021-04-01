import {Connection,createConnection} from 'mysql';

class Takou
{
	static connection:Connection | null = null;

	constructor(host:string,user:string,password:string,database:string):Promise<boolean>
	{
		if( Takou.connection !== null )
		{
			Takou.connection = createConnection({ host, user, password, database });
		}
	}

	conect():Promise<boolean>
	{
		return new Promise((resolve,reject)=>{
			Takou.connection.connect((error)=>{
				if( error )
				{
					reject(error);
				}
				else
				{
					resolve(true);
				}
			});
		});
	}
}

export class TakouTable
{
	connection?:Connection;
	table_name:string;
	constructor(table_name:string)
	{
		this.table_name = table_name;
	}

	search():Promise<TakouTable[]>
	{
		return Promise.resolve([]);
	}

	getAll():Promise<TakouTable[]>
	{
		return Promise.resolve([]);
	}
}


let t = new Takou();
t.conect().then(()=>{

});
