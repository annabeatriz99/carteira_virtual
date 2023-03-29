export = Interface;
declare class Interface {
    /**
     * Method to configure required adapters and general configs
     *
     * @param {import("../../../..").Config} config an object with this data: { enviroment: 'development'/'production' }
     */
    constructor(config: import("../../../..").Config);
    config: import("../../../..").Config;
}
