import GenericServices from "./GenericServices";


class UserService extends GenericServices{

    constructor(){
        super();
    }

    // getDocs = (page) => this.get("/paginationData?page="+page);
    getDocs = () => this.get("/docs");
    updateDocs = (id, data) => this.put("/update/"+id, data);
    deleteDocs = (id)=> this.delete("/delete/"+id);
    postDocs =(data) => this.post("/post",data);
    


    //this for MetaData tables dynamically add routes in it
    getDynamic =(route)=>this.get("/"+route); 

}

let userService = new UserService();
export default userService;