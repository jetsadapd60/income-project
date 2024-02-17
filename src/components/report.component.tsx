interface Prop {
    totalExpenses: number;
    totalIncome: number;
}

export const ReportComponent = (prop: Prop) => {
    const {totalIncome, totalExpenses} = prop;
    return (
        <>
            <div className=" flex text-green-700">
                <span className=" w-[65px]">รายรับ</span>
                <span className=" w-auto">:</span>
                <span className=" w-auto ps-2">{totalIncome.toLocaleString('th')} บ.</span>
            </div>
            <div className=" flex text-red-700">
                <span className=" w-[65px]">รายจ่าย</span>
                <span className=" w-auto">:</span>
                <span className=" w-auto ps-2">{totalExpenses.toLocaleString('th')} บ.</span>
            </div>
        </>
    )
}