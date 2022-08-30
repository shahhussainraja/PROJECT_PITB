import GenericServices from "./GenericServices";


class UserService extends GenericServices{

    constructor(){
        super();
    }

    // getDocs = (page) => this.get("/paginationData?page="+page);
    getFormDocs=()=>this.get("/formDocs");
    getSearchDocs=(data)=>this.get("/searchDocs?search="+   data);

    //for project Table calls
    getDocs = (page,perPage) => this.get("/docs?page="+page+"&perPage="+perPage);
    putDocs = (id, data) => this.put("/docs/"+id, data);
    deleteDocs = (id)=> this.delete("/docs/"+id);
    postDocs =(data) => this.post("/docs",data);
    


    //this for MetaData tables dynamically add routes in it
    getDynamic =(route)=>this.get("/"+route); 
    postDynamic =(route,data)=>this.post("/"+route,data); 
    deleteDynamic =(route,id)=>this.delete("/"+route+"/"+id); 
    putDynamic =(route,id,data)=>this.put("/"+route+"/"+id,data); 
 
}

let userService = new UserService();
export default userService;