export interface Asset {
    name: string;
    value: number;
}

export function findLargestHolding(assets: Asset[]): Asset | null {
    let largestAsset: Asset | null = null;

    for (const asset of assets) {
        if (!largestAsset || asset.value > largestAsset.value) {
            largestAsset = asset;
        }
    }

    return largestAsset;
}

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