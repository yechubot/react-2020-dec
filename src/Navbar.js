const Navbar = () => {//sfc -- stateless function 
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
            <a href="/">Home</a>
            <a href="/create" style ={//dynamic value는 {}로 감싸고,
               {// 이 안의 또 다른 {}는 object를 위한 것 
                color: "white",
                backgroundColor: "#f1356d",
                borderRadius: '8px'
                //inline - styling 은 이렇게 하면 된다. 
               }
            }>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;