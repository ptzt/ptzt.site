import { motion } from "framer-motion";
import { TechItem } from "@/components/TechItem";
import RepoItem from "@/components/RepoItem";
import {
  SiVisualstudiocode,
  SiGit,
  SiNextdotjs as SiNextJs,
  SiNodedotjs as SiNodeJs,
  SiPostgresql,
  SiReact,
  SiTailwindcss as SiTailwindCSS,
  SiTypescript,
  SiYarn,
  SiJavascript,
  SiMongodb,
} from "react-icons/si";
import Link from "next/link";
import { BiLandscape } from "react-icons/bi";


function SafeHydrate({ children }: any) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
}

interface AppProps {
  topRepos: Record<any, any>
}

const posts = [{
  id: 1,
  name: "Feca App",
  description: "Aplicacion de café",
  language: "JavaScript",
},

{
  id: 2,
  name: "ptzt.site",
  description: "Portfolio",
  language: "TypeScript"
}
]

const Index = ({ topRepos }: AppProps) => {
  return (
    <SafeHydrate>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ ease: "easeOut", duration: 0.15 }}
        className="mt-24 w-full mb-14"
      >
        <h1 className="mt-28 font-bold text-4xl md:text-5xl mb-4 ">
          Hola, soy Tomas👋
        </h1>
        <p className="text-gray-900 dark:text-gray-300 leading-6 tracking-wide mb-12">
          Soy un programador de 22 años de Argentina y me gusta el trabajo en equipo, ya que de esa manera puedo aprender y compartir mis conocimientos. Actualmente estoy centrado en el desarrollo frontend y me mantengo en constante capacitación para poder desarrollar código de calidad.
        </p>
        <h2 className="font-medium text-3xl mb-4">
          ¿Qué hago?💭
        </h2>
        <p className="text-gray-900 dark:text-gray-300 leading-6  tracking-wide mb-12">
          Actualmente soy desarrollador front end con experiencia en React, y me encuentro realizando una capacitación en NextJS, pero me encuentro abierto a nuevas propuestas y tecnologias que me ayuden a crecer profesionalmente.
        </p>
        <h2 className="font-medium text-3xl mb-4">
          Tecnologías💻
        </h2>
        <p className="text-gray-900 dark:text-gray-300 leading-6  tracking-wide mb-6">
          Utilizo una amplia gama de herramientas para abordar cada obstáculo de la manera más eficiente posible, voy aprendiendo tecnologias nuevas con mucho esfuerzo y dedicacion, pero estas son las que mejor controlo hasta el momento.
        </p>
        <div className="w-full flex flex-wrap flex-row justify-center p-1 border border-slate-800 rounded-md bg-white/10 dark:bg-black/10 mb-12">
          <TechItem icon={SiTypescript} name="TypeScript" />
          <TechItem icon={SiVisualstudiocode} name="VSCode" />
          <TechItem icon={SiReact} name="React.js" />
          <TechItem icon={SiNodeJs} name="Node.js" />
          <TechItem icon={SiJavascript} name="JavaScript" />
          <TechItem icon={SiNextJs} name="Next.js" />
          <TechItem icon={SiTailwindCSS} name="TailwindCSS" />
          <TechItem icon={SiPostgresql} name="Postgresql" />
          <TechItem icon={SiGit} name="Git" />
          <TechItem icon={SiMongodb} name="MongoDB" />
        </div>

        <h2 className="font-medium text-3xl mb-4">
          Proyectos 🛠️
        </h2>
        <p className="text-gray-900 dark:text-gray-300 leading-6  tracking-wide mb-6">
          Disfruto creando proyectos que me permitan aprender y mejorar mis habilidades. A continuacion dejo algunos de mis proyectos.
        </p>
        {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
          {topRepos.map((repo: Record<string, any>) => {
            return (
              <RepoItem
                key={repo.name}
                name={repo.name}
                description={repo.description}
                stars={repo.stargazers_count}
                forks={repo.forks_count}
                language={repo.language}
              />
            );
          })}
        </div> */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
          {posts.map((repo: Record<string, any>) => {
            return (
              <RepoItem
                key={repo.id}
                name={repo.name}
                description={repo.description}
                language={repo.language}
              />
            );
          })}

        </div>
      </motion.div>
    </SafeHydrate>
  );
};

export async function getStaticProps() {
  const stats = await fetch(`https://api.github-star-counter.workers.dev/user/ptzt`).then(res => res.json());
  const repos = await fetch(`https://api.github.com/users/ptzt/repos?type=owner&per_page=100`).then(res =>
    res.json()
  );

  const topRepos = repos
    .sort((a: Record<string, any>, b: Record<string, any>) => b.stargazers_count - a.stargazers_count)
    .slice(0, 4);

  return {
    props: { topRepos },
    revalidate: 3600,
  };
}



export default Index;
