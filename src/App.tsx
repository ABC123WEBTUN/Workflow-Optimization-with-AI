import React from 'react';
import PricingCard from './components/PricingCard';

function App() {
  const pricingPlans = [
    {
      title: 'Basic Plan',
      price: '$9.99',
      features: [
        '1 GB Storage',
        'Basic Support',
        'All Core Features',
        'Mobile App Access'
      ],
      buttonText: 'Start Trial'
    },
    {
      title: 'Pro Plan',
      price: '$19.99',
      features: [
        '10 GB Storage',
        'Priority Support',
        'Advanced Features',
        'Mobile App Access',
        'API Access',
        'Custom Integrations'
      ],
      buttonText: 'Choose Pro',
      isPopular: true
    },
    {
      title: 'Enterprise',
      price: '$49.99',
      features: [
        'Unlimited Storage',
        '24/7 Premium Support',
        'All Features',
        'Mobile App Access',
        'Full API Access',
        'Custom Integrations',
        'Dedicated Account Manager',
        'Custom Branding'
      ],
      buttonText: 'Contact Sales'
    }
  ];

  const handleButtonClick = (planTitle: string) => {
    console.log(`Selected plan: ${planTitle}`);
    // Add your actual button click logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Select the plan that fits your needs. Upgrade or downgrade at any time.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              buttonText={plan.buttonText}
              isPopular={plan.isPopular}
              onButtonClick={() => handleButtonClick(plan.title)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            All plans include a 30-day money-back guarantee
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ 24/7 support</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;