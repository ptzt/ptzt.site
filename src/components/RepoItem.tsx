import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";

const Languages = {
  TypeScript: "#2b7489",
  JavaScript: "#F1E05A",
  Python: "#FFFFFF",
};

interface RepoProps {
  name: string;
  description: string;
  language: "TypeScript" | "JavaScript";
  homepage: string;
}

const RepoItem = ({ name, description, language, homepage }: RepoProps) => {
  return (
    <div className="flex flex-col h-36 p-4 bg-white/10 dark:bg-black/10 rounded-md border border-slate-400 hover:border-slate-700 dark:border-slate-800 dark:hover:border-slate-600 transition-colors duration-75 ">
      <a
        href={`https://github.com/ptzt/${name}`}
        rel="noreferrer"
        target="_blank"
      >
        <h1 className="font-semibold mb-1 cursor-pointer">{name}</h1>
      </a>
      <p className="text-sm text-gray-900 dark:text-gray-100/70">
        {description}
      </p>
      <div className="mt-auto flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <motion.div
            className="w-3 h-3 rounded-full mr-1"
            style={{
              background: Languages[language],
              border: `solid 3px ${Languages[language]}`,
            }}
          />
          {language}
        </div>
        <Link href={`${homepage}`} target="_blank">
          <button className="dark:bg-slate-50 hover:bg-slate-500 dark:text-black font-bold py-2 px-4 rounded-full bg-black text-white ">
            Deploy
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RepoItem;
