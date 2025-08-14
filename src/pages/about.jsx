
 export default function About(){
    return <>
   <div className="pt-12">
   <div className=" px-6 lg:px-24 py-12 bg-gray-50 text-gray-800 ">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-purple-600">
          About Us </h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-3 text-gray-700">
            Who We Are
          </h2>
          <p className="text-lg leading-relaxed">
            We are a passionate team dedicated to bringing knowledge,
            creativity, and innovation together. Our mission is to empower
            individuals with the tools, resources, and inspiration they need to
            achieve their goals and unlock their full potential.
          </p>
        </section>

        {/* What We Do */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-3 text-gray-700">
            What We Do
          </h2>
          <p className="text-lg leading-relaxed">
            From offering high-quality educational courses to delivering
            professional digital solutions, we focus on providing value that
            truly makes an impact. We believe learning should be engaging,
            practical, and accessible to everyone — anytime, anywhere.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-gray-700">
            Our Vision
          </h2>
          <p className="text-lg leading-relaxed">
            To create a world where learning never stops, and creativity knows
            no limits. We aim to be the bridge between curiosity and mastery,
            helping people transform ideas into reality.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-gray-700">
            Our Values
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>
              <strong>Excellence:</strong> Striving for the highest quality in
              everything we do.
            </li>
            <li>
              <strong>Integrity:</strong> Being honest, transparent, and
              reliable.
            </li>
            <li>
              <strong>Innovation:</strong> Embracing new ideas and technologies.
            </li>
            <li>
              <strong>Community:</strong> Growing together through collaboration
              and support.
            </li>
          </ul>
        </section>

        <section className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-700">
            Why Choose Us
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>
              <strong>Practical Learning:</strong> Courses designed for
              real-world application.
            </li>
            <li>
              <strong>Expert Instructors:</strong> Learn from industry
              professionals.
            </li>
            <li>
              <strong>Flexible Access:</strong> Study at your own pace, anywhere
              in the world.
            </li>
            <li>
              <strong>Supportive Community:</strong> Join a network of learners
              and achievers.
            </li>
          </ul>
        </section>
      </div>
    </div>
   </div>
    
    </>
}
