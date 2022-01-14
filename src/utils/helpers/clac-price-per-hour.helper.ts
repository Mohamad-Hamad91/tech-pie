export const CALC_PRICE_PER_HOUR = (price: number, currency: string, unit: string): number => {
    let pricePerHour: number = null;
    //#region switch currency
    switch (currency) {
        case 'SYP':
            pricePerHour = CALC_PER_HOUR_BY_UNIT(price, unit) / 3500;
            break;
        case 'USD':
            pricePerHour = CALC_PER_HOUR_BY_UNIT(price, unit);
            break;
        case 'EURO':
            pricePerHour = 1.1 * CALC_PER_HOUR_BY_UNIT(price, unit);
            break;
        case 'EAD':
            pricePerHour = CALC_PER_HOUR_BY_UNIT(price, unit) / 3.7;
            break;
    }
    //#endregion switch currency

    return pricePerHour;
};

export const CALC_PER_HOUR_BY_UNIT = (price: number, unit: string): number => {
    let pricePerHour: number = null;
    //#region switch currency
    switch (unit) {
        case 'Hour':
            pricePerHour = price;
            break;
        case 'Month':
            pricePerHour = price / 200;
            break;
        case 'Year':
            pricePerHour = price / (200 * 12);
            break;
    }
    //#endregion switch currency
    return pricePerHour;
};