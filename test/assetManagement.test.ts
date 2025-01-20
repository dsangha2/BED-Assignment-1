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

export function calculateAssetAllocation(assets: Asset[]): { name: string, percentage: number }[] {
    let totalValue = 0;

    for (const asset of assets) {
        totalValue += asset.value;
    }

    if (totalValue === 0) {
        return assets.map(asset => ({ name: asset.name, percentage: 0 }));
    }

    const allocation = [];
    for (const asset of assets) {
        allocation.push({
            name: asset.name,
            percentage: Number(((asset.value / totalValue) * 100).toFixed(2)),
        });
    }

    return allocation;
}
