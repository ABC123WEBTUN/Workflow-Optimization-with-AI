import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  features: string[];
  buttonText?: string;
  isPopular?: boolean;
  onButtonClick?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period = '/month',
  features,
  buttonText = 'Start Trial',
  isPopular = false,
  onButtonClick
}) => {
  return (
    <div className={`relative w-full max-w-sm mx-auto ${isPopular ? 'transform scale-105' : ''}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
          Most Popular
        </div>
      )}
      
      <div className={`
        bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 h-full
        ${isPopular 
          ? 'border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50' 
          : 'border border-gray-200 hover:border-blue-300'
        }
      `}>
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          <div className="flex items-baseline justify-center">
            <span className="text-4xl font-extrabold text-gray-900">{price}</span>
            <span className="text-lg text-gray-500 ml-1">{period}</span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <Check className="w-5 h-5 text-green-500 mt-0.5" />
              </div>
              <span className="text-gray-700 leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button
          onClick={onButtonClick}
          className={`
            w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 
            transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2
            ${isPopular
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
              : 'bg-gray-900 hover:bg-gray-800 text-white shadow-md hover:shadow-lg'
            }
          `}
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default PricingCard;