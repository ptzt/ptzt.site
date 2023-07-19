import RepoItem from '@/components/RepoItem';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

const Projects = () => {
  const [projects, setProjects] = useState<any>([]);
  const [loading, setLoading] = useState(true)
  const [t] = useTranslation("global");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://ptztsitebackend-production.up.railway.app/api/projects');
        const data = await response.json();
        setProjects(data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false)
      }
    };

    fetchProjects();
  }, []);

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
        {projects.map((project) => {
          return (
            <RepoItem
              key={project.id}
              name={project.properties.title.rich_text[0].plain_text}
              description={project.properties.description.rich_text[0].plain_text}
              language={project.properties.language.rich_text[0].plain_text}
              id={project.properties.ID.unique_id.number}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
export default Projects;
