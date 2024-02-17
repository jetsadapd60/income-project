import { Transaction } from "../models/Transaction.model"

interface Prop {
    trans: Transaction;
}

export const ItemComponent = (prop: Prop) => {

    const {trans} = prop;
    const {amount, statement, type} = trans;
    const {nameEn} = type;

    
    return (
        <>
            <li className="flex justify-between bg-violet-800 text-white py-2 px-5 rounded-sm">
                <span>{statement}</span>
                <span>{nameEn === 'income'? "+":"-"}{amount.toLocaleString('th')}</span>
            </li>
        </>
    )
}