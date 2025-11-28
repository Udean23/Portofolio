import DomeGallery from "./DomeGallery";
import { motion, AnimatePresence } from "framer-motion";

const Sertificate = () => {
    return (
        <div className="w-full bg-black flex flex-col justify-center px-4 py-16 text-white">
            <div className="mb-12 flex flex-col justify-between gap-4">
                <div className="flex gap-10">
                    <div>
                        <DomeGallery />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sertificate;