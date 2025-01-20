import { findLargestHolding, Asset, calculateAssetAllocation } from "../src/portfolio/assetManagement";

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

    describe("calculateAssetAllocation", () => {
        it("should correctly calculate asset allocation percentages", () => {
            const assets: Asset[] = [
                { name: "Stocks", value: 6000 },
                { name: "Bonds", value: 4000 }
            ];

            const result = calculateAssetAllocation(assets);
            expect(result).toEqual([
                { name: "Stocks", percentage: 60 },
                { name: "Bonds", percentage: 40 }
            ]);
        });

        it("should return 0% for all assets when total value is 0", () => {
            const assets: Asset[] = [
                { name: "Stocks", value: 0 },
                { name: "Bonds", value: 0 }
            ];

            const result = calculateAssetAllocation(assets);
            expect(result).toEqual([
                { name: "Stocks", percentage: 0 },
                { name: "Bonds", percentage: 0 }
            ]);
        });

        it("should handle a portfolio with only one asset", () => {
            const assets: Asset[] = [
                { name: "Crypto", value: 10000 }
            ];

            const result = calculateAssetAllocation(assets);
            expect(result).toEqual([
                { name: "Crypto", percentage: 100 }
            ]);
        });
    });
});
