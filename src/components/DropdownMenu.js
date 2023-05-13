export const DropdownMenu = ({ onClickHandler }) => {
  return (
    <div className="flex flex-col  absolute top-14 right-8  bg-white rounded-md border border-green-200 border-opacity-60 z-50">
      <div className="rounded-t-md px-4 py-1  border-b border-green-200  text-black ">
        <span>Signed in as </span>
        <span className="font-bold">User</span>
      </div>
      <div className="px-4 py-1  text-black  hover:bg-green-800 hover:text-white cursor-pointer" onClick={() => onClickHandler(5)}>
        <div>Mypage</div>
      </div>
      <div className="px-4 py-1 text-black  hover:bg-green-800 hover:text-white cursor-pointer" onClick={() => onClickHandler(6)}>
        <div>Chats</div>
      </div>
      <div
        className="  rounded-b-md px-4 py-1 text-black border-t border-green-200  hover:bg-green-800 hover:text-white cursor-pointer"
        onClick={() => onClickHandler(0)}
      >
        <div>Logout</div>
      </div>
    </div>
  );
};
