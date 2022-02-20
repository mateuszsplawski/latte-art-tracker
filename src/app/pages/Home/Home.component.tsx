import { useTranslations } from 'lib/translations';
import { Layout, ParagraphRegular, Section } from 'lib/ui-kit';
import { Logo } from 'lib/ui-kit';

export const Home = () => {
  const t = useTranslations();

  return (
    <Layout>
      <Section isCentered>
        <Logo />

        <ParagraphRegular>Hello</ParagraphRegular>
      </Section>
    </Layout>
  );
};
