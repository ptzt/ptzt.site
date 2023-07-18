import React from "react";
import { useTranslation } from "react-i18next";
import RepoItem from "@/components/RepoItem";
import { motion } from "framer-motion";

interface AppProps {
  topRepos: Record<any, any>;
}

const Projects = ({ topRepos }: AppProps) => {
  const [t] = useTranslation("global");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ ease: "easeOut", duration: 0.15 }}
      className="mt-24 w-full mb-32"
    >
      <h2 className="font-medium text-3xl mb-4">{t("page.home.subtitle3")}</h2>
      <p className="text-gray-900 dark:text-gray-300 leading-6 tracking-wide mb-6">
        {t("page.home.description3")}
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-1 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
        {topRepos.map((repo: Record<string, any>) => {
          return (
            <RepoItem
              key={repo.name}
              name={repo.name}
              description={repo.description}
              language={repo.language}
              homepage={repo.homepage}
              id={repo.id}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export async function getStaticProps() {
  const repos = await fetch(
    `https://api.github.com/users/ptzt/repos?type=owner&per_page=10`
    //`https://jsonplaceholder.typicode.com/users`

  ).then((res) => res.json());

  let topRepos = [];

  if (Array.isArray(repos)) {
    topRepos = repos
      .sort(
        (a: Record<string, any>, b: Record<string, any>) =>
          b.stargazers_count - a.stargazers_count
      )
      .slice(0, 4);
  }
  return {
    props: { topRepos },
    revalidate: 3600,
  };
}

export default Projects;
