import { useEffect, useState } from "react"
import { TransactionType } from "../models/Transaction.model";
import { v4 as uuidv4 } from 'uuid';

interface Prop {
    onAdd: (statement: string, amount: number, type: TransactionType) => void;
}

export const FormComponent = (prop: Prop) => {

    const {onAdd} = prop;

    const transactionType: TransactionType[] = [
        {id: uuidv4(), nameEn: 'income',    nameTh: 'รายรับ'},
        {id: uuidv4(), nameEn: 'expenses',  nameTh: 'รายจ่าย'},
    ];

    const [isBtnDisable, setIsBtnDisable] = useState(true);

    // const [transaction, setTransaction] = useState({id: uuidv4(), type: transactionType[0], createDate: new Date(), updateDate: null} as Transaction);
    const [statement, setStatement] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState(transactionType[0]);

    const onChangeStatment = (e: any) => {
        let value = e.target.value;
        // setTransaction((_transaction) => ({..._transaction, statement: value}));
        setStatement(value);
    }

    const onChangeAmount = (e: any) => {
        let value = e.target.value;
        // setTransaction((_transaction) => ({..._transaction, amount: value}));
        setAmount(value)
    }

    const onChangeType = (e: any) => {
        let value = e.target.value;
        const index = transactionType.findIndex(item => item.nameTh === value);
        // setTransaction((_transaction) => ({..._transaction, type: transactionType[index]}));
        setType(transactionType[index]);
    }

    const onSubmitForm = (e: any) => {
        e.preventDefault();
        // console.log(transaction)
        onAdd(statement.trim(), Number(amount.trim()), type);
        clearInputForm();
    }
    
    const clearInputForm = () => {
        setStatement('');
        setAmount('');
        // setType(transactionType[0]);
    }

    const btnDefaultStyle: string = 'col-start-3 col-end-13 text-white p-0 py-1 rounded-sm';
    const btnStyle = !isBtnDisable ?`bg-violet-400 ${btnDefaultStyle}` : `bg-violet-500 ${btnDefaultStyle}  hover:bg-violet-600`;


    const effect = () => {
        let formInvalid: boolean = (!!statement && statement.trim() !== '') && (!!amount && +amount > 0);
        setIsBtnDisable(formInvalid);
    }
    useEffect(effect, [statement, amount]);



    return (
        <div className=" my-5">
            <form className=" border rounded p-5" onSubmit={onSubmitForm}>
            <div className="grid grid-cols-12 items-center mt-3 gap-2">
                    <span style={{fontSize: '14px'}} className=" col-span-2 flex justify-between">รายการ:</span>
                    <input type="text" value={statement} onChange={onChangeStatment} placeholder="เช่น เงินเดือน" className="px-2 border rounded-sm py-1 col-span-10 w-full" name="" id="" />
                </div>
                <div className="grid grid-cols-12 items-center mt-3">
                    <span style={{fontSize: '14px'}} className=" col-span-2 flex justify-between">จำนวนเงิน:</span>
                    <div className=" col-span-10 grid grid-cols-10 gap-2">
                        <input value={amount} placeholder="เช่น 50000" onChange={onChangeAmount} type="text" name="" className=" border px-2 col-span-6 rounded-sm py-1" id="" />
                        <select onChange={onChangeType} className=" col-span-4 rounded-sm border py-[3px] w-full">
                            {transactionType.map((type, i) =><option key={i} >{type.nameTh}</option>)}
                        </select>
                    </div>
                    
                </div>
                <div className="grid grid-cols-12 mt-3">
                    <button disabled={!isBtnDisable} type="submit" className={btnStyle}>เพิ่มรายการ</button>
                </div>
            </form>
        </div>
    )
}