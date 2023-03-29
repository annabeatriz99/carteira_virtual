export function buildRippleTrustlineTransaction({ fromAddress, fromPrivateKey, sequence, maxLedgerVersion, assetSymbol, issuer, limit, memo, fee, }: {
    fromAddress: string;
    fromPrivateKey: string;
    sequence: string;
    assetSymbol: string;
    issuer: string;
    fee?: string | undefined;
    limit?: string | undefined;
    memo?: any;
    maxLedgerVersion: any;
}): Promise<string>;
export function buildRippleTransferTransaction({ fromAddress, fromPrivateKey, sequence, maxLedgerVersion, assetSymbol, issuer, amount, destination, memo, fee, }: {
    fromAddress: string;
    fromPrivateKey: string;
    sequence: string;
    assetSymbol: string;
    issuer?: string | undefined;
    amount: string;
    destination: string;
    fee?: string | undefined;
    memo?: string | undefined;
    maxLedgerVersion: any;
}): Promise<string>;
