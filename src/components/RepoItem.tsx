import { motion } from "framer-motion";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";

const Languages = {
    TypeScript: "#2b7489",
    Python: "#3572A5",
};

interface RepoProps {
    name: string;
    description: string;
    language: "TypeScript" | "Python";
}

const RepoItem = ({ name, description, language }: RepoProps) => {
    return (
        <a href={`https://github.com/ptzt/${name}`} rel="noreferrer" target="_blank">
            <div className="flex flex-col h-36 p-4 bg-white/10 dark:bg-black/10 rounded-md border border-slate-400 hover:border-slate-700 dark:border-slate-800 dark:hover:border-slate-600 transition-colors duration-75 cursor-pointer">
                <h1 className="font-semibold mb-1">{name}</h1>
                <p className="text-sm text-gray-900 dark:text-gray-100/70">{description}</p>
                <div className="mt-auto flex flex-row gap-4 text-gray-700 dark:text-gray-300 text-sm">
                    <p className="flex flex-row items-center">
                        <motion.div
                            className="w-3 h-3 rounded-full mr-1"
                            style={{ background: Languages[language], border: `solid 3px ${Languages[language]}` }}
                        />
                        {language}
                    </p>

                </div>
            </div>
        </a>
    );
};

export default RepoItem;
