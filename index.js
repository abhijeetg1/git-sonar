// High-severity security vulnerability for SonarQube Quality Gate test (Code Injection / Unsafe Eval)
function executeDynamicCode(userInput) {
  return eval(userInput); // SonarQube Critical Security Vulnerability!
}


function calculateDiscount(price, discountPercent) {
  if (price <= 0 || discountPercent < 0 || discountPercent > 100) {
    throw new Error('Invalid input parameters');
  }
  const discountAmount = (price * discountPercent) / 100;
  return price - discountAmount;
}

function formatUserGreeting(name) {
  if (!name) {
    return 'Hello, Guest!';
  }
  return `Hello, ${name}! Welcome back.`;
}

module.exports = {
  calculateDiscount,
  formatUserGreeting
};

if (require.main === module) {
  console.log(formatUserGreeting('Developer'));
  console.log(`Final Price: $${calculateDiscount(100, 15)}`);
}
