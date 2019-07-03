export interface PricingTable {
    _id: string;
    title: string;
    checks: Array<string>;
    price: number;
    icon: string;
    link: string;
}