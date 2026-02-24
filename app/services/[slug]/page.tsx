import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicePageLayout from '../../components/ServicePageLayout';
import { services } from '../../data/services';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = services[slug];

    if (!service) {
        return {
            title: 'Service Not Found | Ehack Technology',
        };
    }

    return {
        title: service.metadata.title,
        description: service.metadata.description,
    };
}

export default async function DynamicServicePage({ params }: Props) {
    const { slug } = await params;
    const service = services[slug];

    if (!service) {
        notFound();
    }

    return (
        <ServicePageLayout
            title={service.title}
            description={service.description}
            heroImage={service.heroImage}
            whatIs={service.whatIs}
            whatWeOffer={service.whatWeOffer}
            whatWeCover={service.whatWeCover}
            whyAssessment={service.whyAssessment}
            benefits={service.benefits}
            whyChooseUs={service.whyChooseUs}
            serviceName={service.serviceName}
            relatedServices={service.relatedServices}
        />
    );
}

export async function generateStaticParams() {
    return Object.keys(services).map((slug) => ({
        slug: slug,
    }));
}
