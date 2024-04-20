import Navigate from "./Navigate";
import { lazy, Suspense} from "react";
import Shimmer from "./Shimmer";

const Recs = lazy(() => {
    return new Promise(resolve =>
      setTimeout(() => resolve(import("./List")), 200)
    );
  });

const SecondaryContainer = () => {

  return (
   
        <div className="md:mt-32 p-0 pl-5 ml-0 relative z-0">
            <div className="mt-0 mr-0 md:-mt-52 pl-16 md:pl-12 z-18 relative z-18 overflow-hidden">
            <div className="pb-4 pr-0 mr-2"><Navigate/></div>
            <Suspense fallback={<Shimmer/>}>
                    <Recs/>
            </Suspense>
            </div>
        </div>


  );
};
export default SecondaryContainer;