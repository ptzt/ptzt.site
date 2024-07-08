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

const posts = [{
  id: 1,
  url: "https://www.feca.app/",
  name: "Feca App",
  description: "Aplicacion de café",
  language: "JavaScript",
},

{
  id: 2,
  url: "https://github.com/ptzt/ptzt.site",
  name: "ptzt.site",
  description: "Portfolio",
  language: "TypeScript"
}
]

const Index = () => {
  return (
    <SafeHydrate>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ ease: "easeOut", duration: 0.15 }}
        className="mt-24 w-full mb-14"
      >
        <h1 className="mt-28 font-bold text-4xl md:text-5xl mb-4">
          Hola, soy Tomas👋
        </h1>
        <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12">
          Soy un programador de 23 años de Argentina y me gusta el trabajo en equipo, ya que de esa manera puedo aprender y compartir mis conocimientos. Actualmente estoy centrado en el desarrollo frontend y me mantengo en constante capacitación para poder desarrollar código de calidad.
        </p>
        <h2 className="font-medium text-3xl mb-4">
          ¿Qué hago?💭
        </h2>
        <p className="text-gray-900 dark:text-gray-300 leading-6  tracking-wide mb-12">
          Actualmente estoy trabajando en el front end con <a href="https://nextjs.org/" className="text-blue-700 dark:text-blue-400 underline" target="_blank">NextJs</a> pero nunca estoy cerrado a nuevas tecnologias o propuestas!
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
          Disfruto creando proyectos que me permitan aprender y mejorar mis habilidades. Aqui hay algunos interesantes, pero tambien puedes visitar mi <a href="https://github.com/ptzt" target="_blank" className="text-blue-700 dark:text-blue-400 underline">Github</a>.
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
          {posts.map((repo: Record<string, any>) => {
            return (
              <RepoItem
                key={repo.id}
                url={repo.url}
                name={repo.name}
                description={repo.description}
                language={repo.language} />
            );
          })}

        </div>
      </motion.div>
    </SafeHydrate>
  );
};



export default Index;
