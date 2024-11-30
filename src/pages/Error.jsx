import { NavLink, useNavigate, useRouteError } from "react-router-dom"

// Library
import { RiArrowGoBackLine } from "react-icons/ri";
import { BiSolidHome } from "react-icons/bi";


export default function Error() {
    const error = useRouteError();
    const navigate = useNavigate();

    return(<>
        <div className="error">
            <h1>Uh oh! We've got a problem.</h1>
            <p style={{marginBottom: '30px', fontSize: '30px'}}>
                {error?.message || error?.statusText || 'Error 404'}
            </p>
            {
                error && (
                    <div className="btn-container">
                        <button className="go-back" onClick={
                            () => navigate(-1)
                        }>
                            <RiArrowGoBackLine />
                            <span>Go Back</span>
                        </button>
                        <NavLink className='back-home-link' to={'/'}>
                            <BiSolidHome />
                            <span>Go Home</span>
                        </NavLink>
                    </div>
                )
            }
        </div>
    </>)
}