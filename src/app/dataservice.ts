import { Injectable }    from '@angular/core';

@Injectable()
export class DataService{
private data:String[]=[];
addData(msg:String)
{
    this.data.push(msg);
}
getData()
{
    return this.data;
}
deleteMsg(msg:String) {
    const index: number = this.data.indexOf(msg);
    if (index !== -1) {
        this.data.splice(index,1);
    }        
}
}