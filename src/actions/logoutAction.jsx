import { redirect } from "react-router-dom";
// Helpers
import { deleteItem } from "../helpers";
import { toast } from "react-toastify";

export default function logoutAction() {
    // Delete User 
    deleteItem('userName')
    deleteItem('budget')
    deleteItem('expenses')
    toast.success("Your account has Deleted successfuly")

    // redirect to home
    return redirect('/react-project')
}