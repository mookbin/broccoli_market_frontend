import { Broccoli } from "../assets/icons/Broccoli";

export const LoadingSpinner = () => {
  return (
    <div className="absolute inset-0 bg-[rgba(99,99,99,0.4)] flex justify-center items-center z-50 ">
      <div className="flex justify-center items-center animate-spin h-52 w-52 bg-green-500 rounded-full ">
        <Broccoli width="100px" height="100px" />
      </div>
    </div>
  );
};
