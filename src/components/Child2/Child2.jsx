import { useContext } from "react";
import SubChild2_1 from "./SubChild2_1/SubChild2_1";
import SubChild2_2 from "./SubChild2_2/SubChild2_2";
import { AppContext } from "../../App";

const SubChild2 = () => {
    const appContext = useContext(AppContext);

    return (
        <div>
           <SubChild2_1 data={appContext.data} setData={appContext.setData} />
           <SubChild2_2 data={appContext.data} setData={appContext.setData} />
        </div>
    )

}

export default SubChild2;