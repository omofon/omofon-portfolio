export function Experience() {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>

        <div className="space-y-8">
          {/* Experience Item */}
          <div className="border-l-2 border-primary pl-6">
            <div className="mb-2">
              <h3 className="text-xl font-semibold text-foreground">
                Chaindustry — Blockchain Developer Intern
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                August 2025 - <span className="text-primary">CURRENT</span>
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Contributed to the development of a Web3-enabled platform serving
              over 1,000 active users. <br />
              Built scalable task and quest modules that increased user
              engagement by 30%. <br />
              Optimized PostgreSQL database schemas and queries, reducing
              average query latency by 40%. <br />
              Designed and implemented a referral leaderboard system that drove
              a 20% month-over-month increase in new user acquisition.
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              Technologies: TypeScript, Node.js, React, PostgreSQL, Web3
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Experience Item */}
          <div className="border-l-2 border-primary pl-6">
            <div className="mb-2">
              <h3 className="text-xl font-semibold text-foreground">
                Deaftermath Consults — Web Developer
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                January 2025 - <span className="text-primary">PRESENT</span>
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Designed and developed the company website using Nuxt.js and
              React.js, delivering a responsive, performance-optimized user
              experience. <br />
              Implemented backend services with Node.js to handle form
              validation, email automation, and user inquiries.
              <br />
              Successfully launched and maintained the platform, achieving over
              1,000 visits within the first month through SEO and performance
              best practices.
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              Technologies: Nuxt.js, React.js, Node.js
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
