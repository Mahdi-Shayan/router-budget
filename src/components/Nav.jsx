import { Form, NavLink } from "react-router-dom";

//library
import { BsTrash3Fill } from "react-icons/bs";

// assets
import logomark from '../assets/logomark.svg';



export default function Nav({userName}) {

    return(
        <nav className="nav-link">
            <NavLink className='home-link' to={'/react-project'} aria-label="go to home">
                <img src={logomark} alt="" height={30}/>
                <span>HomeBudget</span>
            </NavLink>
            {
                userName && (
                    <Form
                        method="post"
                        action="logout"
                        onSubmit={(e) => {
                            if(!window.confirm('Delete user and all data?')) {
                                e.preventDefault();
                            }
                        }}
                    >
                            
                        <button type="submit" className="delete-user-btn"> 
                            <span>Delete User</span>
                                <BsTrash3Fill />
                        </button>    
                    </Form>
                )
            }
        </nav>
    )
}