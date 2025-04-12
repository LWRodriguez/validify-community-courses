export default function Courses() {
  const courses = [
    {
      title: "AI Fundamentals for Retail",
      description: "Learn the basics of AI and how it can transform your retail business. Perfect for beginners and decision-makers.",
      duration: "6 weeks",
      level: "Beginner",
      topics: ["AI Basics", "Machine Learning", "Data Analytics", "Implementation Strategies"],
      status: "Enrolling Now",
      link: "/courses/generative-ai",
      externalLink: "https://www.coursera.org/learn/generative-ai-for-everyone"
    },
    {
      title: "Advanced Retail Analytics",
      description: "Deep dive into retail analytics using AI tools. Learn to make data-driven decisions for your business.",
      duration: "8 weeks",
      level: "Intermediate",
      topics: ["Predictive Analytics", "Customer Segmentation", "Inventory Optimization", "Price Optimization"],
      status: "Starting Soon"
    },
    {
      title: "AI-Powered Customer Experience",
      description: "Master the art of creating personalized customer experiences using AI technologies.",
      duration: "6 weeks",
      level: "Intermediate",
      topics: ["Personalization", "Chatbots", "Virtual Assistants", "Customer Journey Analytics"],
      status: "Coming Soon"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Header Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Our Courses
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Transform your retail business with our expert-led courses in AI and technology implementation.
          </p>
        </div>
      </section>

      {/* Course Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
                      <p className="text-gray-600 mb-6">{course.description}</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold">
                      {course.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Course Details</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Duration: {course.duration}</li>
                        <li>Level: {course.level}</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Key Topics</h3>
                      <ul className="space-y-2 text-gray-600">
                        {course.topics.map((topic, topicIndex) => (
                          <li key={topicIndex}>• {topic}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    {course.link ? (
                      <div className="space-x-4">
                        <a
                          href={course.link}
                          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block"
                        >
                          Learn More
                        </a>
                        <a
                          href={course.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors inline-block border border-blue-600"
                        >
                          Enroll Now
                        </a>
                      </div>
                    ) : (
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Learn More
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need More Information?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our team to learn more about our courses and how they can benefit your business.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  )
} 