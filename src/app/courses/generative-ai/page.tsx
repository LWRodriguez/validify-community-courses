import Image from 'next/image'
import Link from 'next/link'

export default function GenerativeAICourse() {
  const courseDetails = {
    title: "Generative AI for Everyone",
    instructor: "Andrew Ng",
    duration: "3 weeks",
    timeCommitment: "1-2 hours per week",
    level: "Beginner",
    description: "Learn how generative AI works and how to use it to enhance your work and daily life. This course, taught by AI pioneer Andrew Ng, provides a unique perspective on empowering you with generative AI.",
    whatYoullLearn: [
      "What generative AI is and how it works",
      "Common use cases and limitations of generative AI",
      "How to think through the lifecycle of a generative AI project",
      "Effective prompt engineering techniques",
      "The potential opportunities and risks of generative AI",
      "How to go beyond prompting for more advanced uses"
    ],
    modules: [
      {
        title: "Introduction to Generative AI",
        duration: "1 hour",
        topics: [
          "How Generative AI works",
          "LLMs as a thought partner",
          "AI as a general purpose technology",
          "Writing, reading, and chatting with AI",
          "What LLMs can and cannot do",
          "Tips for prompting"
        ]
      },
      {
        title: "Generative AI Projects",
        duration: "2 hours",
        topics: [
          "Using generative AI in software applications",
          "Lifecycle of a generative AI project",
          "Cost intuition",
          "Retrieval Augmented Generation (RAG)",
          "Fine-tuning and pretraining",
          "Choosing the right model"
        ]
      },
      {
        title: "Generative AI in Business and Society",
        duration: "1 hour",
        topics: [
          "Day-to-day usage of web UI LLMs",
          "Task analysis of jobs",
          "New workflows and opportunities",
          "Teams to build generative AI software",
          "Automation potential across sectors",
          "Responsible AI and concerns"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen py-12">
      {/* Course Header */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/course-thumbnail.svg"
                  alt="Generative AI Course"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h1 className="text-4xl font-bold mb-4">{courseDetails.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{courseDetails.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-semibold">{courseDetails.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Time Commitment</p>
                  <p className="font-semibold">{courseDetails.timeCommitment}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Level</p>
                  <p className="font-semibold">{courseDetails.level}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Instructor</p>
                  <p className="font-semibold">{courseDetails.instructor}</p>
                </div>
              </div>
              <div className="space-x-4">
                <a
                  href="https://www.coursera.org/learn/generative-ai-for-everyone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
                >
                  Enroll Now
                </a>
                <Link
                  href="/courses"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block border border-blue-600"
                >
                  Back to Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">What You&apos;ll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courseDetails.whatYoullLearn.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <svg className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Course Modules</h2>
          <div className="space-y-8">
            {courseDetails.modules.map((module, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">Module {index + 1}: {module.title}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {module.duration}
                  </span>
                </div>
                <ul className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start space-x-2">
                      <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-gray-600">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of learners who have transformed their understanding of AI with this course.
          </p>
          <a
            href="https://www.coursera.org/learn/generative-ai-for-everyone"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Enroll Now
          </a>
        </div>
      </section>
    </div>
  )
} 