import GenericServices from "./GenericServices";


class AdminService extends GenericServices{

    constructor(){
        super();
    }

    getUsers = () => this.get("/getAllUser");
    deleteUser = (id)=> this.delete("/deleteUser/"+id);

}

let adminService = new AdminService();
export default adminService;