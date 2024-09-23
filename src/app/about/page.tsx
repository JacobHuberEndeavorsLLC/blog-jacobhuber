import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>

      <div className="mb-6">
        <Image
          src="/AboutMe.jpeg"
          alt="Me with a couple cats"
          width={600}
          height={400}
          className="rounded-md"
        />
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
        <p>
          Hi, I&#39;m Jacob! I&#39;m someone who thrives on curiosity, always looking for new experiences and ways to grow. Whether it&#39;s spending time outdoors, visiting local breweries, exploring philosophy, or learning about real estate, I enjoy diving into a wide range of interests. 
        </p>
        <p>
          Outside of work, I love visiting parks, enjoying nature with my wife, and discovering hidden gems in the form of live music, wineries, or a great new book. Life is about balance for me, finding moments of joy in simple things, and sharing them with the people I care about.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Professional Background</h2>
        <p>
          While I&#39;m passionate about my personal interests, professionally, I&#39;m a Software Engineer at <Link href="https://www.symplr.com/" target="_blank" rel="noopener noreferrer"><strong>symplr</strong></Link>. I work as part of the Professional Services team, developing custom projects and working with clients to meet their business needs. I specialize in data integrations, API consulting, and managing multiple projects with a high degree of independence.
        </p>
        <p>
          My career has allowed me to explore the technology world deeply, building systems and troubleshooting complex problems, which keeps me excited and constantly learning.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Interests and Projects</h2>
        <p>
          Outside of work, I&#39;m the creator of two passion projects: <Link href="https://maizehelps.art/" target="_blank" rel="noopener noreferrer"><strong>Maize</strong></Link> and <Link href="https://www.cobsfarm.com/" target="_blank" rel="noopener noreferrer"><strong>Cob&#39;s Farm</strong></Link>, both of which allow me to explore blockchain technology in fun and creative ways. My interests stretch across areas like blockchain, AI, philosophy, and even stock market trends. 
        </p>
        <p>
          At the heart of it all, I enjoy learning, whether it's discovering new tech or finding joy in the everyday.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Looking Ahead</h2>
        <p>
          My goal is simple: to keep growing, exploring, and sharing what I learn along the way. Whether it's in tech or life, I aim to maintain balance and stay curious. In the future, I&#39;m excited about the possibility of starting a family and continuing to explore new adventures.
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