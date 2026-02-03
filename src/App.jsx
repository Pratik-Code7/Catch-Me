import { useState } from "react";
import i1 from "./assets/img1.png";
import i2 from "./assets/img2.png";
const App = () => {
  const boxwidth = 1100;
  const boxheight = 700;
  const btnwidth = 56;
  const btnheight = 40;
  const [moved, setMoved] = useState(false);
  const [position, setPosition] = useState(null);
  const [yess, setYess] = useState(false);
  return (
    <div className="flex justify-center  items-center h-screen ">
      <div className="  flex flex-col rounded-2xl  justify-center  w-96">
        {yess ? (
          <img className="object-cover rounded-2xl" src={i2} alt="" />
        ) : (
          <>
            <img
              className="h-full w-full object-cover rounded-2xl mb-5"
              src={i1}
              alt=""
            />
            <div className="flex justify-center gap-15 h-18 w-96  items-center ">
              <div>
                <button
                  className="bg-pink-600 text-white  hover:bg-pink-700 h-10 w-14 rounded-xl"
                  onClick={() => setYess(!yess)}
                >
                  Yes
                </button>
              </div>
              <div className=" flex h-10 w-14 items-center ">
                <button
                  className="bg-pink-600 absolute hover:bg-pink-500 text-white transition-all duration-300 ease-in-out h-10 w-14 rounded-xl"
                  style={
                    moved ? { left: position.left, top: position.top } : {}
                  }
                  onMouseEnter={(e) => {
                    setMoved(true);
                    const rect =
                      e.currentTarget.parentElement.getBoundingClientRect();
                    const mouseX = e.clientX - rect.left;
                    const mouseY = e.clientY - rect.top;

                    // const mouseX = e.clientX; // cursor X position
                    // const mouseY = e.clientY; // same for y
                    let x = 0,
                      y = 0;
                    do {
                      x = Math.random() * (boxwidth - btnwidth);
                      y = Math.random() * (boxheight - btnheight);
                    } while (
                      Math.abs(x - mouseX) < 50 &&
                      Math.abs(y - mouseY) < 100 //condition check run until distance is greater than value in condition
                    );
                    setPosition({ left: x, top: y });
                  }}
                >
                  No
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
