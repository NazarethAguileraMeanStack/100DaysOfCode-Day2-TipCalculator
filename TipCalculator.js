class TipCalculator {
    
    constructor() {}
    
    set Bill(val) {
        let value = Number(val);
        if (Number.isNaN(value)) { 
            console.log("Invalid number");
            process.exit(1); 
        }
        this._bill = value;
    }

    get Bill() {
        return this._bill;
    }

    set Tip(val) {
        let value = Number(val);
        if (Number.isNaN(value)) {
            console.log("Invalid Number");
            process.exit(1);
        }
        this._tip = value / 100;
    }

    get Tip() {
        return this._tip;
    }

    set NumOfPeople(val) {
        let value = Number(val);
        if (Number.isNaN(value)) {
            console.log("Invalid Number");
            process.exit(1);
        }
        this._numOfPeople = value;
    }

    get NumOfPeople() {
        return this._numOfPeople;
    }

    calcAmountPerPerson() {
        this._total = (this._bill + (this._bill * this._tip)) / this._numOfPeople;
        return this._total;
    }

    calcTotalBill() {
        return this._bill + (this._bill * this._tip);
    }

    format(num) {
        return `$${(Math.round(num * 100) / 100).toFixed(2)}`;
    }

}

module.exports = TipCalculator;
