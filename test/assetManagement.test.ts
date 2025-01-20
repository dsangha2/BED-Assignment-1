import { findLargestHolding, Asset } from "../src/portfolio/assetManagement";

describe("Asset Management Tests", () => {

    describe("findLargestHolding", () => {
        it("should return the asset with the highest value", () => {
            const assets: Asset[] = [
                { name: "Stocks", value: 5000 },
                { name: "Bonds", value: 10000 },
                { name: "Real Estate", value: 7000 }
            ];

            const result = findLargestHolding(assets);
            expect(result).toEqual({ name: "Bonds", value: 10000 });
        });

        it("should return the first asset in case of a tie", () => {
            const assets: Asset[] = [
                { name: "Gold", value: 10000 },
                { name: "Silver", value: 10000 }
            ];

            const result = findLargestHolding(assets);
            expect(result).toEqual({ name: "Gold", value: 10000 });
        });
    });
});
