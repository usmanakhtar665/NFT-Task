import { useState} from "react";

const TokenForm = () => {
    const [address, setAddress] = useState("");
    return ( <>
  
      <div className=" text-black flex flex-col items-center justify-center p-10 bg-gray-100 min-h-[80vh]">
        <h2 className="text-2xl font-bold mb-4">Get Your Token</h2>
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border p-2 rounded w-80 mb-4"
        />
        <button className="bg-blue-500 text-white px-6 py-2 rounded">Get Token</button>
      </div>

    
    
    
    </> );
}
 
export default TokenForm;