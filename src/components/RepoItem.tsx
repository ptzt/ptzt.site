import { motion } from "framer-motion";
import { AiOutlineStar } from 'react-icons/ai'
import { BiGitRepoForked } from 'react-icons/bi'

interface LanguageColors {
  [key: string]: string;
}

const Languages: LanguageColors = {
  TypeScript: "#2b7489",
  JavaScript: "#F1E05A",
  Python: "#12c000",
};

interface RepoProps {
  url: string;
  name: string;
  description: string;
  language: string;
}

const RepoItem = ({ name, description, language, url }: RepoProps) => {
  return (
    <a href={url} rel="noreferrer" target="_blank" >
      <div className="flex flex-col h-36 p-4 bg-white/10 dark:bg-black/10 rounded-md border border-slate-400 hover:border-slate-700 dark:border-slate-800 dark:hover:border-slate-600 transition-colors duration-75 cursor-pointer">
        <h1 className="font-semibold mb-1">{name}</h1>
        <p className="text-sm text-gray-800/70 dark:text-gray-100/70">{description}</p>
        <div className="mt-auto flex flex-row gap-4 text-gray-700 dark:text-gray-300 text-sm">
          <div className="flex flex-row items-center">
            <motion.div
              className="w-3 h-3 rounded-full mr-1"
              style={{ background: Languages[language], border: `solid 3px ${Languages[language]}` }}
            />
            {language}
          </div>
        </div>
      </div>
    </a>
  );
};

export default RepoItem;
