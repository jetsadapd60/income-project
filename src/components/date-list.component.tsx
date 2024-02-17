

interface Prop {
    year    : string[];
    month   : string[];
}

export const DateList = (prop: Prop) => {

    let {year, month} = prop;
    
    return (
        <>
            <div className=" text-center">
                <select>
                    {month.map((item, index)=><option key={index}>{item}</option>)}
                </select>
                <select>
                    {year.map((item, index)=><option key={index}>{item}</option>)}
                    
                </select>
            </div>
        </>
    )
}