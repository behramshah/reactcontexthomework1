import {Outlet, Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <Link to='/'>Home</Link>
            <Link to='add'>Add</Link>
            <Link to='completed'>Complated</Link>
            <Outlet/>
        </>
    )
}

export default Navbar;