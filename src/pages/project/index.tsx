import RepoItem from '@/components/RepoItem';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import projectsData from '../../data/projectsData';
import { BeatLoader } from 'react-spinners';

interface Project {
  id: number;
  name: string;
  description: string;
  language: string;
}

const truncateDescription = (description, maxWords) => {
  const words = description.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...'; // Agrega "..." al final para indicar que se truncó la descripción
  }
  return description;
};


const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [t] = useTranslation('global');

  useEffect(() => {
    setTimeout(() => {
      setProjects(projectsData);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ ease: 'easeOut', duration: 0.15 }}
      className="mt-24 w-full mb-32"
    >
      <h2 className="font-medium text-3xl mb-4">{t('page.home.subtitle3')}</h2>
      <p className="text-gray-900 dark:text-gray-300 leading-6 tracking-wide mb-6">
        {t('page.home.description3')}
      </p>
      {/* Loading */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <BeatLoader color='grey' />
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-1 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
          {projects.map((project) => (
            <RepoItem
              key={project.id}
              name={project.name}
              description={truncateDescription(project.description, 10)}
              language={project.language}
              id={project.id}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Projects;
