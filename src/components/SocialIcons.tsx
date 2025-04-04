import Link from "next/link"
import { FaGithub, FaLinkedin, FaWhatsapp, FaXTwitter } from "react-icons/fa6"

export const SocialIcons = () => {


    return (
        <div className="flex space-x-4 md:space-x-5 text-gray-400">
           
            <Link
                href="https://linkedin.com/in/preston-mayieka"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
                aria-label="LinkedIn"
            >
                <FaLinkedin className="size-5 md:size-6 hover:text-white transition-colors" />
            </Link>
            <Link
                href="https://github.com/preston176"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
                aria-label="GitHub"
            >
                <FaGithub className="size-5 md:size-6 hover:text-white transition-colors" />
            </Link>
            <Link
                href="https://wa.me/254799078848"
                target="_blank"
                className=""
                rel="noopener noreferrer"
                prefetch={false}
                aria-label="WhatsApp"
            >
                <FaWhatsapp className="size-5 md:size-6 hover:text-white transition-colors" />
            </Link>
            <Link
                href="https://X.com/preston_mayieka"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
                aria-label="Twitter"
            >
                <FaXTwitter className="size-5 md:size-6 hover:text-white transition-colors" />
            </Link>
        </div>
    )
}