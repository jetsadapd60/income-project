interface Prop {
    balance: number;
}

export const BalanceComponent = (prop: Prop) => {
    const {balance} = prop;
    return (
        <div className=" py-7">
            <h3>เงินคงเหลือ</h3>
            <div className="text-center" style={{fontSize: '50px', fontWeight: 'bold'}}>
                <span style={{textDecoration:'underline'}}>{balance.toLocaleString('th')} <small>บ.</small></span>
            </div>
        </div>
    )
}