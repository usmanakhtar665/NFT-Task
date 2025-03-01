import TokenForm from "./TokenForm";

const Navbar = () => {
    return ( <>
    <nav className="w-screen text-white bg-gray-900 text-white p-4 flex justify-between items-center">
        <div className="text-lg font-bold"><a href="/">LOGO</a></div>
        <div className="space-x-8">
          <a  className="hover:text-yellow-400">Home</a>
          <a href="/TokenForm" className="hover:text-yellow-400">Get Token</a>
          <button className="bg-white text-black mr-4 px-4 py-2 rounded">Sign Up</button>
        </div>
      </nav>
    
    </> );
}
 
export default Navbar;