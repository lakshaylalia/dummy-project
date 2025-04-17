import Navbar from "@/components/Navbar";
import CardContainer from "@/components/CardContainer";
import CoursesContainer from "@/components/CoursesContainer";
import CertificatesContainer from "@/components/CertificatesContainer";
import RecommendationsContainer from "@/components/RecommendedContainer";

export default function Home() {
  return (
      <section className="main bg-[#f5f5f5] w-full min-h-screen">
        <Navbar />
        <CardContainer />
        <CoursesContainer />
        <CertificatesContainer />
        <RecommendationsContainer />
      </section>
  );
}
