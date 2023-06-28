import { MoonLoader } from "react-spinners";

// npm install react-spinners --save

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <MoonLoader color="green" size={30} />
    </div>
  );
}
