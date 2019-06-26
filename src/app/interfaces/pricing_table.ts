export interface PricingTable {
    _id: string;
    title: string;
    description: string;
    checks: Array<string>;
    price: number;
}