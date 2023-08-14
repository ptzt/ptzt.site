import { useRef, useState } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import { ImSpinner2 } from "react-icons/im";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from 'emailjs-com';


const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

const EmailContent = () => {
    const email = useRef<string>("");
    const message = useRef<string>("");
    const [sending, setSending] = useState<boolean>(false);
    const [errMsg, setErrMsg] = useState<string>("");
    const [messageSent, setMessageSent] = useState<boolean>(false);



    const emailRegex = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    // Dentro de tu componente
    const handleSendClick = async () => {
        if (!email.current || !message.current) {
            setErrMsg("Por favor, completa tanto el correo electrónico como el mensaje.");
            return;
        }

        if (!emailRegex.test(email.current)) {
            setErrMsg("Dirección de correo electrónico no válida.");
            return;
        }

        try {
            setSending(true);

            const result = await emailjs.send(
                serviceId,
                templateId,
                {
                    to_name: 'Tomas',
                    email: email.current,
                    message: message.current,
                },
                userId
            );

            if (result.text === 'OK') {
                setMessageSent(true);
                setErrMsg('');
                email.current = '';
                message.current = '';
            } else {
                setErrMsg('No se pudo enviar el correo electrónico. Por favor, intenta de nuevo más tarde.');
            }
        } catch (error) {
            setErrMsg('Ocurrió un error al enviar el correo electrónico. Por favor, intenta de nuevo más tarde.');
        } finally {
            setSending(false);
        }
    };



    return (
        <div className="md:col-span-2 h-auto min-h-[21.5rem] row-span-3 bg-opacity-50 bg-white dark:bg-white/5 rounded-md p-4 border border-zinc-800/50">
            <AnimatePresence exitBeforeEnter>
                {messageSent && (
                    <motion.p
                        key={"contactThankYou"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="w-full h-full flex items-center justify-center text-gray-400 text-sm"
                    >
                        ¡Gracias! Me pondré en contacto contigo pronto.
                    </motion.p>
                )}
                {!messageSent && (
                    <motion.div
                        key={"contactForm"}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        <h1 className="font-bold text-sm dark:text-slate-500 mb-1">EMAIL</h1>
                        <input
                            placeholder="ejemplo@gmail.com"
                            type="text"
                            onChange={(e: any) => (email.current = e.target.value)}
                            className="w-full p-2 mb-4 rounded-md bg-slate-300/50 dark:bg-slate-200/5 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20"
                        />

                        <h1 className="font-bold text-sm dark:text-slate-500 mb-1">MESSAGE</h1>
                        <textarea
                            placeholder="Hola Tomas"
                            onChange={(e: any) => (message.current = e.target.value)}
                            className="w-full min-h-[9rem] p-2 h-36 mb-4 rounded-md bg-slate-300/50 dark:bg-slate-200/5 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20"
                        />

                        <div className="w-full flex flex-row justify-between items-center">
                            <p className="text-gray-900 dark:text-gray-300 text-sm">{errMsg}</p>

                            <button
                                onClick={handleSendClick}
                                className="border border-gray-800 hover:bg-gray-200 dark:border-indigo-600/80 dark:bg-indigo-600/70 dark:hover:bg-indigo-500/70 flex flex-row items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-colors duration-75"
                            >
                                <span className="mt-[2px]">Enviar</span>
                                {!sending && <RiSendPlane2Fill className="ml-2" />}
                                {sending && <ImSpinner2 className="w-4 h-4 ml-2 animate-spin" />}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default EmailContent;
