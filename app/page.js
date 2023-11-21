import Link from 'next/link';
import logo3 from '../public/logo3.jpg'
import bottomFiller from 'app/bottomFiller.png';

export default function Home() {
  return (
    <body>
      <main>
        <div className='container'>
          <img src="logo3" alt='logo' className='logo' />
          <h1>Skills Profile</h1>
          <p>
            In order to best match you with available jobs, we ask you to complete this questionnaire on your skills.
          </p>
          <p>
            There will be 18 required questions, and extra optional questions. It will take about 10 minutes, but you can take as long as you need.
          </p>
          <p>
            There is no wrong answer. The more honest you are, the better your job will fit you.
          </p>
          <img src={bottomFiller} alt="Bottom Image" className="bottom-image" />
        </div>
      </main>
      <navbar>
        <div className='container'>
          <Link href="/quiz">
              <button>START</button>
          </Link>
        </div>
      </navbar>
    </body>
  );
}