import { Transaction } from "../models/Transaction.model"
import { ItemComponent } from "./index.component"

interface Prop {
    transactions: Transaction[]
}


export const ListItems = (prop: Prop) => {

    const {transactions} = prop;

    return (
        <>
            <ul className=" flex flex-col text-center gap-2 overflow-y-scroll border">
                {transactions.length <= 0 ? <li className=" text-gray-400">ยังไม่มีรายการของเดือนนี้</li> : <></>}
                {transactions.map((item, i)=><ItemComponent trans={item} key={i} />)}
            </ul>
        </>
    )
}
