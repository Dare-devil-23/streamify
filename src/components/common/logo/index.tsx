'use client';
import { motion } from "framer-motion";

interface Props {
    title: string;
}

const Logo: React.FC<Props> = ({ title }: Props) => {
    return (
        <motion.div>
            <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 text-2xl md:text-4xl font-bold "
                initial={{ backgroundPosition: '0% 50%' }}
            >
                {title}
            </motion.span>
        </motion.div>
    );
};

export default Logo;
