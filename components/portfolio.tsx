"use client";
import { Button } from "../components/ui/button";
import Image from "next/image";
import { FaGithubAlt } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Form from "@/components/form";

const portfolio = () => {
  return (
    <div className="bg-[#1E1E1E] w-full h-full screen  ">
      <nav className="flex justify-between items-center pt-6 px-20 ">
        <h1 className="text-3xl font-bold text-[#8AF9FF] font-Poppins">
          Vikram S.
        </h1>
        <div className="flex gap-6 text-[#fff] text-sm">
          <a href="#">Project</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <div className="flex justify-between items-center  w-full pt-20 text-[#fff] px-20">
        <div className="w-1/2 leading-7">
          <h1 className="text-5xl font-bold">HI, IAM </h1>
          <h1 className="text-5xl font-bold">VIKRAM SINGH.</h1>
          <p className="w-96">
            Passionate Web Developer have Experties in Frontend Developement. I
            use TypeScript/JavaScript React & NexJS to build Interactive &
            Modern Web Applications.
          </p>
          <div className="flex gap-6 pt-3">
            <Button className="bg-[#FF74FD] rounded-3xl hover:bg-[#d648d4] text-zinc-800  ">
              <a href="/images/ORG-Resume.pdf" target="blank">Download CV</a>
            </Button>
            <a href="https://github.com/vikram-singh9">
              <FaGithubAlt size={30} />
            </a>
            <a href="https://www.linkedin.com/in/vikram-s-404839217/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BtgIVaQ67Tpy0CYixxtnYrQ%3D%3D">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        <div>
          <Image
            src={"/images/mypic.jpg"}
            alt="img"
            width={300}
            height={300}
            className="rounded-xl"
          />
        </div>
      </div>
      <hr className="mt-24" />

      <div className="bg-[#1E1E1E] px-20 pt-6 text-[#fff]">
        <h1 className="text-3xl font-bold">MY PROJECTS</h1>
        <h3 className="text-2xl text-[#fff] pt-2">
          Check Out My Latest Project
        </h3>
      </div>

      <div className="flex gap-x-20  w-full px-20 py-20">
        <div>
          <Image
            src={"/images/tt.png"}
            alt="img"
            width={500}
            height={600}
            className="rounded-xl"
          />
        </div>

        <div className="text-[#fff] leading-7 w-1/2">
          <h1 className="text-2xl font-bold">TODO-APP</h1>
          <h1 className="text-2xl pb-4">Now Make Your Daily Todos Easy!</h1>
          <p>
            Introducing a sleek to-do app that streamlines your tasks. Organize
            and prioritize effortlessly while staying focused as you check off
            your accomplishments!
          </p>
          <h1 className="text-2xl py-2 ">Project Details</h1>
          <hr />
          <h2 className="text-[#FF74FD] py-1 flex ">
            Role <span className="pl-72">Frontend Developer😎</span>
          </h2>
          <hr />
          <h2 className="text-[#FF74FD] py-1">
            Year <span className="pl-96">2024</span>
          </h2>
          <hr />
          <a
            href="https://to-do-app-three-cyan.vercel.app/"
            target="blank"
            className="text-blue-500 py-1 underline"
          >
            Live Demo
          </a>
        </div>
      </div>

      <div className="flex gap-x-20  px-20 ">
        <div>
          <Image
            src={"/images/ct.png"}
            alt="img"
            width={500}
            height={600}
            className="rounded-xl"
          />
        </div>

        <div className="text-[#fff] leading-6 w-1/2">
          <h1 className="text-2xl font-bold">COUNTDOWN-TIMER</h1>
          <h1 className="text-2xl pb-4">Now Measure your daily activities!</h1>
          <p>
            Introducing a sleek countdown timer that keeps you on track. Set
            time limits effortlessly, stay focused on your goals, and watch as
            the clock ticks down to success.
          </p>
          <h1 className="text-2xl py-2 ">Project Details</h1>
          <hr />
          <h2 className="text-[#FF74FD] py-1 ">
            Role <span className="pl-72">Frontend Developer😎</span>
          </h2>
          <hr />
          <h2 className="text-[#FF74FD] py-1">
            Year <span className="pl-96">2024</span>
          </h2>
          <hr />
          <a href="#" className="text-blue-500 py-1 underline">
            Live Demo
          </a>
        </div>
      </div>

      <div className="flex gap-x-20  px-20 py-20 ">
        <div>
          <Image
            src={"/images/digitalClock.png"}
            alt="img"
            width={500}
            height={600}
            className="rounded-xl"
          />
        </div>

        <div className="text-[#fff] leading-6 w-1/2">
          <h1 className="text-2xl font-bold">DIGITAL CLOCK</h1>
          <h1 className="text-2xl pb-4">A Digital Clock </h1>
          <p>
            Introducing a sleek digital clock that keeps you in sync with every
            moment. Effortlessly track the time with a clear, modern display
            designed for accuracy and style.
          </p>
          <h1 className="text-2xl py-2 ">Project Details</h1>
          <hr />
          <h2 className="text-[#FF74FD] py-1 ">
            Role<span className="pl-72">Frontend Developer😎</span>
          </h2>
          <hr />
          <h2 className="text-[#FF74FD] py-1">
            Year<span className="pl-96">2024</span>
          </h2>
          <hr />
          <a href="#" className="text-blue-500 py-1 underline">
            Live Demo
          </a>
        </div>
      </div>

      <div className="flex gap-x-20  px-20 pb-28">
        <div>
          <Image
            src={"/images/tic.jpg"}
            alt="img"
            width={500}
            height={600}
            className="rounded-xl"
          />
        </div>

        <div className="text-[#fff] leading-7 w-1/2">
          <h1 className="text-2xl font-bold">TIC-TAC-TOE</h1>
          <h1 className="text-2xl pb-4">I Build this Amazing Tic Tac Toe!</h1>
          <p>
            Classic Tic Tac Toe game with a modern twist! Challenge yourself or
            a friend in this sleek, intuitive design where strategy meets
            simplicity. Enjoy smooth gameplay, track your wins, and immerse
            yourself in endless rounds of this timeless favorite.
          </p>
          <h1 className="text-2xl py-2 ">Project Details</h1>
          <hr />
          <h2 className="text-[#FF74FD] py-1 ">
            Role<span className="pl-72">Frontend Developer😎</span>
          </h2>
          <hr />
          <h2 className="text-[#FF74FD] py-1">
            Year<span className="pl-96">2024</span>
          </h2>
          <hr />
          <a
            href="https://tic-tac-toe-xi-pied.vercel.app/"
            target="blank"
            className="text-blue-500 py-1 underline"
          >
            Live Demo
          </a>
        </div>
      </div>
      <hr />

      <div className="text-white px-20  py-20">
        <div className="text-5xl text-[#FF74FD] font-bold py-8">About Me!</div>
        <div>
          <h1 className="text-3xl font-bold">Emerging | Frontend developer</h1>
          <p className="leading-7 py-8">
            👋 Hi, I&apos;m Vikram Singh, a dedicated web developer with a
            specialized focus on front-end technologies, committed to crafting
            seamless and visually engaging web experiences. With a solid
            foundation in HTML, CSS, and JavaScript, alongside a strong
            proficiency in frameworks like React and Next.js, I strive to create
            code that is not only efficient but also clean and maintainable. My
            approach to web development is driven by curiosity and a desire to
            push the boundaries of what's possible, constantly learning and
            adapting to emerging trends and technologies. <br />
            🎓 I hold a Bachelor's degree in Commerce, which adds a strategic,
            business-oriented perspective to my technical projects. Coupled with
            certifications in Digital Marketing, SEO, and Graphic Design, I
            bring a well-rounded skill set that blends creativity with technical
            expertise. I&apos;m also certified in Generative AI and Web 3.0, a
            venture that has equipped me with knowledge of transformative
            technologies poised to shape the future of the web. <br />
            🔧 My strengths lie in developing responsive, user-centric web
            applications, where I&apos;ve gained hands-on experience using Next.js,
            Tailwind CSS, and ShadCN UI to create polished and functional
            designs. I have a keen eye for user experience and am passionate
            about solving complex problems, always searching for innovative ways
            to optimize and streamline development workflows. Whether it's
            building new features from scratch or refining existing ones, I am
            driven by the goal of delivering intuitive and impactful solutions
            that make a real difference. <br />
            🌱 I'm continually expanding my skill set, open to new challenges,
            and enthusiastic about connecting with like-minded professionals in
            the tech community. Let's create something amazing together!
          </p>
          <a
            href="https://www.linkedin.com/in/vikram-s-404839217/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BtgIVaQ67Tpy0CYixxtnYrQ%3D%3D"
            target="blank"
            className="text-2xl text-[#FF74FD] underline"
          >
            MORE ABOUT ME!
          </a>
        </div>
      </div>
      <hr />

      <div className="text-white px-20 flex gap-80 py-20 h-screen">
        <div className="leading-8">
          <h1 className="text-4xl py-4 font-bold">LET&apos;S CONNECT</h1>
          <p>
            <span className="font-bold">Say Hello at </span>{" "}
            <a href="#">bs2312075@gmail.com</a>
          </p>
          <p>
            For further info here is my{" "}
            <a
              href="https://www.linkedin.com/in/vikram-s-404839217/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BtgIVaQ67Tpy0CYixxtnYrQ%3D%3D"
              target="blank"
              className="text-blue-600 underline"
            >
              LinkedIn
            </a>
          </p>
        </div>

        <Form />
      </div>
    </div>
  );
};

export default portfolio;
