import { FiPhone, FiMail, FiClock } from "react-icons/fi";
import Container from "@/components/ui/Container/Container";

export default function TopBar() {
  return (
    <div className="bg-[var(--primary-dark)] text-white text-sm">
      <Container>
        <div className="flex h-10 items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="tel:+14162855903"
              className="flex items-center gap-2 hover:text-gray-200 transition"
            >
              <FiPhone size={14} />
              <span>+1 (416) 285-5903</span>
            </a>

            <a
              href="mailto:info@acplumbingheating.ca"
              className="hidden md:flex items-center gap-2 hover:text-gray-200 transition"
            >
              <FiMail size={14} />
              <span>info@acplumbingheating.ca</span>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <FiClock size={14} />
            <span>Mon - Fri : 8:00 AM - 6:00 PM</span>
          </div>
        </div>
      </Container>
    </div>
  );
}