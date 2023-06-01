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
import { useTranslation } from "react-i18next";

interface AppProps {
  topRepos: Record<any, any>;
}

function SafeHydrate({ children }: any) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
}

const Home = ({ topRepos }: AppProps) => {
  const [t] = useTranslation("global");
  return (
    <SafeHydrate>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ ease: "easeOut", duration: 0.15 }}
        className="mt-24 w-full mb-32"
      >
        <h1 className="mt-36 font-bold text-4xl md:text-5xl mb-4">
          {t("page.home.title")}
        </h1>
        <p className="text-gray-900 dark:text-gray-300 leading-6 tracking-wide mb-12">
          {t("page.home.description")}
        </p>
        <h2 className="font-medium text-3xl mb-4">
          {t("page.home.subtitle1")}
        </h2>
        <p className="text-gray-900 dark:text-gray-300 leading-6  tracking-wide mb-12">
          {t("page.home.description1")}
        </p>
        <h2 className="font-medium text-3xl mb-4">
          {t("page.home.subtitle2")}
        </h2>
        <p className="text-gray-900 dark:text-gray-300 leading-6  tracking-wide mb-6">
          {t("page.home.description2")}
        </p>
        <div className="w-full flex flex-wrap flex-row justify-center p-1 border border-slate-800 rounded-md bg-white/10 dark:bg-black/10 mb-12">
          <TechItem icon={SiTypescript} name="TypeScript" />
          <TechItem icon={SiVisualstudiocode} name="VSCode" />
          <TechItem icon={SiReact} name="React.js" />
          <TechItem icon={SiNodeJs} name="Node.js" />
          <TechItem icon={SiJavascript} name="JavaScript" />
          <TechItem icon={SiYarn} name="Yarn" />
          <TechItem icon={SiNextJs} name="Next.js" />
          <TechItem icon={SiTailwindCSS} name="TailwindCSS" />
          <TechItem icon={SiPostgresql} name="Postgresql" />
          <TechItem icon={SiGit} name="Git" />
          <TechItem icon={SiMongodb} name="MongoDB" />
        </div>

        {/* <h2 className="font-medium text-3xl mb-4">
          {t("page.home.subtitle3")}
        </h2>
        <p className="text-gray-900 dark:text-gray-300 leading-6 tracking-wide mb-6">
          {t("page.home.description3")}
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
          {topRepos.map((repo: Record<string, any>) => {
            return (
              <RepoItem
                key={repo.name}
                name={repo.name}
                description={repo.description}
                language={repo.language}
              />
            );
          })}
        </div> */}
      </motion.div>
    </SafeHydrate>
  );
};

// export async function getStaticProps() {
//   const repos = await fetch(
//     `https://api.github.com/users/ptzt/repos?type=owner&per_page=100`
//   ).then((res) => res.json());

//   let topRepos = [];

//   if (Array.isArray(repos)) {
//     topRepos = repos
//       .sort(
//         (a: Record<string, any>, b: Record<string, any>) =>
//           b.stargazers_count - a.stargazers_count
//       )
//       .slice(0, 4);
//   }
//   return {
//     props: { topRepos },
//     revalidate: 3600,
//   };
// }

export default Home;
