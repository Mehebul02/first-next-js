import Link from "next/link";

const AboutContent = () => {
    return (
        <div>
          <Link href='/about/history'>History</Link>
          <Link href='/about/mission'>Mission</Link>
        </div>
    );
};

export default AboutContent;