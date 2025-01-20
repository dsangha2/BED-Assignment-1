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