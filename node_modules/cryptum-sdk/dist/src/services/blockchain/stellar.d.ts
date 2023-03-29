export function buildStellarTrustlineTransaction({ fromPublicKey, fromPrivateKey, sequence, assetSymbol, issuer, fee, limit, memo, testnet, }: {
    fromPublicKey: string;
    fromPrivateKey: string;
    sequence: string;
    assetSymbol: string;
    issuer: string;
    fee?: string | undefined;
    limit?: string | undefined;
    memo?: any;
    testnet?: boolean | undefined;
}): Promise<string>;
export function buildStellarTransferTransaction({ fromPublicKey, fromPrivateKey, sequence, assetSymbol, issuer, amount, destination, createAccount, fee, memo, testnet }: {
    fromPublicKey: string;
    fromPrivateKey: string;
    sequence: string;
    assetSymbol: string;
    issuer: string;
    amount: string;
    destination: string;
    createAccount?: boolean | undefined;
    fee?: string | undefined;
    memo?: string | undefined;
    testnet?: boolean | undefined;
}): Promise<string>;
