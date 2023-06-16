import React from "react";
import EmailContent from "@/components/talk/EmailContent";
import ContactLink from "../components/talk/ContactLink";
import { SiTwitter, SiDiscord } from "react-icons/si";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.15 }}
            className="mt-36 w-full"
        >
            <h1 className="text-black dark:text-white font-bold text-3xl mb-3 mt-8">Charlemos 💬</h1>
            <p className="text-gray-800 dark:text-gray-200 mb-6">
            ¿Tiene alguna consulta o desea conectarse? No dude en dejar un mensaje a continuación o ponerse en contacto a través de Discord, Twitter o correo electrónico.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 mb-20">
                <EmailContent />

                <div className="row-start-1 md:row-auto">
                    <ContactLink
                        name="@tomas"
                        icon={<SiDiscord className="w-6 h-6 text-[#5865F2]" />}
                        link=""
                        borderColor="hover:border-[#5865F2]/50"
                    />

                    <ContactLink
                        name="@ptztdev"
                        icon={<SiTwitter className="w-6 h-6 text-[#1DA1F2]" />}
                        link="https://twitter.com/ptztdev"
                        borderColor="hover:border-[#1DA1F2]/50"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
