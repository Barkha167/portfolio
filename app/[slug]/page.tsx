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

export default function DynamicPage({ params }: { params: { slug: string } }) {
  const Component = components[params.slug];

  if (!Component) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4">
      <Component />
    </div>
  );
}