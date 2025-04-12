export default function Overview() {
  return (
    <div className="min-h-screen py-12">
      {/* Header Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            The Impact of AI on Retail
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Discover how artificial intelligence is revolutionizing the retail industry and creating new opportunities for growth and innovation.
          </p>
        </div>
      </section>

      {/* Key Impact Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Key Areas of AI Impact in Retail
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Customer Experience</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Personalized shopping recommendations</li>
                <li>• Virtual try-on solutions</li>
                <li>• AI-powered chatbots for customer service</li>
                <li>• Smart fitting rooms</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Inventory Management</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Predictive inventory optimization</li>
                <li>• Automated stock replenishment</li>
                <li>• Demand forecasting</li>
                <li>• Supply chain optimization</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Store Operations</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Smart checkout systems</li>
                <li>• Employee scheduling optimization</li>
                <li>• Real-time store analytics</li>
                <li>• Loss prevention systems</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Marketing & Pricing</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Dynamic pricing strategies</li>
                <li>• Targeted marketing campaigns</li>
                <li>• Customer behavior analysis</li>
                <li>• Promotion optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            AI in Retail: By the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">37%</div>
              <p className="text-gray-300">
                Increase in operational efficiency with AI implementation
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">25%</div>
              <p className="text-gray-300">
                Average reduction in inventory costs
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">45%</div>
              <p className="text-gray-300">
                Improvement in customer satisfaction scores
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Trends */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Future Trends in Retail AI
          </h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 mb-6">
              The future of retail is being shaped by emerging AI technologies that promise to deliver even more personalized and efficient shopping experiences. Some key trends include:
            </p>
            <ul className="space-y-4 text-gray-600">
              <li>
                <strong>Autonomous Stores:</strong> Fully automated shopping experiences with no checkout required.
              </li>
              <li>
                <strong>Voice Commerce:</strong> AI-powered voice assistants for shopping and customer service.
              </li>
              <li>
                <strong>Predictive Analytics:</strong> Advanced forecasting for inventory and customer behavior.
              </li>
              <li>
                <strong>Computer Vision:</strong> Enhanced in-store analytics and security systems.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
} 