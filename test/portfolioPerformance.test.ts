import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {

    test("should correctly calculate significant gain", () => {
        const result = calculatePortfolioPerformance(10000, 15000);
        expect(result.initialInvestment).toBe(10000);
        expect(result.currentValue).toBe(15000);
        expect(result.profitOrLoss).toBe(5000);
        expect(result.percentageChange).toBe(50);
        expect(result.performanceSummary).toBe("The portfolio has gained significantly with a profit of $5000.");
    });

    test("should correctly calculate moderate gain", () => {
        const result = calculatePortfolioPerformance(10000, 11500);
        expect(result.initialInvestment).toBe(10000);
        expect(result.currentValue).toBe(11500);
        expect(result.profitOrLoss).toBe(1500);
        expect(result.percentageChange).toBe(15);
        expect(result.performanceSummary).toBe("The portfolio has gained moderately with a profit of $1500.");
    });

    test("should correctly calculate slight gain", () => {
        const result = calculatePortfolioPerformance(10000, 10500);
        expect(result.initialInvestment).toBe(10000);
        expect(result.currentValue).toBe(10500);
        expect(result.profitOrLoss).toBe(500);
        expect(result.percentageChange).toBe(5);
        expect(result.performanceSummary).toBe("The portfolio has gained slightly with a profit of $500.");
    });

    test("should correctly calculate no change", () => {
        const result = calculatePortfolioPerformance(10000, 10000);
        expect(result.profitOrLoss).toBe(0);
        expect(result.percentageChange).toBe(0);
        expect(result.performanceSummary).toBe("The portfolio has no change with a value of $10000.");
    });

    test("should correctly calculate slight loss", () => {
        const result = calculatePortfolioPerformance(10000, 9500);
        expect(result.profitOrLoss).toBe(-500);
        expect(result.percentageChange).toBe(-5);
        expect(result.performanceSummary).toBe("The portfolio has lost slightly with a loss of $500.");
    });

    test("should correctly calculate moderate loss", () => {
        const result = calculatePortfolioPerformance(10000, 8000);
        expect(result.profitOrLoss).toBe(-2000);
        expect(result.percentageChange).toBe(-20);
        expect(result.performanceSummary).toBe("The portfolio has lost moderately with a loss of $2000.");
    });

    test("should correctly calculate significant loss", () => {
        const result = calculatePortfolioPerformance(10000, 7000);
        expect(result.profitOrLoss).toBe(-3000);
        expect(result.percentageChange).toBe(-30);
        expect(result.performanceSummary).toBe("The portfolio has lost significantly with a loss of $3000.");
    });

});
