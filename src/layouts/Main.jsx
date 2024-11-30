import { Outlet, useLoaderData } from "react-router-dom";

// assets 
import wave from '../assets/wave.svg';

// components
import Nav from "../components/Nav";

// helper function 
import { storageData } from "../helpers"

export default function Main() {

    const userName = useLoaderData()

    return(<>
        <div className="layout">
            <Nav userName={userName}/>
            <main>
                <Outlet />
            </main>
            <img className="wave-svg" src={wave} alt="" />
        </div>
    </>)
}

export function MainLoader() {
    return storageData('userName');
}