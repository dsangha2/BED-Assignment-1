interface PortfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
}

export function calculatePortfolioPerformance(initialInvestment: number, currentValue: number):
PortfolioPerformance{
    const profitOrLoss = currentValue - initialInvestment;
    const percentageChange = (profitOrLoss / initialInvestment) * 100;

    const performanceCategories = [
        `The portfolio has lost significantly with a loss of $${Math.abs(profitOrLoss)}.`,
        `The portfolio has lost moderately with a loss of $${Math.abs(profitOrLoss)}.`,
        `The portfolio has lost slightly with a loss of $${Math.abs(profitOrLoss)}.`,
        `The portfolio has no change with a value of $${currentValue}.`,
        `The portfolio has gained slightly with a profit of $${profitOrLoss}.`,
        `The portfolio has gained moderately with a profit of $${profitOrLoss}.`,
        `The portfolio has gained significantly with a profit of $${profitOrLoss}.`
    ];

    const categoryConditions = 
        (percentageChange < -20) ? 0 :
        (percentageChange < -10) ? 1 :
        (percentageChange < 0) ? 2 :
        (percentageChange === 0) ? 3 :
        (percentageChange <= 10) ? 4 :
        (percentageChange <= 20) ? 5 : 6;

        return {
            initialInvestment,
            currentValue,
            profitOrLoss,
            percentageChange,
            performanceSummary: performanceCategories[categoryConditions]
        };
}
