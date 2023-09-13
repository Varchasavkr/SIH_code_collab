import Navbar from "./Navbar";
const Admin = () => {
  const handleFilter = (e) => {};
  return (
    <div className="w-screen h-screen bg-[#EDE3FB] z-[-1]">
      <Navbar isLoggedIn />
      <div
        className="flex justify-around rounded-full text-white absolute top-[22%] left-[25%] w-[50%]
        bg-gradient-to-r from-purple-500 via-purple-500 to-purple-500 
        p-2"
      >
        <button className="h-12" onClick={handleFilter}>
          All
        </button>
        <button className="h-12" onClick={handleFilter}>
          Approved
        </button>
        <button className="h-12" onClick={handleFilter}>
          Pending
        </button>
        <button className="h-12" onClick={handleFilter}>
          Rejected
        </button>
      </div>
    </div>
  );
};
export default Admin;
