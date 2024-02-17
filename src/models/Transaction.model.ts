export type TransactionTypeNameEn = 'income'  | 'expenses';
export type TransactionTypeNameTh = 'รายรับ'   | 'รายจ่าย';

export interface TransactionType {
  id    : string;
  nameTh: TransactionTypeNameTh;
  nameEn: TransactionTypeNameEn;
}

export interface Transaction {
    id        : string;
    statement : string;
    amount    : number;
    type      : TransactionType;
    createDate: Date;
    updateDate: Date|null;
  }