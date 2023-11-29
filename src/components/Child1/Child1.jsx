import { useContext } from "react";
import SubChild1_1 from "./SubChild1_1/SubChild1_1"
import SubChild1_2 from "./SubChild1_2/SubChild1_2"
import { AppContext } from "../../App";

const Child1 = () => {
    const appContext = useContext(AppContext);

    return (
        <div>
           <SubChild1_1 data={appContext.data} setData={appContext.setData} />
           <SubChild1_2 data={appContext.data} setData={appContext.setData} />
        </div>
    )
}

export default Child1;