import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>

      {/* Image Placeholder - Add an actual image */}
      <div className="mb-6">
        <Image
          src="/AboutMe.jpeg" // Replace with your image path
          alt="Me with a couple cats"
          width={600}
          height={400}
          className="rounded-md"
        />
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p>
          Hello! I’m Jacob, a software engineer with a passion for technology and a drive for continuous learning. My curiosity pushes me to explore diverse fields—from blockchain and AI to real estate and philosophy. I believe in solving complex problems and balancing professional growth with enriching personal experiences. 
        </p>
        <p>
          Outside of work, I value discovering new places, enjoying local breweries and wineries, and spending time in nature with my wife. For me, it's about finding joy in life’s moments and growing with each new experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Professional Background</h2>
        <p>
          My journey started in the food industry, where I honed essential skills like leadership, hard work, and service. In 2019, I transitioned into technology as a technical support analyst, building a solid foundation in troubleshooting and systems analysis.
        </p>
        <p>
          Today, I am a Software Engineer at <Link href="https://www.symplr.com/" target="_blank" rel="noopener noreferrer"><strong>symplr</strong></Link>, part of the Professional Services team. I specialize in custom development projects, focusing on integrating client-specific business requirements, managing data importing/exporting, and consulting on API integrations. I manage multiple projects independently, working closely with clients to deliver tailored solutions while collaborating with an amazing team.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Projects and Interests</h2>
        <p>
          I am the creator of two passion projects: <Link href="https://maizehelps.art/" target="_blank" rel="noopener noreferrer"><strong>Maize</strong></Link> and <Link href="https://www.cobsfarm.com/" target="_blank" rel="noopener noreferrer"><strong>Cob's Farm</strong></Link>. These ventures allow me to dive deep into blockchain technology and sharpen my development skills. My professional interests span blockchain, AI, and the stock market, while personally, I enjoy exploring real estate and philosophy.
        </p>
        <p>
          In my free time, you’ll often find me at parks or botanical gardens, exploring new breweries and wineries, or attending live music events with my wife.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Goals and Vision</h2>
        <p>
          My goal is to continually expand my knowledge, contribute to innovative solutions, and support others on their journeys. Simplicity is key in my approach to life—focusing on nurturing my body, mind, and spirit. Looking ahead, I’m excited about starting a family and the adventures that come with it.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Websites of Interest</h2>
        <ul className="list-disc ml-6">
          <li>
            <Link href="https://openai.com/chatgpt">
              OpenAI ChatGPT
            </Link>: Innovative AI language model.
          </li>
          <li>
            <Link href="https://loopring.org">
              Loopring
            </Link>: Decentralized exchange and payment protocol.
          </li>
          <li>
            <Link href="https://taiko.xyz">
              Taiko
            </Link>: Ethereum Layer 2 scaling solution.
          </li>
          <li>
            <Link href="https://drsgme.org">
              DRSGME
            </Link>: Empowering retail investors on direct registration.
          </li>
          <li>
            <Link href="https://nextjs.org">
              Next.js
            </Link>: The framework behind this website.
          </li>
          <li>
            <Link href="https://huggingface.co">
              Hugging Face
            </Link>: Exploring large language models.
          </li>
        </ul>
      </section>
    </div>
  )
}