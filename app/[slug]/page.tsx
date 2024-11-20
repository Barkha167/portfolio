import { notFound } from 'next/navigation';
import { About } from '@/components/about';
import { Projects } from '@/components/projects';
import { Blogs } from '@/components/blogs';
import { Contact } from '@/components/contact';

const components: { [key: string]: React.ComponentType } = {
  about: About,
  projects: Projects,
  blog: Blogs,
  contact: Contact,
};

type DynamicPageProps = {
  params: { slug: string };
};

export default function DynamicPage({ params }: DynamicPageProps) {
  const Component = components[params.slug];

  if (!Component) {
    notFound(); // If no matching component is found, show the 404 page
    return null; // Ensure the page doesn't render anything after calling notFound()
  }

  return (
    <div className="container mx-auto px-4">
      <Component />
    </div>
  );
}
