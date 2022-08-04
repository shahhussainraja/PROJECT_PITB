import GenericServices from "./GenericServices";


class UserService extends GenericServices{

    constructor(){
        super();
    }

    getCourse = (page) => this.get("/paginationData?page="+page);
    updateCourse = (id, data) => this.put("/update/"+id, data);
    deleteCourse = (id)=> this.delete("/delete/"+id);
    postCourse =(data) => this.post("/post",data);
    
 
}

let userService = new UserService();
export default userService;