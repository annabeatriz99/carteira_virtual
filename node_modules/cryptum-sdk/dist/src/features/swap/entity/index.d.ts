type SwapOrder = {
    /**
     * timestamp
     */
    createdAt: string;
    /**
     * order id
     */
    id: string;
    /**
     * order status "WAITING_PAYMENT", "WAITING_CONFIRMATIONS", "EXCHANGING", "FAILED", "COMPLETED", "REFUNDED", "EXPIRED"
     */
    status: string;
    /**
     * origin address
     */
    addressFrom: string;
    /**
     * destination address
     */
    amountFrom: string;
    /**
     * origin cryptocurrency to swap
     */
    currencyFrom: string;
    /**
     * destination address
     */
    addressTo: string;
    /**
     * destination cryptocurrency amount
     */
    amountTo: string;
    /**
     * destination cryptocurrency
     */
    currencyTo: string;
    /**
     * memo or extra id string to pass along with the addressFrom (only for some currencies like XLM, XRP, etc)
     */
    memoFrom: string;
    /**
     * memo or extra id string to pass along with the addressTo (only for some currencies like XLM, XRP, etc)
     */
    memoTo: string;
};
