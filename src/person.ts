export interface Person {
    name: string,
    age: number,
    address: Address,
    greet(message: string): string;
}

export interface Address {
    street: string,
    city: string,
    state: string,
    country: string
}

export type Status = "ACTIVE" | "INACTIVE" | "DEACTIVATE";
